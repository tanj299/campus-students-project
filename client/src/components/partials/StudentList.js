import React, { Component, Fragment } from 'react';

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

		let student_list = this.state.data.map( (s, i) => {
			return (
				<li key = { i } >
					<StudentInfo studentData = { s } />
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
