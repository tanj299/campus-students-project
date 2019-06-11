import React, { Component, Fragment } from 'react';
// import axios from 'axios';

import { Link } from 'react-router-dom';

function CampusInfo ({ campusData }) {
	return (

		<Fragment>
			<h3 className = "campus_name">
				{ campusData.name }
			</h3>

			<div className = "campus_details">
				<p>{ campusData.address }</p>
			</div>
		</Fragment>

	);
}

class CampusList extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: props.campusList,

			displayErrorMessage: false

		}

	}

	render () {

		let campus_list = this.props.campusList.map( (s, i) => {
			return (
				<li key = { s.id } >
                    <Link to = { '/campus/' + s.id}>
                        <CampusInfo campusData = { s } />
                    </Link>
				</li>
			);
        });

        let toRender = ( 
            <ul>
                { campus_list }
            </ul> 
        );

        if (campus_list.length < 1) {
            toRender = (
                <p className = "error">
                    0 Campuses
                </p>
            )
        }

		return (
            <Fragment>
                
                { toRender }

            </Fragment>

		)

	}

}

export default CampusList;