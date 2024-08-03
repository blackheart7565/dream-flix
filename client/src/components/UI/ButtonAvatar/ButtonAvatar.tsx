import React, { HTMLAttributes } from "react";

import styleGlobalUI from "../globalUI.module.scss";
import style from "./ButtonAvatar.module.scss";

interface IButtonAvatarProps extends HTMLAttributes<HTMLButtonElement> {
	avatarPath?: string;
}

export const ButtonAvatar: React.FC<IButtonAvatarProps> = ({
	avatarPath,
	...props
}): JSX.Element => {
	return (
		<button
			className={`${styleGlobalUI.btnGroup} ${style.btnAvatar}`}
			{...props}
		>
			<img
				className={style.avatar}
				src={avatarPath || "/profile.png"}
				alt="avatar" />
		</button>
	);
};