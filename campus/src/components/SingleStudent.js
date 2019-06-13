import { fetchStudentThunk } from '../components/store/utilities/Student';
import { removeStudentThunk } from '../components/store/utilities/Student';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { Component, Fragment } from 'react';


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
		console.log(this.props.match.params.id)
		this.props.fetchStudent(this.props.match.params.id);
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
		// const student = this.props.data || 'NO student'

		return (
			<div>
				{ (this.props.currentStudent != null) ? (
					<div className = "single_item_wrapper">
						<h1>{this.props.currentStudent.firstName + " " + this.props.currentStudent.lastName}</h1>
						
						<div className = "details">
							<p className = "email">Email Address: {this.props.currentStudent.email}</p>
							<p className = "gpa">GPA: {this.props.currentStudent.gpa}</p>
						</div>

						<div className = "btn_controls_single">
							<Link to = {'/edit/student/' + this.props.currentStudent.id } className = "btn_link">Edit</Link>
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

const mapStateToProps = (state) => {
	return {
		currentStudent: state.allStudents.singleStudent,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
		removeStudent: () => dispatch(removeStudentThunk())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)

