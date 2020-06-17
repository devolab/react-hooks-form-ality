import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PATHS } from './constants';

import { Core, NotFound } from './containers';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={Core} />
		{/* <PublicRoute exact path={PATHS.STUDENTS_MANAGEMENT} component={Results} /> */}

		<Route exact={true} path={PATHS.NOT_FOUND} component={NotFound} />
	</Switch>
);

export default Routes;
