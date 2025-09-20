import mongoose from "mongoose";

const slideSchema = new mongoose.Schema(
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
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },
        order: {
            type: Number, // Order within the course
            required: true,
        },
        // thumbnail: {
        //     type: String, // URL to slide thumbnail/preview image
        // },
        isFree: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Slide = mongoose.model("Slide", slideSchema);

export default Slide;
