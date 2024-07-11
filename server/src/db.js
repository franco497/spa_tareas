import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        //await mongoose.connect('mongodb://localhost/merndb3');
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(">>> DB is connected");
    } catch (error) {
        console.log(error);
    } 
};



