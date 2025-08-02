import express from 'express';
import { userModel, newsModel } from '../model/table.js';

const router = express.Router();

router.post('/user-register', async (req, res) => {
   try {
      const { name, email, password, contact, address } = req.body;
      const { profile } = req.files;

      profile.mv("uploads/" + profile.name, (err) => {
         if (err) {
            res.json({
               code: 400,
               message: "Failed File Upload!",
               data: ''
            })
         }
      });

      const isExist = await userModel.findOne({ email });
      if (isExist) {
         // return res.send("user already exist");
         res.json({
            code: 400,
            message: "User already exist!",
            data: isExist
         })
      } else {

         const data = new userModel({ name, email, password, contact, address, profile: profile.name });

         const result = await data.save();
         res.json({
            code: 200,
            message: "User registered successfully!",
            data: result
         })
      }


   } catch (error) {
      res.send("Something went wrong");
   }
});

router.post('/login', async (req, res) => {
   try {
      const { email, password } = req.body;
      const result = await userModel.findOne({ email, password });

      if (result) {
         res.json({
            code: 200,
            message: "Login Successfully....",
            data: result
         });
      } else {
         res.json({
            code: 400,
            message: "invalid credentials",
            data: ""
         });
      }
   } catch (error) {
      res.json({
         code: 500,
         message: "internal server error",
         data: ""
      });
   }
});

router.post('/add-news', async (req, res) => {
   try {
      const { title, category, type, url, desc, userId } = req.body;
      const isExist = await newsModel.findOne({ title });
      if (isExist) {
         res.json({
            code: 400,
            message: "Title Already Exist.",
            data: isExist
         })
      } else {
         const data = new newsModel({ title, category, type, url, desc, userId });
         const result = await data.save();
         res.json({
            code: 200,
            message: "News Added Successfully.",
            data: result
         })
      }
   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})
router.get("/user-your-news", async (req, res) => {
   try {
      const { userId } = req.query;
      const result = await newsModel.find({ userId }).sort({ createAt: -1 });
      res.json({
         code: 200,
         message: "Data fetched succeessfully..",
         data: result
      })
   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})

router.get("/admin-all-list", async (req, res) => {
   try {
      const result = await newsModel.find().sort({ createAt: -1 });
      res.json({
         code: 200,
         message: "Data fetched succeessfully..",
         data: result
      })
   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})

router.put("/admin-news-approved", async (req, res) => {
   try {
      const { _id, isApproved } = req.body;
      const result = await newsModel.findByIdAndUpdate({ _id }, { isApproved }, { new: true });
      if (result) {
         res.json({
            code: 200,
            message: "Updated succeessfully..",
            data: result
         })
      } else {
         res.json({
            code: 400,
            message: "Updated Failed.",
            data: result
         })
      }
   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})
export default router;
