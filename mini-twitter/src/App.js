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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import 'font-awesome/css/font-awesome.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Link to='/'>Home</Link> {' || '}
          <Link to='/news'>News</Link> {' || '}
          <Link to='/search'>Search</Link> {' || '}
          <Link to='/favesTweets'>FavesTweets</Link> */}

          <Tab.Container id="left-tabs-example" defaultActiveKey="Home">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/" eventKey="Home" ><i class="fa fa-home"></i>{'  '}Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/news" eventKey="News" ><i class="fa fa-newspaper"></i>{'  '}News</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/favesTweets" eventKey="favesTweets"><i class="fa fa-star"></i>{'  '}favesTweets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/search" eventKey="search"><i class="fa fa-search"></i>{'  '}search</Nav.Link>
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
                  <Route exact path='/' component={Home} />
                  <Route path='/news' component={News} />
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
