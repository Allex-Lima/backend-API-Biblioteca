import { Router } from "express";

import loginRoute from "./login/login.route.js";
import userRoute from "./user/user.route.js";
import studentRoute from "./student/student.route.js";
import bookRoute from "./Book/book.route.js";
import rentalBookRoute from "./rentalBook/rentalBook.route.js";

const router = Router();

router.use(loginRoute);
router.use(userRoute);
router.use(studentRoute);
router.use(bookRoute);
router.use(rentalBookRoute);

export default router;