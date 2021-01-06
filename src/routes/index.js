import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Create from './../components/pages/create'
import Home from './../components/pages/home'

const Routes = props => {
	return (
		<Switch>
			<Route path="/home" component={Home} />
			<Route exact path="/create" component={Create} />
			<Route path="/create/:id" component={Create} />
			<Redirect to="/home" />
		</Switch>
	)
}

export default Routes