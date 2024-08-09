import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IInitialStateLang } from "../../types/store";
import { AllowedLangs, AllowedTitleLangs } from "../../constants/lang";
import { ILocalStorageLang } from "../../types/localStorage";

const initialState: IInitialStateLang = {
	lang: {
		type: AllowedLangs.EN,
		name: AllowedTitleLangs.EN,
	},
};

export const langSlice = createSlice({
	name: "lang",
	initialState,
	reducers: {
		setLang(state, action: PayloadAction<ILocalStorageLang>): void {
			state.lang = action.payload;
		}
	}
});