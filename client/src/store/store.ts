
import { configureStore } from "@reduxjs/toolkit";

import { langReducer } from "./reducers/langReducers";

const store = configureStore({
	reducer: {
		lang: langReducer.reducer,
	}
});

export default store;