import express from 'express';
import { propertyModel } from '../model/table.js'
const adminRoute = express.Router();
adminRoute.post('/add-property', async (req, res) => {
    try {
        const { title, price, area, description, location } = req.body;
        const { pic } = req.files;
          pic.mv("uploads/" + pic?.name, (err) => {
                res.json({
                    code: 400,
                    message: "Error in File Upload.",
                    data: ''
                })
            })
        const isExist = await propertyModel.findOne({ title });
        if (isExist) {
            res.json({
                code: 400,
                message: "Property Already Exist.",
                data: isExist
            })
        } else {
          
            const data = new propertyModel({ title, price, area, description, location, pic: pic?.name })
            const result = await data.save();
            res.json({
                code: 200,
                message: "Property Added Successfully..",
                data: result
            })
        } 
    } catch (err) {
        res.json({
            code: 500,
            message: "Internal Server Error.",
            data: ''
        })
    }


})

export default adminRoute;