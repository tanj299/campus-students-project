import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

//import {fetchHome} from "./actions/index";
//import {connect} from "react-redux";
//@connect((store)=>{
// 	return{
// 		firstName:store.user
// 	}
// })
// export connectedComponent(mapStateToprops,null){
// 	return {
// 		home: state...
// 	}
// }
class Home extends Component  {
	constructor(props){
		super(props);
		this.state={
			data:' ',
		};
	}
// async componentDidMount () {
// 	const {data}=await axios.get('http://localhost:3000/')
// 	this.setState({data})
// 	}
componentDidMount() {
	//this.props.dispatch(fetchHome))

	//call fetch function once component mounts
	this.callBackendAPI()
		.then(res=>this.setState({data:res.express}))
		.catch(error=>console.log(error));
}
//fetch our GET route from Express server 
callBackendAPI=async()=>{
	const response=await fetch('/');
	const body=await response.json();
	if(response.status!==200){
		throw Error(body.message)
	}
	return body;
};
//fetchHome(){
// 	this.props.dispatch(fetchHome())
// }

render(){
	return (
		<div>
			<header className = "home-header">
				<h1>An easy and comprehensive way to manage students and campuses.</h1>
			</header>
			<section className = "home-body">
				<h1>Get Started.</h1>
				<div className = "get-started-link-wrapper">
					<Link to = "/add/student" className = "btn_link">
						Add a Student
					</Link>

					<Link to = "/add/campus" className = "btn_link">
						Add a Campus
					</Link>
				</div>	
			</section>  
		</div>
	)
	}
}

export default Home;
