import { ReactElement, useCallback, useMemo } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { BiExit } from "react-icons/bi";

import { useLang } from "./useLang";
import { useRedux } from "./useRedux";
import { AllowedLangs, AllowedTitleLangs } from "../constants/lang";
import { useLocalStorage } from "./useLocalStorage";

import type { ISubmenuList } from "../components/UI/ProfileDropDown/DropDownSubmenu";
import type { ILocalStorageLang } from "../types/localStorage";

import style from "../components/UI/globalUI.module.scss";

export interface IDropdownData {
	id: number;
	label: string;
	path?: string;
	icon?: ReactElement;
	onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
	submenu?: ISubmenuList[];
}

export const useDropDownData = (): IDropdownData[] => {
	const { lang: language } = useRedux();
	const { langType, translation } = useLang();
	const [, setCurrentLang] = useLocalStorage<ILocalStorageLang>("lang", {
		type: AllowedLangs.EN,
		name: AllowedTitleLangs.EN
	});

	const handleLanguageChange = useCallback((type: string, lang: string): void => {
		const value: ILocalStorageLang = {
			type: type as AllowedLangs,
			name: lang,
		};
		setCurrentLang(value);
		language.setLang(value);
	}, [language, setCurrentLang]);

	const dropdownData = useMemo((): IDropdownData[] => [
		{
			id: 1,
			path: "/account",
			label: translation[langType].useDropDown["main-menu"].account,
			icon: <FaUserCircle className={style.icon} />,
		},
		{
			id: 2,
			path: "/settings",
			label: translation[langType].useDropDown["main-menu"].settings,
			icon: <AiFillSetting className={style.icon} />,
		},
		{
			id: 3,
			path: "",
			label: `${translation[langType].useDropDown["main-menu"].lang}: ${language.lang.name}`,
			icon: <MdLanguage className={style.icon} />,
			submenu: [
				{
					id: 1,
					label: "English",
					onButtonClick: (): void => handleLanguageChange("en", "English"),
				},
				{
					id: 2,
					label: "Русский",
					onButtonClick: (): void => handleLanguageChange("ru", "Русский"),
				},
			]
		},
		{
			id: 4,
			path: "",
			label: translation[langType].useDropDown["main-menu"].exit,
			icon: <BiExit className={style.icon} />,
			onButtonClick: (): void => {
				console.log("Logout account success!");
			}
		}
	], [handleLanguageChange, langType, language, translation]);

	return dropdownData;
};