import React, { useState } from "react";

import { getUserDropDownData } from "../../../utils/userDropDown";
import { UserDropDownItem } from "./UserDropDownItem";
import { UserDropDownSubmenuList } from "./UserDropDownSubmenuList";
import { useUserDropDownHandlers } from "../../../hooks/useUserDropDownHandlers";

import type {
	IUserDropDownData,
	IUserDropDownSubmenu,
} from "../../../types/userDropDown";

import style from "./UserDropDown.module.scss";
import { useLang } from "../../../hooks/useLang";

interface IUserDropDownListProps { }

export const UserDropDownList: React.FC<IUserDropDownListProps> = (): JSX.Element => {
	const [submenuData, setSubmenuData] = useState<IUserDropDownSubmenu[]>([]);
	const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);
	const [currentAction, setCurrentAction] = useState<string | undefined>(undefined);
	const [currentTitle, setCurrentTitle] = useState<string>("");
	const { lang, translation } = useLang();
	const userDropDownData = getUserDropDownData(lang, translation);
	const { actionHandlers } = useUserDropDownHandlers();

	const handlerSelect = (data: IUserDropDownData): void => {
		if (data.submenu.length <= 0 && !data.action) {
			setIsOpenSubmenu(false);
			setCurrentTitle("");
			setCurrentAction(undefined);
			return;
		}

		if (data.submenu.length <= 0 && data.action) {
			handleAction(data.action, "");
			return;
		}

		setSubmenuData(data.submenu);
		setCurrentAction(data.action);
		setCurrentTitle(data.title);
		setIsOpenSubmenu(true);
	};

	const handleAction = (action: string | undefined, data: string): void => {
		if (action && actionHandlers[action]) {
			actionHandlers[action](data);
			handlerBack();
		}
	};

	const handlerBack = (): void => {
		setIsOpenSubmenu(false);
		setCurrentAction(undefined);
	};

	return (
		<nav className={style.userDropDownNav}>
			{!isOpenSubmenu && (
				<ul className={style.userDropDownList}>
					{userDropDownData.map((item: IUserDropDownData) => (
						<UserDropDownItem
							key={item.id}
							data={item}
							onClick={() => item.path ? null : handlerSelect(item)}
						/>
					))}
				</ul>
			)}

			{isOpenSubmenu && (
				<UserDropDownSubmenuList
					data={submenuData}
					currentAction={currentAction}
					title={currentTitle}
					handlerBack={handlerBack}
					handleAction={handleAction}
				/>
			)}
		</nav>
	);
};