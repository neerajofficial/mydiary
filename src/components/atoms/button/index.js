import React from 'react';
import styles from './style.module.css';

const Button = props => {
	const { text, theme, ...otherProps } = props;
	const classProps = [styles.button, styles[theme]].join(' ');

	return (
		<button 
			className={classProps} 
			{...otherProps} >
				{text}
		</button>
	)
}

export default Button