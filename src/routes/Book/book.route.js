import { Router } from "express";

import { 
	createBook, 
	findBookById, 
	findAllBooks,
	findBookByParameter,
} from "../../controllers/book/book.controller.js";

const route = Router();

route.post("/user/book", createBook);
route.get("/user/book", findAllBooks);

route.get("/user/bookparam", findBookByParameter);

route.get("/user/book/:id", findBookById);

export default route;