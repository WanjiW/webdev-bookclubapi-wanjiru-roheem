// this is the file that contains all our routes

import express, { response } from "express";
import membersRouter from "./members-router.js";
import booksRouter from "./books-router.js";
import borrowRequestRouter from "./bookrequests-router.js"
import usersRouter from "./users-router.js";


const router = express.Router();  // handles all our routing

router.use("/members", membersRouter);
router.use("/books", booksRouter);
router.use("/borrowrequests", borrowRequestRouter);
router.use("/users", usersRouter)

export default router;