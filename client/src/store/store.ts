
import { configureStore } from "@reduxjs/toolkit";

import { langReducer } from "./reducers/langReducers";
import { userDropDownReducer } from "./reducers/userDropDownReducer";

const store = configureStore({
	reducer: {
		lang: langReducer.reducer,
		userDropDown: userDropDownReducer.reducer,
	}
});

export default store;