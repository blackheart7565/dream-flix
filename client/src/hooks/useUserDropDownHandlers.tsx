import { AllowedLangs } from "../constants/lang";
import { IUserDropDownHandleActions } from "../types/userDropDown";
import { useRedux } from "./useRedux";

export const useUserDropDownHandlers = () => {
	const { lang } = useRedux();

	const actionHandlers: IUserDropDownHandleActions = {
		language: (language: string): void => {
			lang.setLang(language as AllowedLangs);
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