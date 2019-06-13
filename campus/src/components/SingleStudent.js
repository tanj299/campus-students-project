import { fetchStudentThunk } from '../components/store/utilities/Student';
import { removeStudentThunk } from '../components/store/utilities/Student';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';


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
		this.props.fetchStudent(this.props.match.params.id);
	}

	render () {

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

