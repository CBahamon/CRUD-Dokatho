import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { CrudScreen } from '../components/crud/CrudScreen';
import { AuthRouter } from './AuthRouter';

export const AppRoutes = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route
						path="/auth"
						component={AuthRouter}
					/>
					<Route
						exact
						path="/"
						component={CrudScreen}
					/>
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	)
}
