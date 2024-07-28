import mongoose from "mongoose";

import { schemeOptions } from "../configs/scheme.config";

import type { IFavoriteScheme } from "../types/db.type";

export default mongoose.model<IFavoriteScheme>(
	"favorite",
	new mongoose.Schema<IFavoriteScheme>({
		userId: {
			type: mongoose.Types.ObjectId,
			ref: "users",
			require: true,
		},
		mediaId: {
			type: String,
			require: true,
		},
		mediaType: {
			type: String,
			enum: ["movie", "tv"],
			require: true,
		},
		mediaPosterPath: {
			type: String,
			require: true,
		},
		mediaTitle: {
			type: String,
			require: true,
		},
		mediaRating: {
			type: Number,
			require: false,
		},
		mediaReleaseDate: {
			type: String,
			require: false,
		},
	}, schemeOptions),
);