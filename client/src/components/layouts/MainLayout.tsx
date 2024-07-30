import React from "react";
import { Outlet } from "react-router-dom";

interface IMainLayoutProps { }

export const MainLayout: React.FC<IMainLayoutProps> = (): JSX.Element => {
	return (
		<>
			<Outlet />
		</>
	);
};