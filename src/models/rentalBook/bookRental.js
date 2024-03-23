import mongoose from "mongoose";
const { Schema, model, } = mongoose;

const SchemaBookRental = new Schema({
	student: {
		type: Array,
		required: true
	},
	book: {
		type: Array,
		required: true
	},
});

export const BookRental =  model("BookRental", SchemaBookRental);