import { Router } from "express";
import {
	findRentalBookByIdCollectionController, findRentalBookController, 
	rentalBookController, 
	insertRentalBook 
} from "../../controllers/rentalBook/rentalBook.controller.js";
import { 
	validateId, 
	validateRentalBook 
} from "../../middlewares/validateId.js";

const route = Router();

route.post("/user/rentalbook", validateRentalBook, rentalBookController);

route.get("/user/rentalbook", findRentalBookController);

route.get("/user/rentalbook/:id/book", validateId, findRentalBookByIdCollectionController);

route.patch("/user/rentalbook/:id/book", validateId,insertRentalBook);

export default route;