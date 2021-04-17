import dontenv from "dotenv";
import jwt from "jsonwebtoken";


dontenv.config();

// authenticate our requests
export function Authenticate(req, res, next){
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.AUTH_KEY);
        next();
    } catch (error) {
        res.status(401).json({
            status: false,
            message: "Authentication failed: Auth Token"
        })
    }
}