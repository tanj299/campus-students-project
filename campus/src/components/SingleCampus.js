import React, { Component, Fragment } from 'react';
import { fetchCampusThunk } from '../components/store/utilities/Campus';
import { connect } from 'react-redux';
import { allCampus } from '../reducers';
// import axios from 'axios';

let rawData = [{
	id: 1,
	name: "Hunter College",
	address: "695 Park Ave, New York, NY 10065"
},{
	id: 2,
	name: "Parsons School of Design",
	address: "66 5th Ave, New York, NY 10011"
}];

let rawDataStudents = [
	{ 
		id: 1, 
		firstName: 'John', 
		lastName: 'Smith', 
		email: 'jsmith@gmail.com',
		gpa: '3.5',
		campusID: 1
	},
	{ 
		id: 2, 
		firstName: 'Bob', 
		lastName: 'Sponge', 
		email: 'spongeb@gmail.com',
		gpa: '1.000',
		campusID: 1
	}
];

class SingleCampus extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: undefined,
			studentData: undefined,
			campus: props.campusInfo

		}

	}

	componentDidMount () {
		console.log("my campus id: ", this.props.match.params.id)
		this.props.fetchCampus(this.props.match.params.id);
		// for (let i = 0; i < rawData.length; i++) {
			
		// 	if (rawData[i].id === this.props.match.params.id) {
		// 		this.setState({
		// 			data: rawData[i]
		// 		});

		// 		return;
		// 	}
		// }
	}

	render () {

		return (
			<div>
				{ (this.props.currentCampus != null) ? (
					<Fragment>
						<h1>Campus Name: { this.props.currentCampus.name }</h1>

						<p className = "address"> Address: { this.props.currentCampus.address }</p>
						<p className = "description"> Description: { this.props.currentCampus.description }</p>
						
					</Fragment>) :
					(
						<p className = "error">There was an error.</p>
					)
				}
				{/* <p className="error"> There was an error </p> */}
			</div>
		)

	}

}

const mapStateToProps = (state) => {
	return {
		currentCampus: state.allCampus.singleCampus
	} 
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
