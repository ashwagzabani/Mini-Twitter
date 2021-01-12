import React, { Component } from 'react';
import {
    Form,
    Alert
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import { Redirect } from 'react-router-dom'
import Home from './Home';


class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            displayName: '',
            email: '',
            password: '',
            alert: false,
            alertStatus: false,
            alertValue: ''

        }
        this.assignValueToState = this.assignValueToState.bind(this);

    }

    register = (e) => {
        e.preventDefault();

        //get db from local storage
        //convert from string to json
        //check if it's empty
        //push the new user 
        //set new db to local storage and convert db from json to string
        // if (validation()) {
        let getTwitterDB;
        let userId = 0;
        if (localStorage.getItem('TwitterDB') == '') {
            console.log("object");
            let arrOfObject = [];
            userId = 1;
            const newUser = this.getNewUser(userId);
            //this.setState({ userId: 1 })
            //getTwitterDB = localStorage.getItem('TwitterDB');
            arrOfObject.push(newUser);
            // if (getTwitterDB === '') {
            //     console.log('object');
            // }
            // let arrOfObject = [];
            // arrOfObject.push(getTwitterDB);
            console.log(arrOfObject);
            localStorage.setItem('TwitterDB', JSON.stringify(arrOfObject))
        }
        else {
            getTwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));
            // if (getTwitterDB[0] === '') {
            //     getTwitterDB.shift(0);
            //     console.log("donw");
            // }
            //console.log(getTwitterDB.length);
            userId = getTwitterDB.length + 1;
            const newUser = this.getNewUser(userId)
            getTwitterDB.push(newUser);
            console.log(getTwitterDB);
            localStorage.setItem('TwitterDB', JSON.stringify(getTwitterDB));
        }
        //this.validation();
        //pass user id to home page
        // <Router>
        return <Redirect from="/register" to="/user/home" />
        {/* <Route path='/home' render={(props) => <Home userLoggedInId={userId} routeProps={props} />} ></Route> */ }
        {/* </Router> */ }
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
                    }
                ]
            },
            "favesTweets": [4, 2],
            "intersetedTopics": [],
            "followers": [],
            "log_in": false
        }
    }


    validation = (fieldName, value) => {
        //check if user name already used
        //check if email already used
        //check if password less than 6 digit
        let key = 'id';
        console.log(fieldName);
        const TwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));
        TwitterDB.map((element) => {
            if (element[fieldName] === value) {
                // console.log(element[fieldName]);
                console.log("problem");
                this.setState({ alertStatus: true, alertValue: fieldName })
                console.log(fieldName, '  ', this.state.alertValue);
                // this.alertMessage(fieldName);
            } else {
                this.setState({ alertValue: '', alertStatus: false })
            }
            //console.log(element[key]);
            // return false;

            //console.log(element);
        });
    }

    assignValueToState = (event) => {
        let fieldName = event.target.name;
        // console.log(this.state.[fieldName]);
        // console.log(fieldName);


        this.setState({
            [fieldName]: event.target.value
        })
        if (fieldName !== 'password') {
            this.validation(fieldName, event.target.value);
        }
    }

    // componentDidUpdate(prevprop, prevstate) {
    //     console.log(prevstate.alertType);
    //     if (prevstate.alertType !== this.state.alertType) {
    //         this.alertMessage();
    //     }
    //     //this.alertMessage();
    //     // console.log(fieldName);
    //     // // console.log(prevstate["alertType"]);
    //     // let alertType = this.state.alertType;
    //     // if (alertType === "userName") {
    //     //     console.log("yes");
    //     //     this.setState({ alertValue: "The user name already used" })
    //     // } else if (alertType === "email") {
    //     //     this.setState({ alertValue: 'The email already registered' })
    //     // }
    //     // else if (alertType === "password") {
    //     //     if (this.state.password.length < 6) {
    //     //         this.setState({ alertValue: 'The password must be less than 6 digit' })
    //     //     }
    //     // }
    //     // console.log(this.state.alertType);
    //     // // console.log(key);
    //     // this.alertMessage();
    // }

    // componentDidUpdate() {
    //     this.alertMessage()
    // }
    // alertMessage = () => {
    //     // console.log(fieldName);
    //     // console.log(prevstate["alertType"]);
    //     console.log('alert type: ' + this.state.alertType);
    //     console.log('alert value: ' + this.state.alertValue);
    //     console.log('alert status: ' + this.state.alertStatus);
    //     let alertType = this.state.alertType;
    //     if (alertType !== '') {
    //         console.log("ok");

    //         if (alertType === "userName") {
    //             console.log("yes");
    //             this.setState({ alertValue: "The user name already used" })
    //         } else if (alertType === "email") {
    //             this.setState({ alertValue: 'The email already registered' })
    //         }
    //         // else if (fieldName === "password") {
    //         //     if (this.state.password.length < 6) {
    //         //         this.setState({ alertValue: 'The password must be less than 6 digit' })
    //         //     }
    //         // }
    //         console.log(this.state.alertType);
    //         // console.log(key);
    //         return (
    //             <Alert variant='warning'>
    //                 {this.state.alertValue}
    //             </Alert>);
    //     }


    // }

    render() {
        return (
            <div className="RegisterForm" >
                {/* {this.state.alertStatus ? this.alertMessage : ''} */}

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
                        {/* <button className="primary" type="submit" onClick={this.register}>Register</button> */}
                    </fieldset>
                </form>
                <Link to="/user/home">Register</Link>
            </div>
        );
    }
}

export default RegisterForm;
