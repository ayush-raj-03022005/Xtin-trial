import express from "express";
import {
	login,
	signup
} from "../controllers/user.controller.mjs";

const router = express.Router();

/* 🚀 AUTHENTICATION ROUTES */
router.post("/auth/login", login);
router.post("/auth/signup", signup);

export default router;
