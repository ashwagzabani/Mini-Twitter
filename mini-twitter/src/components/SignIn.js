import React, { Component } from 'react';
import {
    Form,
    Alert
} from 'react-bootstrap'
import {
    Link,
    Redirect,
    Route
} from "react-router-dom";
import Home from './Home';
class SignIn extends Component {
    render() {
        return (
            <div className='SignIn'>
                <form>
                    <fieldset>
                        <legend>User Information</legend>
                        <Form.Group>
                            <Form.Label>User Name</Form.Label>
                            <input type="text" name="userName" value={this.state.userName} placeholder="Enter user name" onChange={this.assignValueToState} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Display Name</Form.Label>
                            <input type="text" name="displayName" value={this.state.displayName} placeholder="Enter display name" onChange={this.assignValueToState} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <input type="email" name="email" value={this.state.email} placeholder="Enter email" onChange={this.assignValueToState} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>password</Form.Label>
                            <input name="password" value={this.state.password} type="password" placeholder="Enter password" onChange={this.assignValueToState} />
                        </Form.Group>
                        <button className="primary" type="submit" onClick={this.register}><Link to={{
                            pathname: "/user/home",
                            state: { "userId": this.state.userId + 1 }
                        }}>Register</Link></button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default SignIn;
