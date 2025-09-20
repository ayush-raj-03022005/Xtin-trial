import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
			unique: true,
		},
		// Add course reference
		course: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
			required: true,
		},
		duration: {
			type: Number, // Duration in seconds
			required: true,
		},
		order: {
			type: Number, // Order within the course
			required: true,
		},
		isPreview: {
			type: Boolean,
			default: false, // Free preview videos
		},
	},
	{
		timestamps: true,
	}
);
videoSchema.index({ course: 1, order: 1 }, { unique: true });
const Video = mongoose.model("Video", videoSchema);

export default Video;
