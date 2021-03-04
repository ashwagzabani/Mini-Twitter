import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";//HashRouter
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import LandingPage from './components/Landing-page';
import RegisterForm from './components/Register-form';
import UserHomePage from './components/UserHomePage';
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
      <Router >
        <div className="App">

          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={RegisterForm} />
          <Route path='/user' component={UserHomePage} />
          <Route path='/signIn' component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
