import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Explore from './components/Explore';
import Search from './components/Search';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  Tab,
  Row,
  Col,
  Nav,
  Popover,
  OverlayTrigger,
  Dropdown
} from 'react-bootstrap'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Nav from 'react-bootstrap/Nav'
// import Popover from 'react-bootstrap/Popover'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Dropdown from 'react-bootstrap/Dropdown'
import 'font-awesome/css/font-awesome.min.css';
import TwitterDB from './TwitterDB'
import LandingPage from './components/Landing-page';
import RegisterForm from './components/Register-form';
import UserHomePage from './components/UserHomePage';
import HealthNews from './components/HealthNews';
import SignIn from './components/SignIn';

class App extends Component {

  //to check if there is a db store on local storage , unless create a db 
  componentDidMount() {
    if (localStorage.getItem('TwitterDB') === null) {
      console.log('empty');
      localStorage.setItem('TwitterDB', [])
    } else {
      console.log('not empty');
    }
  }

  render() {

    return (
      <Router>
        <div className="App">

          <Route exact path="ashwagzabani/Project-2/landingPage" component={LandingPage} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/user' component={UserHomePage} />
          <Route path='/signIn' component={SignIn} />

          {/* <Route path="/explore/news" render={props => <News {...props} />} /> /> */}
          {/* <Route path='/user/home' render={props => <Home {...props} />} /> */}
          {/* <Route path='/user/explore' component={Explore} /> */}
          {/* <Route path='/user/search' component={Search} /> */}
          {/* <Route path='/user/favesTweets' component={FavesTweets} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
