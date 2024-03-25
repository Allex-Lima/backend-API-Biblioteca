import { Router } from "express";

import { 
	createBook, 
	findBookById, 
	findAllBooks,
	findBookByParameter,
	deleteBook,
	updateBook,
} from "../../controllers/book/book.controller.js";
import { validateId } from "../../middlewares/validateId.js";

const route = Router();

route.post("/user/book", createBook);
route.get("/user/book", findAllBooks);

route.get("/user/bookparam", findBookByParameter);

route.get("/user/book/:id", findBookById);

route.delete("/user/book/:id", validateId, deleteBook);
route.delete("/user/book/", validateId);

route.patch("/user/book/:id", validateId ,updateBook);

export default route;