import jwt from "jsonwebtoken"
import User from "../models/Users.js"

const authMiddleware = async (res, res , next)=>{

    try{
        const token = request.headers.authorization;

        if(!token){
            return res.status(401).json({
                message:"No token provided"

            });
        }

        const decode = jwt.verify(token, process.env.JWt_SECRET);

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

