import React, { Component } from 'react';
import { fetchStudentThunk } from './store/utilities/Student';
import { connect } from 'react-redux';
import axios from 'axios';

class SingleStudent extends Component {

	constructor (props) {

		super(props);

		// this.state = {
			
		// 	data: []
		// }

	}

	// async componentDidMount() {
	// 	try {
			
	// 		const {data} = await axios.get('http://localhost:5000/api/students')
	// 		this.setState({data})
	// 	} catch (error) {
	// 	console.error(error)	
	// 	}
	// }
	render () {
		const student = this.state.data[0] || 'NO student'

		return (
			<h1>{student.firstName}</h1>
			

		)

	}

}

function mapState(state)  {
	return  { data:  }
}
export default SingleStudent;

