import React from 'react'
import styles from './style.module.css'

const Textarea = props => {
	const { name, ...otherprops } = props;
	return (
		<textarea 
			name={name}
			{...otherprops}
			rows="5"
			className={styles.textarea}>
		</textarea>
	)
}

export default Textarea