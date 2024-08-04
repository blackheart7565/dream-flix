import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { CgArrowLeft } from "react-icons/cg";
import classNames from "classnames";

import type { IUserDropDownSubmenu } from "../../../types/userDropDown";

import styleGlobalUI from "../../UI/globalUI.module.scss";
import style from "./UserDropDown.module.scss";

interface IUserDropDownSubmenuListProps {
	data: IUserDropDownSubmenu[];
	currentAction: string | undefined;
	title: string;

	handlerBack: () => void;
	handleAction: (action: string | undefined, data: string) => void;
}

export const UserDropDownSubmenuList: React.FC<IUserDropDownSubmenuListProps> = ({
	data,
	currentAction,
	title,
	handlerBack,
	handleAction,
}): JSX.Element => {
	const [selectedItemId, setSelectedItemId] = useState<number>(1);

	const handlerSubmenuItem = (id: number, type: string): void => {
		setSelectedItemId(id);
		handleAction(currentAction, type);
	};

	return (
		<ul className="submenu">
			<button
				className={style.btnBack}
				onClick={handlerBack}
			>
				<div className={style.btnBackArrow}>
					<CgArrowLeft className={styleGlobalUI.icon} />
				</div>
				<span>{title}</span>
			</button>

			<hr className={style.line} />

			{data.map((item: IUserDropDownSubmenu): JSX.Element => (
				<li
					className={classNames(
						style.submenuItem,
						selectedItemId === item.id && style.submenuItemActive
					)}
					key={item.id}
					onClick={
						(): void => handlerSubmenuItem(item.id, item.type)
					}>
					<span className={style.checkMark}>
						{selectedItemId === item.id && (
							<BiCheck className={styleGlobalUI.icon} />
						)}
					</span>
					<span>{item.title}</span>
				</li>
			))
			}
		</ul >
	);
};