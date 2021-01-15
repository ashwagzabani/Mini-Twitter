import React, { Component } from 'react';
import {
    Form,
    Alert,
    Button
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

    userLoggedId = () => {
        if (localStorage.getItem('TwitterDB') == '') {
            this.setState({
                userId: 1

            })
        } else {
            const TwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));
            this.setState({
                userId: TwitterDB.length + 1

            })
        }

    }

    register = (e) => {
        e.preventDefault();
        //call validation method 
        //if validtion ir true => redirect to user home page
        this.validation();
        //get db from local storage
        //convert from string to json
        //check if it's empty
        //push the new user 
        //set new db to local storage and convert db from json to string
        // if (validation()) {



        // let getTwitterDB;
        // let userId;

        // if (localStorage.getItem('TwitterDB') == '') {
        //     console.log("object");
        //     let arrOfObject = [];
        //     userId = 1;
        //     const newUser = this.getNewUser(userId);
        //     localStorage.setItem('userLoggedInId', userId)
        //     // this.setState({ userId })
        //     //getTwitterDB = localStorage.getItem('TwitterDB');
        //     arrOfObject.push(newUser);
        //     // if (getTwitterDB === '') {
        //     //     console.log('object');
        //     // }
        //     // let arrOfObject = [];
        //     // arrOfObject.push(getTwitterDB);
        //     console.log(arrOfObject);
        //     localStorage.setItem('TwitterDB', JSON.stringify(arrOfObject))
        // }
        // else {
        //     getTwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));
        //     // if (getTwitterDB[0] === '') {
        //     //     getTwitterDB.shift(0);
        //     //     console.log("donw");
        //     // }
        //     //console.log(getTwitterDB.length);
        //     userId = getTwitterDB.length + 1;
        //     localStorage.setItem('userLoggedInId', userId)
        //     const newUser = this.getNewUser(userId)
        //     this.setState({ userId })
        //     getTwitterDB.push(newUser);
        //     console.log(getTwitterDB);
        //     localStorage.setItem('TwitterDB', JSON.stringify(getTwitterDB));
        // }




        // this.validation();
        // const newUser = {
        //     "id": this.state.userId + 1,
        //     "userName": this.state.userName,
        //     "displayName": this.state.displayName,
        //     "email": this.state.email,
        //     "password": this.state.password,
        //     "tweets": {
        //         "tweet": [
        //             {
        //                 "id": 1,
        //                 "content": "Hello, this my fisrt tweet",
        //                 "send_time": "2021-01-10 10:00:00 AM"
        //             },
        //             {
        //                 "id": 2,
        //                 "content": "Good morning",
        //                 "send_time": "2021-01-10 10:20:00 AM"
        //             }
        //         ]
        //     },
        //     "favesTweets": [],
        //     "intersetedTopics": [],
        //     "followers": [],
        //     "log_in": false
        // }
        // arrOfObject.push(newUser);
        // //getTwitterDB.push(newUser)
        // //store the db in local storage - stringify : to convert json to string
        // localStorage.setItem('TwitterDB', JSON.stringify(arrOfObject));
        // //to read json from local storage - 1/ get item 2/convert it from string to json
        // //let b = JSON.parse(localStorage.getItem('notes'))
        // TwitterDB.users.push(newUser)
        console.log(this.state.TwitterDB);
        // this.setState({ userId: userId })
        // this.props.history.push("/user/home")
        // return <Redirect from="/register" to="/user/home" />
        // return <Redirect from="/register" render={(props) => <Home state="Hello, " {...props} />} />
        // return <Redirect from="/register" to={{
        //     pathname: "/user/home",
        //     key: userId
        // }} />

        // />


        // }
        //this.validation();
    }

    getNewUser = (id) => {
        this.userLoggedId();
        console.log(this.state.displayName);
        console.log(this.state.userName);
        console.log(id);
        this.setState({
            userId: id
        })
        console.log(this.state.userId);
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

    // validation = (fieldName, value) => {
    //     //check if user name already used
    //     //check if email already used
    //     //check if password less than 6 digit
    //     // let key = 'id';
    //     // console.log(fieldName);
    //     // const TwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));
    //     // TwitterDB.map((element) => {
    //     //     if (element[fieldName] === value) {
    //     //         // console.log(element[fieldName]);
    //     //         console.log("problem");
    //     //         this.setState({ alert: true })
    //     //         // console.log(value);
    //     //     } else {
    //     //         this.setState({ alert: false })
    //     //     }
    //     //     //console.log(element[key]);
    //     //     // return false;

    //     //     //console.log(element);
    //     // });

    //     let key = 'id';
    //     // console.log(fieldName);
    //     const TwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));
    //     TwitterDB.map((element) => {
    //         if (element[fieldName] === value) {
    //             // console.log(element[fieldName]);
    //             console.log("problem");
    //             this.setState({ alert: true })
    //             // console.log(value);
    //         } else {
    //             this.setState({ alert: false })
    //         }
    //         //console.log(element[key]);
    //         // return false;

    //         //console.log(element);
    //     });
    // }
    /**
     *  TwitterDB: '',
                userId: 0,
                userName: '',
                displayName: '',
                email: '',
                password: '',
                alert: false
     */
    validation = () => {
        if (this.state.userName === '' || this.state.displayName === '' || this.state.email === '' || this.state.password === '') {
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

                    // console.log(element.length, index);
                    // console.log(element.email, this.state.email);

                    if ((getTwitterDB.length - 1 === index) && (element.userName !== this.state.userName) && (element.email !== this.state.email)) {
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
        // console.log(this.state.[fieldName]);
        // console.log(fieldName);


        this.setState({
            [fieldName]: event.target.value
        })
        const getTwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));

        // if (this.state.userId <= (getTwitterDB.length + 1)) {
        //     this.setState({
        //         userId: getTwitterDB.length + 1
        //     })
        // }
        // if (fieldName !== 'password') {
        //     this.validation(fieldName, event.target.value);
        // }
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
            <div className="RegisterForm" >
                <form>
                    <fieldset>
                        <legend>User Information</legend>
                        {this.state.alert ? this.alertMessage() : ''}
                        <Form.Group>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" name="userName" value={this.state.userName} placeholder="Enter user name" onChange={this.assignValueToState} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control type="text" name="displayName" value={this.state.displayName} placeholder="Enter display name" onChange={this.assignValueToState} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={this.state.email} placeholder="Enter email" onChange={this.assignValueToState} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>password</Form.Label>
                            <Form.Control name="password" value={this.state.password} type="password" placeholder="Enter password" onChange={this.assignValueToState} />
                        </Form.Group>
                        <Button className="primary" type="submit" onClick={this.register}>Register</Button>
                    </fieldset>
                </form>

            </div>
        );
    }
}

export default RegisterForm;
