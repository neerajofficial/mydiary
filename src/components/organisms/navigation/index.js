import React from 'react'
import styles from './style.module.css'

import logo from './../../../assets/icons/logo.svg'
import Image from './../../atoms/image'
import NavItem from './../../molecules/navItem'

const Navigation = props => {
	return (
		<div className={styles.navigation}>
			<div className={styles.logo}>
				<Image
					url={logo}
					alt="logo"
					size="small" />
			</div>
			<div className={styles.navLinks}>
				<ul className={styles.navList}>
					<NavItem 
						to="/home"
						text="Home" />
					<NavItem 
						to="/create"
						text="Create" />
				</ul>
			</div>
		</div>
	)
}

export default Navigation