import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './partials/StudentList';
import {Link} from 'react-router-dom';

let rawData = [

	{ 
		id: 1, 
		firstName: 'John', 
		lastName: 'Smith', 
		email: 'jsmith@gmail.com',
		gpa: '3.5'
	}
];

class AllStudents extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: rawData,
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
	
	async componentDidMount() {
		const {data} = await axios.get('http://localhost:3001/students')
		this.setState({data})
		
	}

	render () {

		return (

			<div className = "all_students">
				<Link to = "/add/student">Add Student</Link>
				<StudentList studentList = { this.state.data } />
			</div>
		)

	}

}

export default AllStudents;
