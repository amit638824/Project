import express from 'express';
import { userModel, newsModel } from '../model/table.js';

const router = express.Router();

router.post('/user-register', async (req, res) => {
   try {
      const { name, email, password, contact, address } = req.body;
      const { profile } = req.files;

      if (!profile) {
         return res.send("Profile image is required");
      }

      profile.mv("uploads/" + profile.name, (err) => {
         if (err) {
            return res.send(err);
         }
      });

      const isExist = await userModel.findOne({ email });
      if (isExist) {
         return res.send("user already exist");
      }

      const data = new userModel({
         name,
         email,
         password,
         contact,
         address,
         profile: profile.name
      });

      const result = await data.save();
      res.send(result);

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

export default router;
