import React from 'react'

import CreateNote from './../../templates/createNote'

const Create = props => {
	const { Data, ...otherProps } = props;
	return (
		<div>
			<CreateNote
				Data={Data}
				{...otherProps} />
		</div>
	)
}

export default Create