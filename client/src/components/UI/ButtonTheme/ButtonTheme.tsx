import React, { ChangeEvent, HTMLAttributes, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import styleGlobalUI from "../globalUI.module.scss";
import style from "./ButtonTheme.module.scss";

interface IButtonThemeProps extends HTMLAttributes<HTMLButtonElement> {
	id: string;
}

export const ButtonTheme: React.FC<IButtonThemeProps> = ({
	id,
}): JSX.Element => {
	const [isDark, setIsDark] = useState<boolean>(false);

	const handlerToggleTheme = (event: ChangeEvent<HTMLInputElement>): void => {
		setIsDark(event.target.checked);
	};

	return (
		<label
			htmlFor={id}
			className={`${styleGlobalUI.btnGroup} ${style.btnTheme}`}
		>
			<input
				id={id}
				type="checkbox"
				className={style.field}
				checked={isDark}
				onChange={handlerToggleTheme}
			/>
			<BsFillMoonFill className={`${styleGlobalUI.icon} ${style.moon}`} />
			<BsFillSunFill className={`${styleGlobalUI.icon} ${style.sunny}`} />
		</label>
	);
};