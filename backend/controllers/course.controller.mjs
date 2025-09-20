import {
	availableCourses,
	purchasedCourses,
	purchasedCourseById,
} from "../repository/course.repository.mjs";
import { HTTP_STATUS } from "../constants/constants.mjs";

const getAvailableCourses = async (req, res) => {
	const courses = await availableCourses();
	return res.status(HTTP_STATUS.OK).json({
		status: HTTP_STATUS.OK,
		message: "Available courses retrieved successfully",
		data: courses,
	});
};

const getPurchasedCourses = async (req, res) => {
	const courses = await purchasedCourses(req.user.id);
	console.log(req.user);
	return res.status(HTTP_STATUS.OK).json({
		status: HTTP_STATUS.OK,
		message: "Purchased courses retrieved successfully",
		data: courses,
	});
};

const getCourseById = async (req, res) => {
	const course = await purchasedCourseById(req.user.id, req.params.courseId);
	return res.status(HTTP_STATUS.OK).json({
		status: HTTP_STATUS.OK,
		message: "Course retrieved successfully",
		data: course,
	});
};

const purchaseCourse = async (req, res) => {
	const { courseId } = req.params;
	const { transactionId, pricePaid, paymentMethod } = req.body;
	const purchasedAt = new Date();
	const course = await purchaseCourseById(
		req.user.id,
		courseId,
		transactionId,
		pricePaid,
		paymentMethod,
		purchasedAt
	);
	return res.status(HTTP_STATUS.OK).json({
		status: HTTP_STATUS.OK,
		message: "Course purchased successfully",
		data: course,
	});
};

export {
	getAvailableCourses,
	getPurchasedCourses,
	getCourseById,
	purchaseCourse,
};
