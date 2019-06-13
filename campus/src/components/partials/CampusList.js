import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

function CampusInfo ({ campusData }) {
	return (

		<Fragment>
			<h3 className = "name">
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

		// this.state = {

		// 	data: props.campusList,

		// 	displayErrorMessage: false

		// }

	}

	render () {
		console.log("campus error", this.props.campusList)
		let campus_list = this.props.campusList.map( (s, i) => {
			return (
				<li className = "item_sm" key = { s.id } >
                    <Link to = { '/campus/' + s.id}>
                        <CampusInfo campusData = { s } />
                    </Link>
                        <br/>
                    <Link to = { '/campus/' + s.id } className = "btn_link">View Campus</Link>
					<Link to = { '/edit/campus/' + s.id } className = "edit">Edit</Link>
				</li>
			);
        });

        let toRender = ( 
            <ul className = "item_list campus_list">
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