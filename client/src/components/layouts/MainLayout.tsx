import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../elements/Header/Header";

interface IMainLayoutProps { }

export const MainLayout: React.FC<IMainLayoutProps> = (): JSX.Element => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};