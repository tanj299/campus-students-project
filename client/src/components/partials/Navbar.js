import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

	// constructor (props) {

	// 	super(props);

	// 	this.state = {



	// 	}

	// }

	render () {

		return (

			<nav>
				<ul>
			
					<Link to = "/">Home</Link>
					<Link to = "/students">Students</Link>
					<Link to = "/campuses">Campuses</Link>

				</ul>
			</nav>

		)

	}

}

export default Navbar;
