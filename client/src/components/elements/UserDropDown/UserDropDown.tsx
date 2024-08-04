import React, { useState } from "react";

import { ButtonAvatar } from "../../UI/ButtonAvatar/ButtonAvatar";
import { UserDropDownList } from "./UserDropDownList";

import style from "./UserDropDown.module.scss";

interface IUserDropDownProps { }

export const UserDropDown: React.FC<IUserDropDownProps> = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handlerIsOpenMenu = (): void => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={style.userDropDown}>
			<ButtonAvatar
				onClick={handlerIsOpenMenu}
			/>
			{isOpen && <UserDropDownList />}
		</div>
	);
};