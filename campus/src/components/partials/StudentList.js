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

	// constructor (props) {

	// 	super(props);

	// 	// this.state = {

	// 	// 	data: props.studentList,
	// 	// 	displayErrorMessage: false

	// 	// }

	// }

	render () {
		console.log("error here", this.props.studentList)
		let student_list = this.props.studentList.map( (s, i) => {
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

        let toRender = ( <ul className = "item_list">
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
