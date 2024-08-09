import React from "react";
import classNames from "classnames";

import { ButtonDropDownItem } from "./ButtonDropDownItem";
import { DropDownSubmenu } from "./DropDownSubmenu";

import { type IDropdownData } from "../../../hooks/useDropDownData";

import style from "./ProfileDropDown.module.scss";

interface IProfileDropDownItemProps {
	item: IDropdownData;
}

export const ProfileDropDownItem: React.FC<IProfileDropDownItemProps> = ({
	item,
}): JSX.Element => {
	return (
		<li className={style.item}>
			{!item.submenu?.length ? (
				<ButtonDropDownItem
					path={item.path ? item.path : ""}
					label={item.label}
					icon={item.icon}
					onButtonClick={item.onButtonClick}
					csNames={classNames(style.buttonDropDownItem, style.buttonItem)}
				/>
			) : (
				<DropDownSubmenu
					label={item.label}
					submenu={item.submenu!}
					icon={item.icon}
				/>
			)}
		</li>
	);
};