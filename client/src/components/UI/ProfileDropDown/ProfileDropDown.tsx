import React, { forwardRef, useState } from "react";
import classNames from "classnames";

import { ProfileDropDownItem } from "./ProfileDropDownItem";
import { useDropDownData, type IDropdownData } from "../../../hooks/useDropDownData";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useMergedRef } from "../../../hooks/useMergedRef";

import "./ProfileDropDown.scss";

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
		<div className={classNames(
			"relative",
			csRootNames,
		)} ref={mergeRef}>
			<button
				className={classNames(
					"avatar",
					`
						cursor-pointer
						flex
						justify-center
						items-center
						gap-2.5
						w-max
						h-9
				`)}
				onClick={handleOpenMenu}
			>
				<div className={`
					w-9 h-9 rounded-[50%]
				`}>
					{isImage && (
						<img
							src={pathImageBtn}
							alt="avatar"
							className={`
								w-full 
								h-full 
								object-cover
								rounded-[50%] 
							`}
						/>
					)}
				</div>
				{isText && (
					<span
						className={classNames(
							"textAvatar",
							`
								font-medium
								text-[1.2rem]
								tracking-[1px]
							`
						)}
					>{labelBtn}</span>
				)}
			</button>

			{isOpenMenu && (
				<nav className={`
					py-5 
					max-h-[400px] 
					w-80 
					absolute 
					top-[2.5rem] 
					right-0 
					overflow-x-hidden 
					shadow-[0px_1px_2px_#fdfdfd] 
					bg-black 
					bg-opacity-50 
					backdrop-blur-sm
					rounded-lg
				`}>
					<ul>
						{dropdownData.map((item: IDropdownData): JSX.Element => (
							<ProfileDropDownItem key={item.id} item={item} />
						))}
					</ul>
				</nav>
			)}
		</div>
	);
});