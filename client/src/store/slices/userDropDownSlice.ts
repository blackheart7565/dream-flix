import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialStateUserDropDown } from "../../types/store";

const initialState: IInitialStateUserDropDown = {
	submenu: {
		lang: {
			selectedItemId: 1,
		}
	}
};

export const userDropDownSlice = createSlice({
	name: "userDropDown",
	initialState,
	reducers: {
		setSMSelectItemId: (state, action: PayloadAction<number>): void => {
			state.submenu.lang.selectedItemId = action.payload;
		}
	}
})

