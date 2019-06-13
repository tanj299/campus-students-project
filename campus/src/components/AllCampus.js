import React, { Component } from 'react';
import CampusList from './partials/CampusList';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Campus, { fetchAllCampusThunk } from '../components/store/utilities/Campus'

class AllCampus extends Component {

	constructor (props) {

		super(props);

		this.state = {
			data: props.allCampus

		}

	}

	componentDidMount () { 
		this.props.fetchAllCampus();
	}

	render () {

		return (

			<div className = "all_campuses list_all">
				<div className = "btn_controls_wrapper">
				<div className = "counter">
					<i class="fas fa-school"></i> 
					{ this.props.allCampus.length }
				</div>
					<Link className = "btn_link" to = "/add/campus">Add Campus</Link>
				</div>

				<div className = "large_list">
					<CampusList campusList = { this.props.allCampus } />
				</div>
			</div>

		)

	}

}

const mapStateToProps = (state) => { 
	return { 
		allCampus: state.allCampus.campus
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllCampus: () => dispatch(fetchAllCampusThunk())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampus);

