import mongoose from "mongoose";

export const schemeOptions = {
	// toJSON: {
	// 	virtuals: true,
	// 	transform: (_: mongoose.Document, obj: any) => {
	// 		delete obj._id;
	// 		return obj;
	// 	}
	// },
	// toObject: {
	// 	virtuals: true,
	// 	transform: (_: mongoose.Document, obj: any) => {
	// 		delete obj._id;
	// 		return obj;
	// 	}
	// },
	versionKey: false,
	timestamps: true,
};