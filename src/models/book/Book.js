import mongoose from "mongoose";
const { Schema, model } = mongoose;

const BookSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	edition: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true
	}
});

export const Book = model("Book", BookSchema);