import React, { forwardRef } from "react";
import classNames from "classnames";

import { ProfileDropDownItem } from "./ProfileDropDownItem";
import { useDropDownData, type IDropdownData } from "../../../hooks/useDropDownData";

import style from "./ProfileDropDown.module.scss";

interface IProfileDropDownProps {
	pathImageBtn?: string;
	isImage?: boolean;
	isText?: boolean;
	labelBtn?: string;
	csRootNames?: string;
}

export const ProfileDropDown: React.FC<IProfileDropDownProps> = forwardRef<HTMLDivElement, IProfileDropDownProps>(({
	pathImageBtn = "/profile.png",
	isImage = true,
	isText = false,
	labelBtn = "DropDown",
	csRootNames,
}, ref): JSX.Element => {
	const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);

	const dropdownData = useDropDownData();

	const handleOpenMenu = (): void => setIsOpenMenu(prev => !prev);

	return (
		<div className={classNames(style.profileDropdown, csRootNames)} ref={ref}>
			<button className={style.avatar} onClick={handleOpenMenu}>
				<div className={style.avatarContainer}>
					{isImage && <img src={pathImageBtn} alt="avatar" />}
				</div>
				{isText && <span>{labelBtn}</span>}
			</button>

			{isOpenMenu && (
				<nav className={style.nav}>
					<ul className={style.list}>
						{dropdownData.map((item: IDropdownData): JSX.Element => (
							<ProfileDropDownItem key={item.id} item={item} />
						))}
					</ul>
				</nav>
			)}
		</div>
	);
});