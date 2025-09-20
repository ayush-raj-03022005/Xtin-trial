import express from "express";
import {
	getAvailableCourses,
	getPurchasedCourses,
	getCourseById,
	purchaseCourse,
} from "../controllers/course.controller.mjs";
import { authenticate } from "../middlewares/auth.mjs";
const router = express.Router();

router.get("/courses/available", getAvailableCourses);
router.get("/courses/purchased", authenticate, getPurchasedCourses);
router.get("/courses/:courseId", authenticate, getCourseById);
router.get("/courses/:courseId/purchase", authenticate, purchaseCourse);

export default router;
