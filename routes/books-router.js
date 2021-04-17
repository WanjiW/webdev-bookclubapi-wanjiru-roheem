import express from "express";
import { addBook, viewBook, viewAllBooks, updateBook, deleteBook } from "../controllers/booksController.js";

const booksRouter = express.Router();

// add a member // old version
// membersRouter.post("/", (req, res) => {
//     res.send("This creates a member");
// });

booksRouter.post("/", addBook); // bcse add member function handles the requests

// view a member
booksRouter.get("/:id", viewBook);

// view all members
booksRouter.get("/", viewAllBooks);

// update members
booksRouter.put("/:id", updateBook);

// delete a member
booksRouter.delete("/:id", deleteBook);


export default booksRouter;