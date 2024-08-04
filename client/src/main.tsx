import React from 'react';
import { Provider as ProviderRedux } from "react-redux";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { RootRoutes } from "./components/layouts/RootRoutes";
import store from "./store/store";

import "./styles/reset.css";
import "./styles/importFonts.css";
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!)
	.render(
		<React.StrictMode>
			<ProviderRedux store={store}>
				<BrowserRouter>
					<RootRoutes />
				</BrowserRouter>
			</ProviderRedux>
		</React.StrictMode>,
	);
