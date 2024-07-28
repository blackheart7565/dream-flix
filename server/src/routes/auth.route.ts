import express from "express";

import AuthController from "../controller/AuthController";

import { authMiddleware } from "../middleware/auth.middleware";

const authRouter = express.Router();

authRouter.post(
	"/registration",
	AuthController.registration
);

authRouter.post(
	"/login",
	AuthController.login
);

authRouter.post("/logout", authMiddleware, AuthController.logout);
authRouter.get("/refresh", AuthController.refresh);

authRouter.put(
	"/update",
	authMiddleware,
	AuthController.updateUserData
);

authRouter.delete(
	"/delete",
	authMiddleware,
	AuthController.deleteUser
);

export default authRouter;