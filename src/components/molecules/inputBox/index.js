import React from 'react'
import styles from './style.module.css'

import Input from './../../atoms/input'
import Text from './../../atoms/text'

const InputBox = props => {
	const { text, name, ...otherProps} = props;
	
	return (
		<div className={styles.inputBox}>
			<div className={styles.text}>
				<Text 
					text={`${text} :`}
					theme="normal" />
			</div>
			<div className={styles.input}>
				<Input
					type="text"
					name={name}
					{ ...otherProps } />
			</div>
		</div>
	)
}

export default InputBox