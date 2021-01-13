import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RegisterForm from './Register-form'

class LandingPage extends Component {

    render() {
        // parseInt(localStorage.getItem("")) < 0 ? 
        // window.addEventListener("popstate", () => {
        //     //when user trying back some sanpshot rendering and hidding at momemt so nex line to solve this problem
        //     // this.props.history.push("/");
        //     // this.props.history.go(1);
        // });
        return (
            <div className="LandingPage">
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
