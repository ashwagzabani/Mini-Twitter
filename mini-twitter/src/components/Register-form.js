import React, { Component } from 'react';
import { Form } from 'react-bootstrap'
import TwitterDB from '../TwitterDB'

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: TwitterDB.users.length,
            userName: '',
            displayName: '',
            email: '',
            password: ''

        }
        this.assignValueToState = this.assignValueToState.bind(this);

    }

    register = (e) => {
        e.preventDefault();
        // if (validation()) {
        const newUser = {
            "id": this.state.userId + 1,
            "userName": this.state.userName,
            "displayName": this.state.displayName,
            "email": this.state.email,
            "password": this.state.password
        }
        TwitterDB.users.push(newUser)
        console.log(newUser);
        // }
        //this.validation();
    }

    validation = () => {
        //check if user name already used
        //check if email already used
        //check if password less than 6 digit
        TwitterDB.users.map((element, index) => {
            if (element.email)
                console.log(element);

        });
        console.log(this.state.value);
        console.log(this.state.userName);

    }

    assignValueToState = (event) => {
        let fieldName = event.target.name;
        // console.log(this.state.[fieldName]);
        // console.log(fieldName);
        this.setState({
            [fieldName]: event.target.value
        })
    }
    render() {
        return (
            <div className="RegisterForm">
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
                        <button className="primary" type="submit" onClick={this.register}>Register</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default RegisterForm;
