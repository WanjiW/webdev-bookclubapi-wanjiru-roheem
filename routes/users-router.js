import express from "express";
import { addUser, viewUser, viewAllUsers, signIn } from "../controllers/userscontroller.js";
import { Authenticate } from "../middlewares/auth.js";

const usersRouter = express.Router();

// add a member // old version
// membersRouter.post("/", (req, res) => {
//     res.send("This creates a member");
// });

//add a user = sign up (needs authentication)
usersRouter.post("/", Authenticate, addUser); // bcse add member function handles the requests

//add a user = sign in (no need for authentication) (signIn to differentiate from sign up)
usersRouter.post("/signIn", signIn);

// view a user (needs authentication)
usersRouter.get("/:id", Authenticate, viewUser);

// view all users (needs authentication)
usersRouter.get("/", Authenticate, viewAllUsers);

export default usersRouter;