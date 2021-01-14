import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RegisterForm from './Register-form'
import '../comonents-style/Header.css'

class LandingPage extends Component {

    render() {
        return (
            <div className="LandingPage">
                <div className="header">
                    <Button variant="primary" as={Link} to="/signIn">Sign In</Button>

                </div>
                <Jumbotron>
                    <h1>Welcom to mini-twitter</h1>
                    <p>
                        Join to a simple social now, enjoy writing your tweets and share it with others.
                    </p>
                    <p>
                        <Button variant="primary" as={Link} to="/register">Join Now</Button>
                        {/* <Button variant="primary" as={Link} to="/login">Log In</Button> */}
                    </p>
                </Jumbotron>

            </div>
        );
    }
}

export default LandingPage;
