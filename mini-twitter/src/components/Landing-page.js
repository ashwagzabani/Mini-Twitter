import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home'

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Jumbotron>
                    <h1>Welcom to mini-twitter</h1>
                    <p>
                        Join to a simple social now, enjoy writing your tweets and share it with others.
                    </p>
                    <p>
                        <Button variant="primary" as={Link} to="/home">Join Now</Button>
                    </p>
                </Jumbotron>
                <Route exact path='/home' component={Home} />

            </div>
        );
    }
}

export default LandingPage;
