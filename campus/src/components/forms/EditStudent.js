import { fetchStudentThunk } from './../../components/store/utilities/Student';
import { removeStudentThunk } from './../../components/store/utilities/Student';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class EditStudent extends Component {

	constructor (props) {

		super(props);

		this.props = {

			isFound: true,

			id: props.currentStudent.id,
			firstName: props.currentStudent.firstName,
			lastName: props.currentStudent.lastName,
			email: props.currentStudent.email,
			gpa: props.currentStudent.gpa

		}

		this.submitData = this.submitData.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange (e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submitData (e) {

		if (this.props.firstName.length < 1 
			|| this.props.lastName.length < 1 
			|| this.props.email.length < 1
			|| this.props.gpa.length < 1) {

			this.setState({
				displayErrorMessage: true
			});

			return;
		}
	}

	componentDidMount () {
		
		this.props.fetchStudent(this.props.match.params.id);
	
	}

	render () {

		return (
			<div class = "editForm-wrapper">
				<h1>Edit Student</h1>

				{ (this.props.isFound) ? (

				<div className = "editForm form">

					<div className = "input_wrapper">
						<label htmlFor = "firstName">First Name</label>
						<input type = "text" name = "firstName" value = { this.props.currentStudent.firstName } onChange = {this.handleInputChange} />
					</div>
					
					<div className = "input_wrapper">
						<label htmlFor = "lastName">Last Name</label>
						<input type = "text" name = "lastName" value = { this.props.currentStudent.lastName } onChange = {this.handleInputChange} />
					</div>

					<div className = "input_wrapper">
						<label htmlFor = "email">Email Address</label>
						<input type = "email" name = "email" value = { this.props.currentStudent.email } onChange = {this.handleInputChange} />
					</div>

					<div className = "input_wrapper">
						<label htmlFor = "gpa">GPA</label>
						<input type = "text" name = "gpa" value = {this.props.currentStudent.gpa} onChange = {this.handleInputChange} />
					</div>

					<div className = "btn_controls_wrapper sm">
						{ (this.props.displayErrorMessage) 
							&& (
							<p className = "error_sm">
								Please Fill All Fields
							</p>
							) 
						}
						<input type = "submit" className = "btn_link" onClick = { this.submitData } value = "Save Changes" />
						<Link to = {"/student/" + this.props.id} className = "btn_link cancel">Cancel</Link>
					</div>
				</div>

				) : (
					<div className = "error">Student Not Found</div>
				)}

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

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);