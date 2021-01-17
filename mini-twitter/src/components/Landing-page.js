import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../comonents-style/Header.css'
import '../comonents-style/Landing-page.css'

class LandingPage extends Component {

    render() {
        return (
            <div className="LandingPage">
                <div className="header1">
                    <p>MINI-TWITTER</p>
                    <Button className="signIn" variant="primary" as={Link} to="/signIn">Sign In</Button>

                </div>
                <Jumbotron>
                    <h1>Welcom to mini-twitter</h1>
                    <p>
                        Join to a simple social now, enjoy writing your tweets.
                    </p>
                    <p>
                        <Button variant="primary" as={Link} to="/register">Join Now</Button>
                    </p>
                </Jumbotron>

            </div>
        );
    }
}

export default LandingPage;
