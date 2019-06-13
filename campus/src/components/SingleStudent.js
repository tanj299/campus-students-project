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
		
	}

	render () {
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
							<Link to = {'/edit/student/' + this.state.data.id } className = "btn_link">
								<i class="fas fa-pencil-alt"></i>Edit
							</Link>
							<button className = "btn_link delete">
								<i class="fas fa-trash"></i> Delete
							</button>
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

