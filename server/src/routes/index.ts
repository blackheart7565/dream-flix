import express from "express";

import authRouter from "./auth.route";
import mediaRoute from "./media.route";
import favoriteRoute from "./favorite.route";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/:mediaType", mediaRoute);
router.use("/favorite", favoriteRoute);

export default router;

