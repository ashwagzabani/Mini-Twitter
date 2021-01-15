import React, { Component } from 'react';
import {
    Form,
    Alert,
    Button,
    Card
} from 'react-bootstrap'

import {
    Link,
    Redirect,
    Route
} from "react-router-dom";
import Home from './Home';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TwitterDB: '',
            userId: 0,
            userName: '',
            displayName: '',
            email: '',
            password: '',
            alertValue: '',
            alert: false

        }
        this.assignValueToState = this.assignValueToState.bind(this);

    }

    register = (e) => {
        e.preventDefault();
        //call validation method 
        //if validtion ir true => redirect to user home page
        this.validation();

        console.log(this.state.TwitterDB);
    }

    getNewUser = (id) => {
        let newUser = {};
        return newUser = {
            "id": id,
            "userName": this.state.userName,
            "displayName": this.state.displayName,
            "email": this.state.email,
            "password": this.state.password,
            "tweets": {
                "tweet": [
                    {
                        "id": 1,
                        "content": "Hello, this my fisrt tweet",
                        "send_time": "2021-01-10 10:00:00 AM"
                    },
                    {
                        "id": 2,
                        "content": "Good morning",
                        "send_time": "2021-01-10 10:20:00 AM"
                    },
                    {
                        "id": 3,
                        "content": "Good afternoon",
                        "send_time": "2021-01-10 10:20:00 AM"
                    },
                    {
                        "id": 4,
                        "content": "hello",
                        "send_time": "2021-01-10 10:20:00 AM"
                    },
                    {
                        "id": 5,
                        "content": "TEST1",
                        "send_time": "2021-01-10 10:20:00 AM"
                    },
                    {
                        "id": 6,
                        "content": "test2",
                        "send_time": "2021-01-10 10:20:00 AM"
                    },
                    {
                        "id": 7,
                        "content": "ashwag",
                        "send_time": "2021-01-10 10:20:00 AM"
                    },
                    {
                        "id": 8,
                        "content": "SEI-14",
                        "send_time": "2021-01-10 10:20:00 AM"
                    },
                    {
                        "id": 9,
                        "content": "today",
                        "send_time": "2021-01-10 10:20:00 AM"
                    },
                    {
                        "id": 10,
                        "content": "today",
                        "send_time": "2021-01-10 10:20:00 AM"
                    }
                ]
            },
            "favesTweets": [],
            "intersetedTopics": [],
            "followers": [],
            "log_in": false
        }
    }

    validation = () => {
        if (this.state.userName === '' || this.state.displayName === '' || this.state.email === '' || (this.state.password !== '' && this.state.password.length < 6)) {
            console.log("please fill the input required");
            //alert error
        } else {

            if (localStorage.getItem('TwitterDB') == '') {
                //the TwitterDb is empty,so there is no users to check
                let arrOfObject = [];
                let userId = 1;
                const newUser = this.getNewUser(userId);
                localStorage.setItem('userLoggedInId', userId)
                arrOfObject.push(newUser);
                console.log(arrOfObject);
                localStorage.setItem('TwitterDB', JSON.stringify(arrOfObject))
                this.props.history.push("/user/home")

            } else {
                // nedd check if the userName or Email already exsist
                const getTwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));
                getTwitterDB.map((element, index) => {

                    if (((getTwitterDB.length - 1) === index) && (element.userName !== this.state.userName) && (element.email !== this.state.email)) {
                        console.log("passed");
                        const getTwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));
                        let userId = getTwitterDB.length + 1;
                        localStorage.setItem('userLoggedInId', userId)
                        const newUser = this.getNewUser(userId)
                        this.setState({ userId })
                        getTwitterDB.push(newUser);
                        console.log(getTwitterDB);
                        localStorage.setItem('TwitterDB', JSON.stringify(getTwitterDB));
                        this.props.history.push("/user/home")

                    } else {
                        if (element.userName === this.state.userName) {
                            console.log("the user Name already exsist");
                            //alert error
                            this.alertMessage();
                            this.setState({ alert: true, alertValue: 'userName' })
                            if (element.email === this.state.email) {
                                console.log("the email already exsist");
                                //alert error
                                this.alertMessage();
                                this.setState({ alert: true, alertValue: 'userName & email' })

                            }

                        } else {
                            console.log("the email already exsist");
                            //alert error
                            this.alertMessage();
                            this.setState({ alert: true, alertValue: 'email' })

                        }
                    }

                })
            }
        }
    }

    assignValueToState = (event) => {
        let fieldName = event.target.name;

        this.setState({
            [fieldName]: event.target.value
        })
        const getTwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));

    }

    alertMessage = () => {
        console.log(this.state.alertValue);
        let alertValue = '';
        if (this.state.alertValue === 'userName') {
            alertValue = 'The user name is already used';
        } else if (this.state.alertValue === 'email') {
            alertValue = 'The email is already registered';
        } else if (this.state.alertValue === 'userName & email') {
            alertValue = 'The user name and the email are already registered';
        }
        console.log(alertValue);
        setTimeout(() => { this.setState({ alert: false, alertValue: '' }) }, 3000);

        return (
            <Alert variant='warning'>
                {alertValue}
            </Alert>);
    }

    render() {
        return (
            <Card className="RegisterForm" >
                <form>
                    <fieldset>
                        <Card.Header><h3>User Information</h3></Card.Header>
                        <Card.Body>
                            {this.state.alert ? this.alertMessage() : ''}
                            <Form.Group>
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" name="userName" value={this.state.userName} placeholder="Enter user name" onChange={this.assignValueToState} />
                                {this.state.userName === '' ?
                                    (< Form.Text>please fill required field </Form.Text>) : ''}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Display Name</Form.Label>
                                <Form.Control type="text" name="displayName" value={this.state.displayName} placeholder="Enter display name" onChange={this.assignValueToState} />
                                {this.state.displayName === '' ?
                                    (< Form.Text>please fill required field </Form.Text>) : ''}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" value={this.state.email} placeholder="Enter email" onChange={this.assignValueToState} />
                                {this.state.email === '' ?
                                    (< Form.Text>please fill required field </Form.Text>) : ''}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>password</Form.Label>
                                <Form.Control name="password" value={this.state.password} type="password" placeholder="Enter password" onChange={this.assignValueToState} />
                                {this.state.password === '' ?
                                    (< Form.Text>please fill required field </Form.Text>)

                                    : this.state.password.length < 6 ?

                                        (< Form.Text>Your password must be at least 6 characters</Form.Text>) : ''}

                            </Form.Group>
                            <Button className="primary" type="submit" onClick={this.register}>Register</Button>
                        </Card.Body>
                    </fieldset>
                </form>
            </Card>
        );
    }
}

export default RegisterForm;
