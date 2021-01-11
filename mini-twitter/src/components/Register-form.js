import React, { Component } from 'react';
import { Form } from 'react-bootstrap'
class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            displayName: '',
            email: '',
            password: ''

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
        if (localStorage.getItem('TwitterDB') == '') {
            console.log("object");
            let arrOfObject = [];
            const newUser = this.getNewUser(1);
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
            const newUser = this.getNewUser(getTwitterDB.length + 1)
            getTwitterDB.push(newUser);
            console.log(getTwitterDB);
            localStorage.setItem('TwitterDB', JSON.stringify(getTwitterDB));
        }
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
        // console.log(newUser);


        // }
        //this.validation();
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
                    }
                ]
            },
            "favesTweets": [],
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
                // console.log(value);
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
        this.validation(fieldName, event.target.value);
    }
    render() {
        return (
            <div className="RegisterForm" >
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
