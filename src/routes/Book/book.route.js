import { Router } from "express";

import { 
	createBook, 
	findBookById, 
	findAllBooks,
} from "../../controllers/book/book.controller.js";

const route = Router();

route.post("/user/book", createBook);
route.get("/user/book", findAllBooks);
route.get("/user/book/:id", findBookById);

export default route;