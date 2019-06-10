import React from 'react';
import {Link} from 'react-router-dom';

function NotFound404 () {

	return (

		<div className = "page_error m_404">
			<h1>404 Page Not Found.</h1>
			<div>
				Are you lost?
				<br />
				<br />
				<Link to = "/">Go Back Home</Link>
				
			</div>
		</div>

	);

}

export default NotFound404;
