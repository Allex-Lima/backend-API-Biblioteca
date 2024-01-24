import mongoose from "mongoose";
import "dotenv/config";

const connectDatabase = () => {
	console.log("Awaiting connect with database...");

	mongoose.connect(process.env.MONGODB_URI, {
	}).then(() => console.log("MongoDB connected successfully.")).catch((error) => console.log(error));
};

export default connectDatabase;