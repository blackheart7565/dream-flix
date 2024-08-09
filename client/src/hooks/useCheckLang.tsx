import { useCallback, useEffect } from "react";

import { ELocalStorage } from "./useLocalStorage";
import { useRedux } from "./useRedux";
import { AllowedLangs, AllowedTitleLangs } from "../constants/lang";
import type { ILocalStorageLang } from "../types/localStorage";


export const useCheckLang = (): void => {
	const { lang } = useRedux();

	const updateLang = useCallback((): void => {
		const value: string | null = localStorage.getItem(ELocalStorage.LANG);

		if (value) {
			const language: ILocalStorageLang = JSON.parse(value);
			if (lang.lang.type !== language.type) {
				lang.setLang((language as ILocalStorageLang) ?? {
					type: AllowedLangs.EN,
					name: AllowedTitleLangs.EN
				} as ILocalStorageLang);
			}
		}
	}, [lang]);

	useEffect((): void => {
		updateLang();
	}, [updateLang]);
};