import express from "express";
import authRoutes from "./routes/user.routes.mjs";
import courseRoutes from "./routes/course.routes.mjs";
import connectDB from "./db/database.mjs";

const app = express();
connectDB();
// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // If using form data
app.use("/api", authRoutes);
app.use("/api", courseRoutes);

app.get("/", (req, res) => {
	res.status(200).json({ message: "Xtin Server is Live" });
});
export { app };
