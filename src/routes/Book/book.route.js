import { Router } from "express";

import { 
	createBook, 
	findBookById, 
	findAllBooks,
	findBookByParameter,
	deleteBook,
	updateBook,
} from "../../controllers/book/book.controller.js";
import { validateBookId } from "../../middlewares/validateBookId.js";

const route = Router();

route.post("/user/book", createBook);
route.get("/user/book", findAllBooks);

route.get("/user/bookparam", findBookByParameter);

route.get("/user/book/:id", findBookById);

route.delete("/user/book/:id", validateBookId, deleteBook);
route.delete("/user/book/", validateBookId);

route.patch("/user/book/:id", validateBookId ,updateBook);

export default route;