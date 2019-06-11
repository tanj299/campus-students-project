import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

function StudentInfo ({ studentData }) {
	return (

		<Fragment>
			<h3 className = "student_name">
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
			displayErrorMessage: false

		}

	}

	render () {

		let student_list = this.props.studentList.map( (s, i) => {
			return (
				<li key = { s.id } >
                    <Link to = { '/student/' + s.id }>
					    <StudentInfo studentData = { s } />
                    </Link>
				</li>
			);
        });

        let toRender = ( <ul>
                { student_list }
            </ul> );

        if (student_list.length < 1) {
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
