import React from "react";
import classNames from "classnames";

import { ButtonDropDownItem } from "./ButtonDropDownItem";
import { DropDownSubmenu } from "./DropDownSubmenu";

import { type IDropdownData } from "../../../hooks/useDropDownData";

interface IProfileDropDownItemProps {
	item: IDropdownData;
}

export const ProfileDropDownItem: React.FC<IProfileDropDownItemProps> = ({
	item,
}): JSX.Element => {
	return (
		<li className={`
			cursor-pointer
			text-[1.2rem]
			tracking-wider
			leading-5
			flex
			justify-start
			items-center
			gap-4
		`}>
			{!item.submenu?.length ? (
				<ButtonDropDownItem
					path={item.path ? item.path : ""}
					label={item.label}
					icon={item.icon}
					onButtonClick={item.onButtonClick}
					csNames={classNames("buttonDropDownItem")}
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