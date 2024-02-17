import express from "express";
import route from "./src/routes/user/user.route.js";
import login from "./src/routes/login/login.route.js";

const app = express();

app.use(express.json());

app.use(route);
app.use(login);

export default app;