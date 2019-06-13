import React, { Component } from 'react';
import { fetchCampusThunk } from '../../components/store/utilities/Campus';
import { connect } from 'react-redux';

class EditCampus extends Component {

	constructor (props) {

		super(props);

		this.state = {

			isFound: true,

			id: props.currentCampus.id,

			name: props.currentCampus.name,
			address: props.currentCampus.address,
			description: props.currentCampus.description,

			displayErrorMessage: false

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
		console.log(this.state.name)
		if (this.state.name.length < 1 
			|| this.state.address.length < 1) {

			this.setState({
				displayErrorMessage: true
			});

			return;
		}
	}

	componentDidMount () {
		console.log(this.props.currentCampus.id)
		this.props.fetchCampus(this.props.match.params.id);
	}

	render () {

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

						<div className = "input_wrapper">
							<label htmlFor = "description">Campus Description</label>
							<textarea name = "description" value = { this.state.description } onChange = {this.handleInputChange}></textarea>
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
				) : (
					<div className = "error">Campus Not Found</div>
				)}

			</div>
		)

	}

}

const mapStateToProps = (state) => {
	return {
		currentCampus: state.allCampus.singleCampus
	} 
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);