import React, { Component } from 'react';
// import axios from 'axios';

import CampusList from './partials/CampusList';

class AllCampus extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: [{
				name: "Hunter College",
				address: "695 Park Ave, New York, NY 10065"
			},{
				name: "Parsons School of Design",
				address: "66 5th Ave, New York, NY 10011"
			}]

		}

	}

	// componentDidMount () {

	// 	axios.get("/campuses/all")
	// 		.then( (response) => {

	// 			this.setState({
	// 				data: response.data,
	// 				displayErrorMessage: false
	// 			});

	// 		})
	// 		.catch( (err) => {

	// 			this.setState({ displayErrorMessage: true })

	// 		});

	// }

	render () {

		return (

			<div className = "all_campuses">
				<CampusList campusList = { this.state.data } />
			</div>

		)

	}

}

export default AllCampus;

