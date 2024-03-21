import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
		select: false,
	}
});

UserSchema.pre("save", async function (next) {
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

UserSchema.pre("findOneAndUpdate", async function (next) {
	const update = this.getUpdate();
	console.log(update);
	if (update.password) {
		try {
			update.password = await bcrypt.hash(update.password, 10);
			return next();

		} catch (error) {
			return next(error);
		}
	}
	return next();
});



export const User = mongoose.model("User", UserSchema);

