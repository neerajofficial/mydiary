import React from 'react'
import styles from './style.module.css'

const Image = props => {
	const { url, alt, size, ...otherProps } = props;
	return (
		<div className={styles.imageWrap}>
			<img 
				src={url} 
				alt={alt}
				className={styles[size]}
				{...otherProps} />
		</div>
	)
}

export default Image