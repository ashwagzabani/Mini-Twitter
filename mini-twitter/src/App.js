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
import FavesTweets from './components/Faves-tweets';

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: ""
    }
  }
  render() {
    if (localStorage.getItem('TwitterDB') === null) {
      console.log('empty');
      localStorage.setItem('TwitterDB', [])
    } else {
      console.log('not empty');
    }
    //pop up message 
    const popover = (
      <Popover>
        {/* <ul>
          <li>My Profile</li>
          <li>Followers</li>
          <li>Sign out</li>
        </ul> */}
        <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sign out</Dropdown.Item>
      </Popover>
    );

    return (
      <Router>
        <div className="App">
          <div className="App-header">
            {TwitterDB.users[0].displayName}
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <span className="options">
                <i className="fa fa-bars">
                </i>
              </span>
            </OverlayTrigger>
          </div>
          <Route exact path="/LandingPage" component={LandingPage} />
          {/* <Link to='/'>Home</Link> {' || '}
          <Link to='/news'>News</Link> {' || '}
          <Link to='/search'>Search</Link> {' || '}
          <Link to='/favesTweets'>FavesTweets</Link> */}

          <Tab.Container id="left-tabs-example" defaultActiveKey="Home">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/home" eventKey="Home" ><i className="fa fa-home"></i>{'  '}Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/explore" eventKey="Explore" ><i className="fa fa-newspaper"></i>{'  '}Explore</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/favesTweets" eventKey="favesTweets"><i className="fa fa-star"></i>{'  '}favesTweets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/search" eventKey="search"><i className="fa fa-search"></i>{'  '}search</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {/* <Tab.Pane eventKey="News">
                    <Route exact path='/' component={Home} />hhh
                     </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Route path='/news' component={News} />
                  </Tab.Pane> */}
                  <Route path='/home' component={Home} />
                  <Route path='/explore' component={Explore} />
                  <Route path='/search' component={Search} />
                  <Route path='/favesTweets' component={FavesTweets} />
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Router>
    );
  }
}

export default App;
