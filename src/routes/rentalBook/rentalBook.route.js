import { Router } from "express";
import { rentalBookController } from "../../controllers/rentalBook/rentalBook.controller.js";

const route = Router();

route.post("/user/rentalbook", rentalBookController);

export default route;