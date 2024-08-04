import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import type { IUserDropDown } from "../../../types/userDropDown";

import style from "./UserDropDown.module.scss";

interface IUserDropDownItemProps extends HTMLAttributes<HTMLLIElement> {
	data: IUserDropDown;
}

export const UserDropDownItem: React.FC<IUserDropDownItemProps> = ({
	data,
	onClick,
}): JSX.Element => {
	return (
		<li className={style.userDropDownItem} onClick={onClick}>
			<Link
				className={style.userDropDownLink}
				to={data.path ? data.path : "#"}
			>
				<span>{data.icon}</span>
				<span>{data.title}</span>
			</Link>
		</li>
	);
};