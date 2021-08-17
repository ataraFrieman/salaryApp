/*
	App routes files
*/
import React, { Suspense } from 'react';
import { 	Route,
			Switch, 
			BrowserRouter as Router } from 'react-router-dom'



const Admin = React.lazy(() => import('./pages/admin/admin'));

/*
 * Defing client route
 * 
*/
export const Routes = () => {
	return(
		<Router>
		  	<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path="/" component={Admin} />
				</Switch>
		 	</Suspense>
		</Router>

	)
}
