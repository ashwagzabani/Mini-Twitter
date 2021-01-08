import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import News from './components/News';
import Search from './components/Search';
import FavesTweets from './components/Faves-tweets';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to='/'>Home</Link> {' || '}
          <Link to='/news'>News</Link> {' || '}
          <Link to='/search'>Search</Link> {' || '}
          <Link to='/favesTweets'>FavesTweets</Link>

          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
          <Route path='/search' component={Search} />
          <Route path='/favesTweets' component={FavesTweets} />
          <button className="btn btn-primary">hi</button>
        </div>
      </Router>
    );
  }
}

export default App;
