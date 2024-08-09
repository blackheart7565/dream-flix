import { useRedux } from "./useRedux";
import transitionJson from "../../public/translation/translations.json";
import { TTranslation } from "../types/lang";

export const useLang = () => {
	const { lang } = useRedux();
	const translation: TTranslation = transitionJson;

	return {
		langType: lang.lang.type,
		translation: translation
	};
};