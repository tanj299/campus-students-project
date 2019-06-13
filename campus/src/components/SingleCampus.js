import React, { Component, Fragment } from 'react';
// import axios from 'axios';

let rawData = [{
	id: 1,
	name: "Hunter College",
	address: "695 Park Ave, New York, NY 10065"
},{
	id: 2,
	name: "Parsons School of Design",
	address: "66 5th Ave, New York, NY 10011"
}];

class SingleCampus extends Component {

	constructor (props) {

		super(props);

		this.state = {

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

		return (
			<div>
				{ (this.state.data != null) ? (
					<Fragment>
						<h1>{this.state.data.name}</h1>

						<p className = "address">{this.state.data.address}</p>

						
					</Fragment>) :
					(
						<p className = "error">There was an error.</p>
					)
				}
			</div>
		)

	}

}

export default SingleCampus;
