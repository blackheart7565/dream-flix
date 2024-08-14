import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider as ProviderRedux } from "react-redux";

import { RootRoutes } from "./components/layouts/RootRoutes";
import store from "./store/store";

import "./styles/reset.css";
import './styles/index.css';
import './styles/global.css';

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
