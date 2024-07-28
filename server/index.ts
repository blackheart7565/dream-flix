/// <reference path="./declare.d.ts" />
import "dotenv/config";

import http from "http";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import path from "path";
import bodyParser from "body-parser";
import Fingerprint from "./node_modules/express-fingerprint/lib/index";

import router from "./src/routes";

import { dbConnection } from "./src/db";
import { errorMiddleware } from "./src/middleware/error.middleware";

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors({
	origin: process.env.BASE_URL_CLIENT as string,
	credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Fingerprint({
	parameters: [
		//@ts-ignore
		Fingerprint.useragent,
		//@ts-ignore
		Fingerprint.acceptHeaders,
	]
}));
app.use(fileUpload({}));
app.use("/api/v1", router);
app.use(errorMiddleware);

const PORT: number = parseInt(process.env.PORT as string);

dbConnection(() => {
	server.listen(PORT, () => {
		console.log(`Server listen on http://localhost:${PORT}`);
	});
});






