import express from "express";
import { addBorrowRequest, viewBorrowRequest, viewAllBorrowRequests, updateBorrowRequest, viewMemberBorrowings } from "../controllers/borrowrequestscontroller.js";

const borrowRequestRouter = express.Router();

// add a member // old version
// membersRouter.post("/", (req, res) => {
//     res.send("This creates a member");
// });

borrowRequestRouter.post("/", addBorrowRequest); // bcse add member function handles the requests

// view a member
borrowRequestRouter.get("/:id", viewBorrowRequest);

// view all members
borrowRequestRouter.get("/", viewAllBorrowRequests);

// update members
borrowRequestRouter.put("/:id", updateBorrowRequest);

//view borrowings by member
borrowRequestRouter.get("/:MemberID", viewMemberBorrowings);

export default borrowRequestRouter;