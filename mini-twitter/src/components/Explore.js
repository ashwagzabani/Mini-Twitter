import React, { Component } from 'react';
import {
    Tab,
    Tabs
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class Explore extends Component {
    render() {
        return (
            <Router>
                <div className="Explore container">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Movies">
                            Movies
                        </Tab>
                        <Tab eventKey="profile" title="Quets">
                            Quets
                        </Tab>
                        <Tab eventKey="contact" title="News">
                            News
                        </Tab>
                    </Tabs>
                </div>
            </Router>
        );
    }
}

export default Explore;
