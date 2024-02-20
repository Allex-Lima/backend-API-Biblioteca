import mongoose from "mongoose";
const { Schema, model } = mongoose;

const StudentSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	registration: {
		type: Number,
		required: true
	}
});

export const Student = model("Student", StudentSchema);