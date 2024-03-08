import { Router } from "express";

import { createBook, findAllBooks } from "../../controllers/book/book.controller.js";

const route = Router();

route.post("/user/book", createBook);
route.get("/user/book", findAllBooks);

export default route;