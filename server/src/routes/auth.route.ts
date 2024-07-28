import express from "express";

import AuthController from "../controller/AuthController";

const authRouter = express.Router();

authRouter.post(
	"/registration",
	AuthController.registration
);

authRouter.post(
	"/login",
	AuthController.login
);

authRouter.post("/logout", );
authRouter.get("/refresh", );

authRouter.put(
	"/update",
);

authRouter.delete(
	"/delete",
);

export default authRouter;