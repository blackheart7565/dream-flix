import React, { useState } from "react";

import { actionHandlers, userDropDownData } from "../../../utils/userDropDown";
import { UserDropDownItem } from "./UserDropDownItem";
import { UserDropDownSubmenuList } from "./UserDropDownSubmenuList";

import type {
	IUserDropDown,
	IUserDropDownSubmenu,
} from "../../../types/userDropDown";

import style from "./UserDropDown.module.scss";

interface IUserDropDownListProps { }

export const UserDropDownList: React.FC<IUserDropDownListProps> = (): JSX.Element => {
	const [submenuData, setSubmenuData] = useState<IUserDropDownSubmenu[]>([]);
	const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);
	const [currentAction, setCurrentAction] = useState<string | undefined>(undefined);
	const [currentTitle, setCurrentTitle] = useState<string>("");

	const handlerSelect = (data: IUserDropDown): void => {
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
					{userDropDownData.map((item: IUserDropDown) => (
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