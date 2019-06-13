import React, { Component, Fragment } from 'react';
import { fetchCampusThunk } from '../components/store/utilities/Campus';
import { connect } from 'react-redux';
// import { allCampus } from '../reducers';
import {Link} from 'react-router-dom';

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
		this.props.fetchCampus(this.props.match.params.id);
	}

	render () {

		return (
			<div>
				{ (this.props.currentCampus != null) ? (
					<div className = "single_item_wrapper">
						<h1>Campus Name: { this.props.currentCampus.name }</h1>

						<div className = "details">
							<p className = "address"> Address: { this.props.currentCampus.address }</p>
							<p className = "description"> Description: { this.props.currentCampus.description }</p>
						</div>

						<div className = "btn_controls_single">
							<Link to = {'/edit/campus/' + this.props.currentCampus.id } className = "btn_link">Edit</Link>
							<button className = "btn_link delete">Delete</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
