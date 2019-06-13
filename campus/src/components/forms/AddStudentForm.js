import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewStudentThunk } from '../store/utilities/Student'
// import axios from 'axios';
// import { allStudents } from '../../reducers';

class AddStudentForm extends Component {

	constructor (props) {

		super(props);

		this.state = {

			firstName: "",
			lastName: "",
			email: "",

			displayErrorMessage: false

		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitData = this.submitData.bind(this);
	}

	handleInputChange (e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submitData (e) {
		e.preventDefault();
		this.props.newStudent(this.state);

		if (this.state.firstName.length < 1 
			|| this.state.lastName.length < 1 
			|| this.state.email.length < 1) {

				this.setState({
					displayErrorMessage: true
				});

				return;
			}

		// axios.post('/add/campus', { firstName: this.state.firstName, lastName: this.state.lastName })
		// 	.then( (res) => {
		// 		console.log(res);
		// 	})
		// 	.catch( (err) => {
		// 		console.log(err);
		// 	});

		console.log("Added!");
	}

	render () {
		return (
			<div className = "editForm-wrapper">
				<h1>Add Student</h1>

				<div className = "editForm form">
					<div className = "input_wrapper">
						<label className = "add_item_label" htmlFor = "firstName">
							First Name
						</label>
						<input type = "text" name = "firstName" onChange = { this.handleInputChange } />
					</div>

					<div className = "input_wrapper">
						<label className = "add_item_label" htmlFor = "lastName">
							Last Name
						</label>
						<input type = "text" name = "lastName" onChange = { this.handleInputChange } />
					</div>

					<div className = "input_wrapper">
						<label className = "add_item_label" htmlFor = "name">
							Email
						</label>
						<input type = "text" name = "email" onChange = { this.handleInputChange } />
					</div>

					<div className = "btn_controls_wrapper sm">
						{ (this.state.displayErrorMessage) 
							&& (
							<p className = "error_sm">
								Please Fill All Fields
							</p>
							) 
						}
						<input type = "submit" onClick = { this.submitData } className = "btn_link" />
					</div>
				</div>
			</div>

		)

	}

}

const mapDispatchToProps = (dispatch) => {
	return {
		newStudent: (studentToPost) => dispatch(addNewStudentThunk(studentToPost))
	}
}

// null is passed in since we don't use mapStateToProps
// we don't care about adding this component's state to the props 
export default connect(null, mapDispatchToProps)(AddStudentForm);

