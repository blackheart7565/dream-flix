import React, { ReactElement, useState } from "react";
import classNames from "classnames";
import { CgArrowLeft } from "react-icons/cg";

import { ButtonDropDownItem } from "./ButtonDropDownItem";

import "./ProfileDropDown.scss";

export interface ISubmenuList {
	id: number;
	label: string;
	path?: string;
	icon?: ReactElement;
	onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IDropDownSubmenuProps {
	label: string;
	icon?: ReactElement;
	submenu: ISubmenuList[];
}

export const DropDownSubmenu: React.FC<IDropDownSubmenuProps> = ({
	label,
	icon,
	submenu,
}): JSX.Element => {
	const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);

	const handleOpenSubmenu = (): void => setIsOpenSubmenu(prev => !prev);

	return (
		<div className={"w-full"}>
			<button
				className={classNames(
					"buttonDropDownItem",
					`
						flex 
						items-center 
						justify-start 
						gap-1.5 
						h-auto 
						leading-5
					`,
				)}
				onClick={handleOpenSubmenu}
			>
				{icon && (
					<span className={"iconContainer"}>{icon}</span>
				)}
				<span>{label}</span>
			</button>

			{isOpenSubmenu && (
				<nav className={
					`
						pb-5 
						w-full 
						h-full 
						absolute
						top-0 
						right-0 
						bg-black
					`
				}>
					<button
						className={classNames(
							"buttonDropDownItem",
							`
								flex 
								justify-start 
								items-center 
								gap-1.5 
								h-auto 
								leading-5
							`,
						)}
						onClick={handleOpenSubmenu}
					>
						<span className={"iconContainer"}>
							<CgArrowLeft className={"icon"} />
						</span>
						<span>Back</span>
					</button>

					<hr className={"w-full h-0.5 bg-white mb-2.5"} />

					<ul>
						{submenu.map((item: ISubmenuList): JSX.Element => (
							<ButtonDropDownItem
								key={item.id}
								path={item.path ? item.path : ""}
								label={item.label}
								icon={item.icon}
								onButtonClick={item.onButtonClick}
								csNames={classNames(
									"buttonDropDownItem",
									`
										cursor-pointer
										text-[1.2rem]
										tracking-wider
										leading-5
										flex
										justify-start
										items-center
										gap-4
									`,
								)}
							/>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
};