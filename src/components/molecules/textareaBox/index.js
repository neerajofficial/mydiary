import React from 'react'
import styles from './style.module.css'

import Text from './../../atoms/text'
import Textarea from './../../atoms/textarea'

const TextareaBox = props => {
	const { text, name, ...otherProps} = props;

	return (
		<div className={styles.textareaBox}>
			<div className={styles.text}>
				<Text 
					text={`${text} :`}
					theme="normal" />
			</div>
			<div className={styles.input}>
				<Textarea
					name={name}
					{...otherProps} />
			</div>
		</div>
	)
}

export default TextareaBox