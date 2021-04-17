// the functions for our functions
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { response } from "express";
import User from "../models/Users.js";

dotenv.config();

//add user
export async function addUser(req, res) {
    try {
        //to encrpyt the password
        //async necessary if using await
        bcrypt.hash(req.body.Password, 10).then(async (hash) => {
            let userObj = {
                Email: req.body.Email,
                Password: hash,
                FullName: req.body.FullName
            }
            let user = await User.create(userObj);
            if (user) {
                res.status(200).json({// if memeber is created successfully
                    success: true,
                    message: "User created successfully",
                    data: user
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: "User could not be created at this time"
                })
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something is wrong"
        })
    }
}

// view a user
export async function viewUser(req, res) {
    try {
        let specificuser = await User.findAll({ where: { UserID: req.params.id } });
        if (specificuser) {
            res.json({
                success: true,
                message: "User retrieved successfully",
                data: specificuser
            })
        } else {
            res.json({
                success: true,
                message: "User not found"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something is wrong"
        })
    }
}

// view all users
export async function viewAllUsers(req, res) {
    try {
        let allusers = await User.findAll();
        if (allusers) {
            res.json({
                success: true,
                message: "User list retrieved successfully",
                data: allusers
            })
        } else {
            res.json({
                success: true,
                message: "User list not found"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something is wrong"
        })
    }
}

// sign in
// export async function signIn (req, res){
//     try{
//         let updatemember = await User.update(req.body, {where: {MemberID: req.params.id}})
//         if (updatemember){
//             res.json({ 
//                 success: true,
//                 message: "Feature has been changed",
//                 data: updatemember
//             })
//         } else{
//             res.json({
//                 success: true,
//                 message: "Member was not deleted"
//             })
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             success: false,
//             message: "Something is wrong" 
//         })
//     }
// }

//sign in
export async function signIn(req, res) {
    //check that user exists
    //check that password is correct
    //create a JWT for them to authenticate API requests
    try {
        let user = await User.findOne({ where: { Email: req.body.Email } })
        if (!user) {
            return res.status(401).json({
                status: false,
                message: "Authentication failed: User with email not found"
            })
        }
        bcrypt.compare(req.body.Password, user.Password).then(response => {
            if (!response) {
                return res.status(401).json({
                    status: false,
                    message: "Authentication failed: Incorrect password"
                })
            }
            let authToken = jwt.sign({ Email: user.Email, UserID: user.UserID },
                process.env.AUTH_Key, { expiresIn: "1h" });
            return res.status(200).json({
                status: true,
                message: "User authentication sucessful",
                user: { FullName: user.FullName, Email: user.Email, UserId: user.UserID },
                token: authToken,
                expiresIn: 3600 //is in seconds
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Something is wrong"
        })

    }
}