import { BiExit } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

import type {
	IUserDropDownData,
	IUserDropDownActions,
} from "../types/userDropDown";
import { AllowedLangs } from "../constants/lang";

import type { TTranslation } from "../types/lang";

export const userDropDownActions: IUserDropDownActions = {
	theme: "theme",
	language: "language",
	logout: "logout",
};

export const getUserDropDownData = (lang: AllowedLangs, translation: TTranslation): IUserDropDownData[] => {
	return [
		{
			id: 1,
			path: "/account",
			title: translation[lang].useDropDown["main-menu"].account,
			icon: <FaUserCircle />,
			submenu: []
		},
		{
			id: 2,
			path: "/settings",
			title: translation[lang].useDropDown["main-menu"].settings,
			icon: <AiFillSetting />,
			submenu: []
		},
		{
			id: 3,
			path: "",
			title: translation[lang].useDropDown["main-menu"].lang,
			action: userDropDownActions.language,
			icon: <MdLanguage />,
			submenu: [
				{
					id: 1,
					type: "en",
					title: "English",
				},
				{
					id: 2,
					type: "ru",
					title: "Русский",
				},
			]
		},
		{
			id: 4,
			path: "",
			title: translation[lang].useDropDown["main-menu"].exit,
			action: userDropDownActions.logout,
			icon: <BiExit />,
			submenu: [],
		}
	];
};

