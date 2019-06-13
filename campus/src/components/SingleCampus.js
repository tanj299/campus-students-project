import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import StudentList from './partials/StudentList';

let rawData = [{
	id: 1,
	name: "Hunter College",
	address: "695 Park Ave, New York, NY 10065"
},{
	id: 2,
	name: "Parsons School of Design",
	address: "66 5th Ave, New York, NY 10011"
}];

let rawDataStudents = [
	{ 
		id: 1, 
		firstName: 'John', 
		lastName: 'Smith', 
		email: 'jsmith@gmail.com',
		gpa: '3.5',
		campusID: 1
	},
	{ 
		id: 2, 
		firstName: 'Bob', 
		lastName: 'Sponge', 
		email: 'spongeb@gmail.com',
		gpa: '1.000',
		campusID: 1
	}
];

class SingleCampus extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: undefined,
			studentData: undefined,
			campus: props.campusInfo

		}

	}

	componentDidMount () {

		for (let i = 0; i < rawData.length; i++) {
			
			if (rawData[i].id == this.props.match.params.id) {

				let t = [];

				for (let j = 0; j < rawDataStudents.length; j++) {

					if (rawDataStudents[j].campusID == rawData[i].id){

						t.push(rawDataStudents[j]);

					}
				}

				this.setState({
					data: rawData[i],
					studentData: t
				});

				return;
			}
		}
	}

	render () {

		return (
			<div>
				{ (this.state.data != null) ? (
					<div className = "single_item_wrapper">
						<h1>{this.state.data.name}</h1>

						<div className = "details">
							<p className = "address">{this.state.data.address}</p>
						</div>

						<div className = "btn_controls_single">
							<Link to = {'/edit/campus/' + this.state.data.id } className = "btn_link">
								<i class="fas fa-pencil-alt"></i>Edit
							</Link>
							<button className = "btn_link delete">
								<i class="fas fa-trash"></i> Delete
							</button>
						</div>

						<div className = "large_list">
							<h1>Enrolled Students</h1>
							<StudentList studentList = { this.state.studentData } />
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

export default SingleCampus;
