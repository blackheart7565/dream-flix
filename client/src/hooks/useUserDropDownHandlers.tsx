import { AllowedLangs } from "../constants/lang";
import { IUserDropDownHandleActions } from "../types/userDropDown";
import { useLocalStorage } from "./useLocalStorage";
import { useRedux } from "./useRedux";

export const useUserDropDownHandlers = () => {
	const { lang } = useRedux();
	const [language, setLanguage] = useLocalStorage<AllowedLangs>("lang", AllowedLangs.EN);

	const actionHandlers: IUserDropDownHandleActions = {
		language: (language: string): void => {
			const lg = language as AllowedLangs;
			lang.setLang(lg);
			setLanguage(lg);
		},
		theme: (type: string): void => {
			console.log(type);
		},
		logout: (): void => {
			console.log("Logout account succuss");
		}
	};

	return {
		actionHandlers
	};
};