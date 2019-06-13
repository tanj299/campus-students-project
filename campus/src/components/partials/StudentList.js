import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

function StudentInfo ({ studentData }) {
	return (

		<Fragment>
			<h3 className = "name">
				{ studentData.firstName + " " + studentData.lastName }
			</h3>

			<div className = "student_details">
				<p>{ studentData.email }</p>
			</div>
		</Fragment>

	);
}

class StudentList extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: props.studentList,
			displayErrorMessage: false,
			
			searchTerm: ""
		}

		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}

	handleSearchTermChange (e) {

		this.setState({
			searchTerm: e.target.value
		});

	}

	render () {

		let student_list = this.props.studentList.filter((c, i) => {
			if (this.state.searchTerm.length > 3) {
				let fullName = c.firstName + " " + c.lastName;
				
				return (fullName.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1);
			}
			else
				return true
		}).map( (s, i) => {
			return (
				<li className = "item_sm" key = { s.id } >
                    <Link to = { '/student/' + s.id }>
					    <StudentInfo studentData = { s } />
                    </Link>
                        <br/>
                    <Link to = { '/student/' + s.id } className = "btn_link">View Student</Link>
					<Link to = { '/edit/student/' + s.id } className = "edit">Edit</Link>
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

				{ (student_list.length > 0) ? (
					<ul className = "item_list">
						{ student_list }
					</ul>
				) : (
					<p className = "error">
						No Students Found
					</p>
				) }
			</div>

		);

        if (this.props.studentList.length < 1) {
            toRender = (
                <p className = "error">
                    0 Students
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

export default StudentList;
