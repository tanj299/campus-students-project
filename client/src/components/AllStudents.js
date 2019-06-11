import React, { Component } from 'react';
// import axios from 'axios';
import StudentList from './partials/StudentList';

class AllStudents extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: [/*{
				firstName: "John",
				lastName: "Smith",
				email: "john_smith98@gmail.com"
			}*/],
			displayErrorMessage: false

		}

	}

	// componentDidMount () {

	// 	axios.get("/students/all")
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

			<div className = "all_students">
				<StudentList studentList = { this.state.data } />
			</div>
		)

	}

}

export default AllStudents;
