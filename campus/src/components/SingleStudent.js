import React, { Component, Fragment } from 'react';
// import axios from 'axios';

let rawData = [

	{ 
		id: 1, 
		firstName: 'John', 
		lastName: 'Smith', 
		email: 'jsmith@gmail.com',
		gpa: '3.5'
	}
];

class SingleStudent extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: undefined,
			campus: props.campusInfo

		}

	}

	componentDidMount () {

		for (let i = 0; i < rawData.length; i++) {
			
			if (rawData[i].id == this.props.match.params.id) {
				this.setState({
					data: rawData[i]
				});

				return;
			}
		}
	}

	render () {

		return (
			<div>
				{ (this.state.data != null) ? (
					<Fragment>
						<h1>{this.state.data.firstName + " " + this.state.data.lastName}</h1>

						<p className = "email">{this.state.data.email}</p>

						<p className = "gpa">{this.state.data.gpa}</p>
					</Fragment>) :
					(
						<p className = "error">There was an error.</p>
					)
				}
			</div>
		)

	}

}

export default SingleStudent;
