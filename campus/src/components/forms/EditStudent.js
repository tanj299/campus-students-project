import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './../partials/StudentList';

class EditStudent extends Component {

	constructor (props) {

		super(props);

		this.state = {

			isFound: false,

			id: "",
			fistName: "",
			lastName: "",
			email: "",
			gpa: "",

			// CODE FOR TESTING PURPOSES
			// REMOVE BEFORE PROJECT COMPLETION
			index: 0,
			rawData: [
				{ 
					id: 1, 
					firstName: 'John', 
					lastName: 'Smith', 
					email: 'jsmith@gmail.com',
					gpa: '3.5'
				},
				{ 
					id: 2, 
					firstName: 'Johnny', 
					lastName: 'John', 
					email: 'johnE@gmail.com',
					gpa: '1.98'
				}
			]

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

		let t = [...this.state.rawData];

		t[this.state.index] = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			gpa: this.state.gpa
		}

		this.setState({
			rawData: t
		});

		// axios.post("/edit/student/" + this.state.id)
		// 	.then((res) => {
				
		// 		console.log('Success');

		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	}

	componentDidMount () {

		for (let i = 0; i < this.state.rawData.length; i++) {

			if (this.state.rawData[i].id == this.props.match.params.id) {

				this.setState({
					isFound: true,

					id: this.state.rawData[i].id,
					firstName: this.state.rawData[i].firstName,
					lastName: this.state.rawData[i].lastName,
					email: this.state.rawData[i].email,
					gpa: this.state.rawData[i].gpa,

					index: i
				});

				return;
			}

		}

		// axios.get('/student/' + this.props.match.params.id)
		// 	.then( (res) => {
		// 		this.setState({
		// 			isFound: true,

		// 			id: res.data.id,
		// 			firstName: res.data.firstName,
		// 			lastName: res.data.lastName,
		// 			email: res.data.email,
		// 			gpa: res.data.gpa,
		// 		});
		// 	})
		// 	.catch ( (err) => {
		// 		console.log('Errr');
		// 	});
	}

	render () {

		return (
			<div class = "editForm-wrapper">
				<h1>Edit Student</h1>

				{ (this.state.isFound) ? (

				<div className = "editForm form">

					<div className = "input_wrapper">
						<label htmlFor = "firstName">First Name</label>
						<input type = "text" name = "firstName" value = { this.state.firstName } onChange = {this.handleInputChange} />
					</div>
					
					<div className = "input_wrapper">
						<label htmlFor = "lastName">Last Name</label>
						<input type = "text" name = "lastName" value = { this.state.lastName } onChange = {this.handleInputChange} />
					</div>

					<div className = "input_wrapper">
						<label htmlFor = "email">Email Address</label>
						<input type = "email" name = "email" value = { this.state.email } onChange = {this.handleInputChange} />
					</div>

					<div className = "input_wrapper">
						<label htmlFor = "gpa">GPA</label>
						<input type = "text" name = "gpa" value = {this.state.gpa} onChange = {this.handleInputChange} />
					</div>

					<div className = "btn_controls_wrapper">
						<input type = "submit" className = "btn_link" onClick = { this.submitData } value = "Save Changes" />
					</div>
				</div>

				) : (
					<div className = "error">Student Not Found</div>
				)}

			</div>
			
		)

	}

}

export default EditStudent;