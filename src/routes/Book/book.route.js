import { Router } from "express";

import { createBook } from "../../controllers/book/book.controller.js";

const route = Router();

route.post("/user/book", createBook);

export default route;