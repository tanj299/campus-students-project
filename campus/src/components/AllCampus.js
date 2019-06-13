import React, { Component } from 'react';
import CampusList from './partials/CampusList';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Campus, { fetchAllCampusThunk, removeCampusThunk } from '../components/store/utilities/Campus'

class AllCampus extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: [{
				id: 1,
				name: "Hunter College",
				address: "695 Park Ave, New York, NY 10065"
			},{
				id: 2,
				name: "Parsons School of Design",
				address: "66 5th Ave, New York, NY 10011"
			}]

		}

	}

	componentDidMount () { 
		this.props.fetchAllCampus();
		console.log("Campus Props", this.props)
		// console.log(this.props.fetchAllCampus());
	}

	// 	axios.get("/campuses/all")
	// 		.then( (response) => {

	// 			this.setState({
	// 				data: response.data,
	// 				displayErrorMessage: false
	// 			});

	// 		})
	// 		.catch( (err) => {

	// 			this.setState({ displayErrorMessage: true })

	// 		});

	// }

	render () {

		return (

			<div className = "all_campuses list_all">
				<div className = "btn_controls_wrapper">
					<Link className = "btn_link" to = "/add/campus">Add Campus</Link>
				</div>

				<div className = "large_list">
					{/* <p>Campus Count: {this.props.allCampus.length}</p> */}
					{/* <CampusList campusList = {this.state.data}/> */}
					<CampusList campusList = { this.props.allCampus } />
				</div>
			</div>

		)

	}

}

const mapStateToProps = (state) => { 
	return { 
		allCampus: state.allCampus
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllCampus: () => dispatch(fetchAllCampusThunk()),
		// removeCampus: () => dispatch(removeCampusThunk())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampus);

