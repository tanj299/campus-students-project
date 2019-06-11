import React, { Component } from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import CampusList from './partials/CampusList';

class AllCampus extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: [{
				id: 1,
				name: "Hunter College",
				address: "695 Park Ave, New York, NY 10065"
			},{
				id: 2,
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
				<Link to = "/add/campus">Add Campus</Link>
				<CampusList campusList = { this.state.data } />
			</div>

		)

	}

}

export default AllCampus;

