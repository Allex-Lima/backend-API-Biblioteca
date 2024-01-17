import { Router } from "express";

const route = Router();

route.get("/user", (_req, res) => {
	return res.status(201).json({ message: "User created successfully." });
});

export default route;