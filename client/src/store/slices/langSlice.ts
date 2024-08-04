import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IInitialStateLang } from "../../types/store";
import { AllowedLangs } from "../../constants/lang";

const initialState: IInitialStateLang = {
	lang: AllowedLangs.EN,
};

export const langSlice = createSlice({
	name: "lang",
	initialState,
	reducers: {
		setLang(state, action: PayloadAction<AllowedLangs>): void {			
			state.lang = action.payload;
		}
	}
});