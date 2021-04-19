import express from "express";
import { addMember, viewMember, viewAllMembers, updateMember, deleteMember } from "../controllers/membersController.js";
import { Authenticate } from "../middlewares/auth.js";

const membersRouter = express.Router();

// add a member // old version
// membersRouter.post("/", (req, res) => {
//     res.send("This creates a member");
// });

membersRouter.post("/", Authenticate, addMember); // bcse add member function handles the requests

// view a member
membersRouter.get("/:id", Authenticate, viewMember);

// view all members
membersRouter.get("/", viewAllMembers); // had authenticate

// update members
membersRouter.put("/:id", Authenticate, updateMember);

// delete a member
membersRouter.delete("/:id", Authenticate, deleteMember);

export default membersRouter;