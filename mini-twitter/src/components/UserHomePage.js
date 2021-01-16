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
import '../comonents-style/Header.css'
import '../comonents-style/UserHomePage.css'
class UserHomePage extends Component {
    constructor() {
        super();
        this.state = {
            // deleteAllTweetsClicked: false,
            // deleteAllFavesTweetsClicked: false,
            // signOutClicked: false
            handleTypeClicked: ''
        }
    }

    handleDeleteAllTweetsClicked = () => {
        this.setState({
            handleTypeClicked: 'deleteAllTweetsClicked'
        })
    }

    handleDeleteAllFavesTweetsClicked = () => {
        this.setState({
            handleTypeClicked: 'deleteAllFavesTweetsClicked'
        })
    }

    handlesignOutClicked = () => {
        this.setState({
            handleTypeClicked: 'signOutClicked'
        })
        localStorage.setItem("userLoggedInId", -1)
        console.log(localStorage.getItem("userLoggedInId"));
    }

    userLoggedInDisplayName = () => {
        const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));
        const userLoggedInId = parseInt(localStorage.getItem('userLoggedInId'));
        const userDisplayName = getUserDetails[userLoggedInId - 1].displayName;
        return (<span>{userDisplayName}</span>)

    }

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
                        <Dropdown.Item onClick={this.handleDeleteAllTweetsClicked}>Delete All Tweets</Dropdown.Item>
                        <Dropdown.Item onClick={this.handleDeleteAllFavesTweetsClicked}>Delete All Favorite Tweets</Dropdown.Item>
                    </Dropdown>
                    <Dropdown.Item as={Link} to="/" onClick={this.handlesignOutClicked}>Sign out</Dropdown.Item>
                </Dropdown>
            </Popover>
        );

        return (
            <div className="Home" >
                <div className="header header-home">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="Home">
                        <Row>
                            <Col sm={3}> <div className="flex-column-sm">
                                {parseInt(localStorage.getItem("userLoggedInId")) < 0 ? '' : this.userLoggedInDisplayName()
                                }
                                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                    <span className="options">
                                        <i className="fa fa-bars">
                                        </i>
                                    </span>
                                </OverlayTrigger>
                            </div>
                                <Nav variant="pills" className="clg-sm-12 bottom">
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/user/home" eventKey="Home" ><i className="fa fa-home"></i>{'  '}Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/user/explore" eventKey="Explore" ><i className="fa fa-newspaper"></i>{'  '}News</Nav.Link>
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
                                <div className="flex-column-lg">
                                    {parseInt(localStorage.getItem("userLoggedInId")) < 0 ? '' : this.userLoggedInDisplayName()
                                    }
                                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                        <span className="options">
                                            <i className="fa fa-bars">
                                            </i>
                                        </span>
                                    </OverlayTrigger>
                                </div>
                                <Tab.Content>
                                    {/* <Tab.Pane eventKey="Home">
                                    <Route path='/user/home' render={props => <Home {...props} />} />
                                </Tab.Pane> */}
                                    {/* <Tab.Pane eventKey="second">
                    <Route path='/news' component={News} />
                  </Tab.Pane> */}
                                    <Route path='/user/home' render={props => <Home {...props} listedTweets='all' handleOptionClicked={this.state.handleTypeClicked} />} />
                                    <Route path='/user/explore' component={Explore} />
                                    <Route path='/user/favesTweets' render={props => <Home {...props} listedTweets='favesTweets' handleOptionClicked={this.state.handleTypeClicked} />} />
                                    <Route path='/user/search' component={Search} />
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        );
    }
}

export default UserHomePage;
