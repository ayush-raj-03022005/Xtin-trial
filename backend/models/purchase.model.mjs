import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		courseId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
			required: true,
		},
		pricePaid: {
			type: Number,
			required: true,
			min: 0,
		},
		purchasedAt: {
			type: Date,
			default: Date.now,
		},
		paymentMethod: {
			type: String,
			enum: ["card", "upi", "netbanking", "wallet"],
			required: true,
		},
		transactionId: {
			type: String,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
);

purchaseSchema.index({ userId: 1, courseId: 1 }, { unique: true });

const Purchase = new mongoose.model("Purchase", purchaseSchema);
export default Purchase;
