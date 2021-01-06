import React from 'react'
import styles from './style.module.css'

const Text = props => {
	const { text, theme } = props;

	return (
		<div className={styles[theme]}>
			{text}
		</div>
	)
}

export default Text