import { useSelector, useDispatch } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";
import type { TDispatchType, TStateStore } from "../types/store";

export const useRedux = () => {
	const useAppSelector: TypedUseSelectorHook<TStateStore> = useSelector;
	const useAppDispatch = () => useDispatch<TDispatchType>();

	const dispatch = useAppDispatch();

	return {
		dispatch,
	};
};