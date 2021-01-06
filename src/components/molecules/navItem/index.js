import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './style.module.css'

const NavItem = props => {
	const { to, text, ...otherProps } = props;
	return (
		<NavLink
			className={styles.navLink}
			activeClassName={styles.activeLink}
			to={to} 
			{...otherProps} >
				<li className={styles.navItem}>
					{text}
				</li>
		</NavLink> 
	)
}

export default NavItem