import { Book } from "../../models/book/Book.js";

export const createBookRepository = (dataBook) => Book.create(dataBook);

export const findAllBooksRepository = () => Book.find({});

export const findBookByIdRepository = (id) => Book.findById({_id: id});