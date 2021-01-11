import React, { Component } from 'react';
import {
    Tab,
    Tabs,
    Row,
    Col,
    Nav
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Movies from './Movies';
import News from './News';
import Quets from './Quets';


class Explore extends Component {
    render() {
        return (
            <Router>
                <div className="Explore container">
                    <Tabs defaultActiveKey="Movies" id="uncontrolled-tab-example">
                        <Tab as={Link} to="/expolre/movies" eventKey="Movies" title="Movies">
                            <Movies />
                            <Route path='/expolre/movies' component={Movies} />
                        </Tab>
                        <Tab as={Link} to="/explore/quets" eventKey="quets" title="Quets">
                            <Quets />
                            <Route path="/explore/quets" component={Quets} />
                        </Tab>
                        <Tab eventKey="News" title="News">
                            <News />
                            <Route path="/explore/news" component={News} />
                        </Tab>
                    </Tabs>
                    {/* <Tabs id="uncontrolled-tab-example" defaultActiveKey="Movies">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/expolre/movies" eventKey="Movies" ><i className="fa fa-home"></i>{'  '}Movies</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/explore/quets" eventKey="Quets" ><i className="fa fa-newspaper"></i>{'  '}Quets</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/explore/news" eventKey="News"><i className="fa fa-star"></i>{'  '}News</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Route path='/expolre/movies' component={Movies} />
                            <Route path='/explore/quets' component={Quets} />
                            <Route path='/explore/news' component={News} />
                        </Tab.Content>

                    </Tabs> */}
                </div>
            </Router>
        );
    }
}

export default Explore;
