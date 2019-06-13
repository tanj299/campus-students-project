import React, { Component } from 'react';
import StudentList from './partials/StudentList';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllStudentsThunk, addNewStudentThunk, removeStudentThunk } from '../components/store/utilities/Student';

class AllStudents extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: props.allStudents,
			displayErrorMessage: false

		}
	}
	
	componentDidMount() {
		this.props.fetchAllStudents();
	}

	render () {

		return (

			<div className = "all_students list_all">
				<div className = "btn_controls_wrapper">
					<div className = "counter"><i class="fas fa-user-graduate"></i> { this.props.allStudents.length }</div>
					<Link className = "btn_link" to = "/add/student">Add Student</Link>
				</div>

				<div className = "large_list">

					<StudentList studentList = { this.props.allStudents } />
						
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
		// allStudents expects from my reducer, an allStudents object, which we then call state.allStudents 
		// and now the first allStudents will "become" state.allStudents
		// the "state" here is really the state of the store that we're grabbing, NOT local state from THIS component!
		allStudents: state.allStudents,
		myNewKey: state.myOldKey
	}
}

// returns objects with keys
// one of the keys can be named anything; called from component
// goes to store, chooses the appropriate function with the key 
const mapDispatchToProps = (dispatch) => {
	return {
		// remember, fetchAllStudents is a key; the key can literally be 'banana'
		// which would then invoke a dispatch 

		// fetchAllStudents is a key which will be put on this.props (on this component) and then it will --> runs fetchStudentThunk
		fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
		// addNewStudent: () => dispatch(addNewStudentThunk())
	}
}

// syntax thing - connect puts all keys into my props object
// the return are the keys 
// mapStateToProps gets entire redux store 
// mapDispatchToProps gets a dispatch method to communicate with the store 
export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
