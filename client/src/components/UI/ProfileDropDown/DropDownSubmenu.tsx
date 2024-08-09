import React, { useState } from "react";
import classNames from "classnames";
import { CgArrowLeft } from "react-icons/cg";

import { ButtonDropDownItem } from "./ButtonDropDownItem";

import styleGlobalUI from "../globalUI.module.scss";
import style from "./ProfileDropDown.module.scss";

export interface ISubmenuList {
	id: number;
	label: string;
	path?: string;
	onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IDropDownSubmenuProps {
	label: string;
	submenu: ISubmenuList[];
}

export const DropDownSubmenu: React.FC<IDropDownSubmenuProps> = ({
	label,
	submenu,
}): JSX.Element => {
	const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);

	const handleOpenSubmenu = (): void => setIsOpenSubmenu(prev => !prev);

	return (
		<div className={style.submenu}>
			<button
				className={classNames(style.submenuBtn, style.buttonItem)}
				onClick={handleOpenSubmenu}
			>
				<span>{label}</span>
			</button>

			{isOpenSubmenu && (
				<nav className={style.submenuNav}>
					<button
						className={classNames(style.submenuBtn, style.buttonItem)}
						onClick={handleOpenSubmenu}
					>
						<span className={style.arrow}>
							<CgArrowLeft className={styleGlobalUI.icon} />
						</span>
						<span>Back</span>
					</button>

					<hr className={style.line} />

					<ul className={style.submenuList}>
						{submenu.map((item: ISubmenuList): JSX.Element => (
							<ButtonDropDownItem
								key={item.id}
								path={item.path ? item.path : ""}
								label={item.label}
								onButtonClick={item.onButtonClick}
								csNames={classNames(style.submenuItem, style.buttonItem)}
							/>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
};