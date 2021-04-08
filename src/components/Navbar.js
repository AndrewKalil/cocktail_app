import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<Link to="/cocktail_app">
					<img src={logo} alt="cocktail db logo" className="logo"/>
				</Link>
				<ul className="nav-links">
					<li>
						<Link to='/cocktail_app'>Home</Link>
						<Link to='/cocktail_app/about'>About</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
