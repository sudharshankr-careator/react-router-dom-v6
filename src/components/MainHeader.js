import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainHeader.Module.css'

const MainHeader = () => {

    return (
			<div>
				<header className={classes.header}>
					<nav>
						<ul>
							<li>
								<NavLink activeclassname={classes.active} to="/welcome">
									Welcome
								</NavLink>
							</li>
							<li>
								<NavLink activeclassname={classes.active} to="/products">
									Products
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>

			</div>
		);
}

export default MainHeader;