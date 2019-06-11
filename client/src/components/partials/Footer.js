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

			<footer className = "footer">
				<ul>
                    
					<Link to = "/students">Students</Link>
					<Link to = "/campuses">Campuses</Link>

				</ul>
			</footer>

		)

	}

}

export default Navbar;
