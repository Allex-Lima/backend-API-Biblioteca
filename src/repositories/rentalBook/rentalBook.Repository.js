import { BookRental }from "../../models/rentalBook/bookRental.js";

export const rentalBookRepository = (datas) => BookRental.create(datas);