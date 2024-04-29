import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

 
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

        jwt.sign({
            id:UserSaved._id, 
        },"secret123",
        {
            expiresIn:"1d"
        },
        (err, token) => {
            if(err) console.log(err);
            res.json({token});
        });

        // res.json({
        //    id:UserSaved._id,
        //    username:UserSaved.username,
        //    email:UserSaved.email,
        //    createdAt:UserSaved.createdAt,
        //    updatedAt:UserSaved.updatedAt,
        // });
    } catch (error) {
        console.log(error);
    }

};

export const login = (req,res) => res.send("login");
