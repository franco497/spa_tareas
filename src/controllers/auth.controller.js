import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import {createAccessToken} from "../libs/jwt.js";


 
export const register = async (req,res) => {
    const {email,password,username} = req.body;

    try {

        const passwordHashs = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password:passwordHashs,
        });
        
        const UserSaved = await newUser.save();
        const token = await createAccessToken({id:UserSaved._id});
        res.cookie("token",token);
        res.json({
            id:UserSaved._id,
            username:UserSaved.username,
            email:UserSaved.email,
            createdAt:UserSaved.createdAt,
            updatedAt:UserSaved.updatedAt,
         });            
         } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export const login = (req,res) => res.send("login");
