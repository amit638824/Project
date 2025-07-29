import express from 'express';
import { userModel } from '../model/table.js';

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

export default router;
