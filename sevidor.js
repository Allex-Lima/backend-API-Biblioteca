import express from "express";
import route from "./src/routes/user/user.route.js";

const app = express();

app.use(express.json());

app.use(route);

export default app;