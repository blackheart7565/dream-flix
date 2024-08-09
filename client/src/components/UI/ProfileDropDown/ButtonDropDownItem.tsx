import React from "react";
import { Link } from "react-router-dom";

interface IButtonDropDownItemProps {
	label: string;
	onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
	path?: string;
	csNames?: string;
}

export const ButtonDropDownItem: React.FC<IButtonDropDownItemProps> = ({
	label,
	path,
	csNames,
	onButtonClick,
}): JSX.Element => {
	return (
		path ? (
			<Link to={path} className={csNames}>
				<span>{label}</span>
			</Link>
		) : (
			<button className={csNames} onClick={onButtonClick}>
				<span>{label}</span>
			</button>
		)
	);
};