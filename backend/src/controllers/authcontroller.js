import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/Users.js";

const generateToken =(id) =>{
    return jwt.sign({id}, process.env.JWT_SECR,{
        expiresIn:"30d",
    });
};

export const registerUser = async(req, res) =>{
    try{
        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const  hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            _id:user_id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id),
        });


    }
    catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};

export const loginUser = async(req, res) =>{
    try{
        const {email, password} =req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"Invalid User"
            });
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({
                message:"Invalid credentials"
            });
        }

        res.josn({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        });
    }

    catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}