import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { RootRoutes } from "./components/layouts/RootRoutes";

import "./styles/reset.css";
import "./styles/importFonts.css";
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!)
	.render(
		<React.StrictMode>
			<BrowserRouter>
				<RootRoutes />
			</BrowserRouter>
		</React.StrictMode>,
	);
