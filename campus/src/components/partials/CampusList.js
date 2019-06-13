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

		this.state = {

			data: props.campusList,

			searchTerm: "",

			displayErrorMessage: false

		}

		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);

	}

	handleSearchTermChange (e) {

		this.setState({
			searchTerm: e.target.value
		});

	}

	render () {

		let campus_list = this.props.campusList.filter((c, i) => {
			if (this.state.searchTerm.length > 3)
				return c.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1;
			else
				return c == c
		}).map( (s, i) => {
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
			<div>
				<div className = "searchbar input_wrapper">
					<label>
						Search
					</label>
					<input type = "text" value={this.state.searchTerm} onChange = { this.handleSearchTermChange } />
				</div>

				{ (campus_list.length > 0) ? (
					<ul className = "item_list">
						{ campus_list }
					</ul>
				) : (
					<p className = "error">
						No Campuses Found
					</p>
				) }
			</div>
        );

        if (this.props.campusList.length < 1) {
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