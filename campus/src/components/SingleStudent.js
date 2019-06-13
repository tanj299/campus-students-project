<<<<<<< HEAD
// import { fetchStudentThunk } from '../components/store/utilities/Student';
// import { removeStudentThunk } from '../components/store/utilities/Student';
// import { connect } from 'react-redux';
// import axios from 'axios';
=======
import { fetchStudentThunk } from '../components/store/utilities/Student';
import { removeStudentThunk } from '../components/store/utilities/Student';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
>>>>>>> e003e8a42d43b61e4c2580a9d8f2a12eb0966a5d
import React, { Component, Fragment } from 'react';

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
			id: "",
			data: undefined,
			campus: props.campusInfo

		}

	}

	componentDidMount () {

		for (let i = 0; i < rawData.length; i++) {
			
			if (rawData[i].id === this.props.match.params.id) {
				this.setState({
					data: rawData[i]
				});

				return;
			}
		}
	}

	render () {
<<<<<<< HEAD
		// const student = this.props.data || 'NO student'
=======
>>>>>>> e003e8a42d43b61e4c2580a9d8f2a12eb0966a5d

		return (
			<div>
				{ (this.state.data != null) ? (
					<div className = "single_item_wrapper">
						<h1>{this.state.data.firstName + " " + this.state.data.lastName}</h1>

						<div className = "details">
							<p className = "email">Email Address: {this.state.data.email}</p>
							<p className = "gpa">GPA: {this.state.data.gpa}</p>
						</div>

						<div className = "btn_controls_single">
							<Link to = {'/edit/student/' + this.state.data.id } className = "btn_link">Edit</Link>
							<button className = "btn_link delete">Delete</button>
						</div>
					</div>) :
					(
						<p className = "error">There was an error.</p>
					)
				}
			</div>
		)

	}

}

// function mapStateToProps(state)  {
// 	return {
// 		currentStudent: state.currentStudent
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		fetchStudent: () => dispatch(fetchStudentThunk(id)),
// 		removeStudent: () => dispatch(removeStudentThunk())
// 	}
// }
export default SingleStudent;

