import Purchase from "../models/purchase.model.mjs";
import Video from "../models/video.model.mjs";
import Slide from "../models/slide.model.mjs";
import Course from "../models/course.model.mjs";

const availableCourses = async () => {
	try {
		const courses = await Course.find(
			{ isPublished: true },
			{
				courseId: 1,
				title: 1,
				description: 1,
				price: 1,
				thumbnail: 1,
				_id: 1,
			}
		);
		return courses;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const purchasedCourses = async (userId) => {
	try {
		// First, find all purchases for this user
		const purchases = await Purchase.find({ userId }).populate({
			path: "courseId",
			match: { isPublished: true },
			select: "courseId title description thumbnail price",
			populate: [
				{ path: "videos", select: "url" },
				{ path: "slides", select: "url" },
			],
		});

		const purchasedCourses = purchases.map((purchase) => purchase.courseId);

		return purchasedCourses;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
const purchasedCourseById = async (userId, courseId) => {
	try {
		const purchase = await Purchase.findOne({ userId, courseId }).populate({
			path: "courseId",
			match: { isPublished: true },
			select: "courseId title description thumbnail price",
			populate: [
				{ path: "videos", select: "url" },
				{ path: "slides", select: "url" },
			],
		});

		return purchase.courseId;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const purchaseCourseById = async (userId, courseId, transactionId, pricePaid, paymentMethod, purchasedAt) => {
	try {
		const purchase = await Purchase.create({
			userId,
            courseId,
            transactionId,
            paymentMethod,
            pricePaid,
            purchasedAt
		});
		return purchase;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
export { availableCourses, purchasedCourses, purchasedCourseById };
