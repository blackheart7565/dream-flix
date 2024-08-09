import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import style from "./ProfileDropDown.module.scss";

interface IButtonDropDownItemProps {
	path?: string;
	label: string;
	icon?: ReactElement;
	csNames?: string;
	onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonDropDownItem: React.FC<IButtonDropDownItemProps> = ({
	path,
	label,
	icon,
	csNames,
	onButtonClick,
}): JSX.Element => {
	return (
		path ? (
			<Link to={path} className={csNames}>
				{icon && (
					<span className={style.iconContainer}>{icon}</span>
				)}
				<span>{label}</span>
			</Link>
		) : (
			<button className={csNames} onClick={onButtonClick}>
				{icon && (
					<span className={style.iconContainer}>{icon}</span>
				)}
				<span>{label}</span>
			</button>
		)
	);
};