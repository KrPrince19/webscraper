import jwt from "jsonwebtoken"
import User from "../models/Users.js"

const authMiddleware = async (req, res , next)=>{

    try{
        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json({
                message:"No token provided"

            });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decode.id).select("-password");
        next();
    }
        catch(error){
            return res.status(401).json({
                message:"failed to verify token"
            });
        }
    };

    export default authMiddleware;

