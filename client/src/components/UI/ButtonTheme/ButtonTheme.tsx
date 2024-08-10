import React, { ChangeEvent, HTMLAttributes, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import classNames from "classnames";

import "./ButtonTheme.scss";

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
			className={classNames(
				"btnIcon",
				`
					flex 
					justify-center 
					items-center 
					relative 
					rounded-[50%]
				`
			)}
		>
			<input
				id={id}
				type="checkbox"
				className={classNames(
					"field",
					`
						absolute 
						appearance-none 
						opacity-0
					`
				)}
				checked={isDark}
				onChange={handlerToggleTheme}
			/>
			<BsFillMoonFill className={classNames(
				"icon",
				"moon",
			)} />
			<BsFillSunFill className={classNames(
				"icon",
				"sunny",
			)} />
		</label>
	);
};