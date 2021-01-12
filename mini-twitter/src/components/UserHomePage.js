import React, { Component } from 'react';
import TweetList from './Tweet-list';
import {
    Tab,
    Row,
    Col,
    Nav,
    Popover,
    OverlayTrigger,
    Dropdown
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Explore from './Explore';
import Search from './Search';
import FavesTweets from './Faves-tweets';
class UserHomePage extends Component {
    render() {
        return (
            <div className="Home">
                <Tab.Container id="left-tabs-example" defaultActiveKey="Home">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/user/home" eventKey="Home" ><i className="fa fa-home"></i>{'  '}Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/user/explore" eventKey="Explore" ><i className="fa fa-newspaper"></i>{'  '}Explore</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/user/favesTweets" eventKey="favesTweets"><i className="fa fa-star"></i>{'  '}favesTweets</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/user/search" eventKey="search"><i className="fa fa-search"></i>{'  '}search</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                {/* <Tab.Pane eventKey="Home">
                                    <Route path='/user/home' render={props => <Home {...props} />} />
                                </Tab.Pane> */}
                                {/* <Tab.Pane eventKey="second">
                    <Route path='/news' component={News} />
                  </Tab.Pane> */}
                                <Route path='/user/home' render={props => <Home {...props} />} />
                                <Route path='/user/explore' component={Explore} />
                                <Route path='/user/favesTweets' component={FavesTweets} />
                                <Route path='/user/search' component={Search} />
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default UserHomePage;
