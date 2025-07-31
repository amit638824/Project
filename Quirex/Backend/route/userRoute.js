import express from 'express';
import { userModel } from '../model/table.js';
const router = express.Router();
router.post('/user-register', async (req, res) => {

  const { name, email, password, contact, address } = req.body;
  const { profile } = req.files;
  profile.mv("uploads/" + profile?.name, (err) => {
    if (err) {
      res.send(err)
    }
  }
  )
  const isExist = await userModel.findOne({ email });
  if (isExist) {
    res.send("User already exist")
  } else {
    const data = new userModel({ name, email, password, contact, address, profile: profile?.name });
    const result = await data.save();
    res.send(result)
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email,"fkdlfjglkdfjglk");
    
    const isLogin = await userModel.findOne({ email, password });
    if (isLogin) {
      res.json({
        code: 200,
        message: "Login Successfully..",
        data: isLogin
      })
    } else {
      res.json({
        code: 400,
        message: "Invalid Credentials.",
        data: ""
      })
    }
  } catch (err) {
    res.json({
      code: 500,
      message: "Internal Server Error",
      data: ''
    })
  }

})

export default router;