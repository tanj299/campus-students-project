import { fetchStudentThunk } from '../components/store/utilities/Student';
import { removeStudentThunk } from '../components/store/utilities/Student';
import { connect } from 'react-redux';
import axios from 'axios';
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
			
			if (rawData[i].id == this.props.match.params.id) {
				this.setState({
					data: rawData[i]
				});

				return;
			}
		}
	}

	render () {
		const student = this.state.data[0] || 'NO student'

		return (
			<div>
				{ (this.state.data != null) ? (
					<Fragment>
						<h1>{this.state.data.firstName + " " + this.state.data.lastName}</h1>

						<p className = "email">{this.state.data.email}</p>

						<p className = "gpa">{this.state.data.gpa}</p>
					</Fragment>) :
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

