import { BookRental }from "../../models/rentalBook/bookRental.js";

export const rentalBookRepository = async (datas) => await BookRental.create(datas);

export const findRentalBookRepository = async () => await BookRental.find({});

export const findRentalBookCollectionByIdRepository = async (id) => await BookRental.findOne({ _id: id }).populate("book");

export const insertRentalBookRepository = async (id, book) => await BookRental.findOneAndUpdate(
	{_id: id}, {$push: { book: book }}, { new: true }
);