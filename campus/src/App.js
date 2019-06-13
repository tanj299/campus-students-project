import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/partials/Navbar';
import Footer from './components/partials/Footer';

import Home from './components/Home';

import SingleCampus from './components/SingleCampus';
import AllCampus from './components/AllCampus';

import SingleStudent from './components/SingleStudent';
import AllStudents from './components/AllStudents';

import AddCampusForm from './components/forms/AddCampusForm';
import EditCampus from './components/forms/EditCampus';

import AddStudentForm from './components/forms/AddStudentForm';
import EditStudent from './components/forms/EditStudent';

import NotFound404 from './components/NotFound404';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar />

        <div className = "page-body">

          <Switch>

            <Route path = "/" exact component = { Home } />

            <Route path = "/students" component = { AllStudents } />
            <Route path = "/campuses" component = { AllCampus } />

            <Route path = "/student/:id" component = { SingleStudent } />
            <Route path = "/campus/:id" component = { SingleCampus } />

            <Route path = "/add/campus" component = { AddCampusForm } />
            <Route path = "/add/student" component = { AddStudentForm } />

            <Route path = "/edit/campus/:id" component = { EditCampus } />
            <Route path = "/edit/student/:id" component = { EditStudent } />

            <Route component = { NotFound404 } />

          </Switch>

        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
