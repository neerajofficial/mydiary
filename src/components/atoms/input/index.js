import React from 'react'
import styles from './style.module.css'

const Input = props => {
	const { type, name, ...otherprops } = props;
	return (
		<input 
			className={styles.input}
			type={type} 
			name={name} 
			{...otherprops} />
	)
}

export default Input