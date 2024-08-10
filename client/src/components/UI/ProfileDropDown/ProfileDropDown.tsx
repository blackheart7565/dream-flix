import React, { forwardRef, useState } from "react";
import classNames from "classnames";

import { ProfileDropDownItem } from "./ProfileDropDownItem";
import { useDropDownData, type IDropdownData } from "../../../hooks/useDropDownData";
import { useClickOutside } from "../../../hooks/useClickOutside";

import style from "./ProfileDropDown.module.scss";
import { useMergedRef } from "../../../hooks/useMergedRef";

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
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

	const refOutside = useClickOutside<HTMLDivElement>((): void => setIsOpenMenu(false));
	const mergeRef = useMergedRef(refOutside, ref);

	const dropdownData = useDropDownData();

	const handleOpenMenu = (): void => setIsOpenMenu(prev => !prev);

	return (
		<div className={classNames(style.profileDropdown, csRootNames)} ref={mergeRef}>
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