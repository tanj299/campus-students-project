import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

	render () {

		return (

			<nav>
				<Link to = "/" className = "home_link">
					<i className="fas fa-home"></i>
					Home
				</Link>
				<Link to = "/students">Students</Link>
				<Link to = "/campuses">Campuses</Link>
			</nav>

		)

	}

}

export default Navbar;
