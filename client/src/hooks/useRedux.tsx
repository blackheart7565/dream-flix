import { useSelector, useDispatch } from "react-redux";

import { TDispatchType, TStateStore } from "../types/store";
import { langReducer } from "../store/reducers/langReducers";
import { AllowedLangs } from "../constants/lang";

import type { TypedUseSelectorHook } from "react-redux";

export const useRedux = () => {
	const useAppSelector: TypedUseSelectorHook<TStateStore> = useSelector;
	const useAppDispatch = () => useDispatch<TDispatchType>();

	const dispatch = useAppDispatch();

	const lang = useAppSelector(state => state.lang);
	const setLang = (lang: AllowedLangs): void => {
		dispatch(langReducer.actions.setLang(lang));
	};

	return {
		dispatch,
		lang: {
			...lang,
			setLang,
		},
	};
};