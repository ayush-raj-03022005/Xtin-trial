import mongoose from "mongoose";
import Slide from "./slide.model.mjs";
import Video from "./video.model.mjs";
const courseSchema = new mongoose.Schema(
	{
		courseId: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
		},
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		thumbnail: {
			type: String,
			required: true,
		},
		isPublished: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

// ✅ Add virtuals here
courseSchema.virtual("slides", {
	ref: "Slide",
	localField: "_id", // Course._id
	foreignField: "course", // Slide.course
});

courseSchema.virtual("videos", {
	ref: "Video",
	localField: "_id", // Course._id
	foreignField: "course", // Video.course
});

// ✅ Ensure virtuals show up in JSON / objects
courseSchema.set("toObject", { virtuals: true });
courseSchema.set("toJSON", { virtuals: true });
const Course = mongoose.model("Course", courseSchema);
export default Course;
