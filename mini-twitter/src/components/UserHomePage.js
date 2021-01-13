import React, { Component } from 'react';
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
import '../comonents-style/UserHomePage.css'

class UserHomePage extends Component {


    render() {
        //pop up message 
        const popover = (
            <Popover>
                {/* <ul>
            <li>My Profile</li>
            <li>Followers</li>
            <li>Sign out</li>
          </ul> */}
                <Dropdown href="#/action-1">
                    <Dropdown>
                        <span>Settings</span>
                        <Dropdown.Item href="#/action-1">Delete All Tweets</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete All Favorite Tweets</Dropdown.Item>
                    </Dropdown>
                    <Dropdown.Item href="#/action-2">Sign out</Dropdown.Item>
                </Dropdown>
            </Popover>
        );

        return (
            <div className="Home" >
                <div className="Home-header">
                    {/* {TwitterDB.users[0].displayName} */}
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <span className="options">
                            <i className="fa fa-bars">
                            </i>
                        </span>
                    </OverlayTrigger>
                </div>
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
                                <Route path='/user/home' render={props => <Home {...props} listedTweets='all' />} />
                                <Route path='/user/explore' component={Explore} />
                                <Route path='/user/favesTweets' render={props => <Home {...props} listedTweets='favesTweets' />} />
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
