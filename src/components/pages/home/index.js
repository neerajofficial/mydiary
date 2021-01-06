import React from 'react'

import AllNotes from './../../templates/allNotes'

const Home = props => {
	return (
		<div>
			<AllNotes {...props} />
		</div>
	)
}

export default Home