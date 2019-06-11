import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/partials/Navbar';
import Footer from './components/partials/Footer';

import Home from './components/Home';
import AllCampus from './components/AllCampus';
import AllStudents from './components/AllStudents';
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
          <Route component = { NotFound404 } />
        </Switch>
          

        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
