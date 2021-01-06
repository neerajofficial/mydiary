import React, { Fragment } from 'react'

import Navigation from './components/organisms/navigation'
import Routes from './routes'

const App = props => {
  return (
    <Fragment>
    	<Navigation />
		<Routes />
    </Fragment>
  )
}

export default App