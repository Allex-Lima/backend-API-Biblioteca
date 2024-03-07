import { Router } from "express";

const route = Router();

route.post("/user/book", createBook);

export default route;