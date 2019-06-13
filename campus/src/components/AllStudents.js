import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './partials/StudentList';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudentThunk, removeStudentThunk } from '../components/store/utilities/Student';

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

			data: [],
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
	
	componentDidMount() {
		this.props.fetchAllStudents()
		// const {data} = await axios.get('http://localhost:3001/students')
		// this.setState({data})
		console.log(this.props.allStudents)
	}
	render () {

		return (

			<div className = "all_students list_all">
				<div className = "btn_controls_wrapper">
					<Link className = "btn_link" to = "/add/student">Add Student</Link>
				</div>

				<div className = "large_list">
					<StudentList studentList = { this.state.data } />
				</div>
			</div>
		)

	}

}

// @return: objects 
// the keys of these objects will be available on our props now 
// "I want all students in this component, from my redux store"
const mapStateToProps = (state) => {
	console.log(state)
	return {
		allStudents: state.allStudents
	}
}

// returns objects with keys
// one of the keys can be named anything; called from component
// goes to store, chooses the appropriate function with the key 
const mapDispatchToProps = (dispatch) => {
	return {
		// remember, fetchAllStudents is a key; the key can literally be 'banana'
		// which would then invoke a dispatch 
		fetchAllStudents: () => dispatch(fetchStudentThunk())

	}
}

// syntax thing - connect puts all keys into my props object
// the return are the keys 
// mapStateToProps gets entire redux store 
// mapDispatchToProps gets a dispatch method to communicate with the store 
export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
