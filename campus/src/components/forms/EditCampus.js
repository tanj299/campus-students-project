import React, { Component } from 'react';
import axios from 'axios';

let rawData = [{
	id: 1,
	name: "Hunter College",
	address: "695 Park Ave, New York, NY 10065"
},{
	id: 2,
	name: "Parsons School of Design",
	address: "66 5th Ave, New York, NY 10011"
}];

class EditCampus extends Component {

	constructor (props) {

		super(props);

		this.state = {

			isFound: false,
			id: "",
			name: "",
			address: "",

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
		e.preventDefault();

		axios.post("/edit/campus/" + this.state.id)
			.then((res) => {
				console.log("Success");
			})
			.catch((err) => {
				console.log(err);
			});
	}

	componentDidMount () {

		for (let i = 0; i < rawData.length; i++) {
			
			console.log(rawData[i].id);

			if (rawData[i].id == this.props.match.params.id) {

				this.setState({
					isFound: true,
					id: rawData[i].id,
					name: rawData[i].name,
					address: rawData[i].address
				});

				return;
			}

		}
	}

	render () {

		console.log(this.state.isFound);

		return (
			<div className = "editForm-wrapper">
				<h1>Edit Campus</h1>

				{ (this.state.isFound) ? (
					<div className = "editForm form">

						<div className = "input_wrapper">
							<label htmlFor = "name">Campus Name</label>
							<input type = "text" name = "name" value = { this.state.name } onChange = {this.handleInputChange} />
						</div>

						<div className = "input_wrapper">
							<label htmlFor = "address">Campus Address</label>
							<input type = "text" name = "address" value = { this.state.address } onChange = {this.handleInputChange} />
						</div>

						<div className = "btn_controls_wrapper">
							<input type = "submit" onClick = { this.submitData } className = "btn_link" />
						</div>
					</div>
				) : (
					<div className = "error">Campus Not Found</div>
				)}

			</div>
		)

	}

}

export default EditCampus;