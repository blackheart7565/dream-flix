import React from "react";
import { Outlet } from "react-router-dom";

interface IBaseLayoutProps { }

export const BaseLayout: React.FC<IBaseLayoutProps> = (): JSX.Element => {
	return (
		<>
			<Outlet />
		</>
	);
};