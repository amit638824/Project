import express from 'express';
import {dbConnect} from './config/db.js';
import router from './route/userRoute.js';
import fileUpload from 'express-fileupload';
const app=express();
app.use(express.json());
app.use(fileUpload());
const PORT=9000; 
dbConnect();
 app.use('/api',router);
app.listen(PORT,()=>{
    console.log("Server running..."); 
})