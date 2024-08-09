import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../elements/Header/Header";
import { useCheckLang } from "../../hooks/useCheckLang";

interface IMainLayoutProps { }

export const MainLayout: React.FC<IMainLayoutProps> = (): JSX.Element => {
	useCheckLang();
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};