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
    constructor() {
        super();
        this.state = {
            TwitterDB: '',
            userId: 0,
            userName: '',
            displayName: '',
            email: '',
            password: '',
            alert: false
        }
    }

    // componentWillUnmount(){
    //     //get twitterDb from localStorage 

    // }

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
        if (fieldName !== 'password') {
            this.validation(fieldName, event.target.value);
        }
    }

    signIn = (e) => {
        e.preventDefault();
        // console.log("you are not register");
        // //get Twitter Db from local storage
        if (localStorage.getItem('TwitterDB') == '') {
            //the TwitterDb is empty
            //alert => your are not registerd
            console.log("you are not register");
        } else {
            console.log("you are register");
        }
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
    }

    alertMessage = (key) => {
        // let alertValue = '';
        // if (key === 'userName') {
        //     alertValue = 'The user name already used';
        // } else if (key === 'email') {
        //     alertValue = 'The email already registered';
        // }
        // else if (key === 'password') {
        //     if (this.state.password.length < 6) {
        //         alertValue = 'The password must be less than 6 digit';
        //     }
        // }
        // return (
        //     <Alert variant='warning'>
        //         {alertValue}
        //     </Alert>);
    }
    render() {
        return (
            <div className='SignIn'>
                <form>
                    <fieldset>
                        <legend>Welcome Back!</legend>
                        <Form.Group>
                            <Form.Label>User Name</Form.Label>
                            <input type="text" name="userName" value={this.state.userName} placeholder="Enter user name" onChange={this.assignValueToState} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>password</Form.Label>
                            <input name="password" value={this.state.password} type="password" placeholder="Enter password" onChange={this.assignValueToState} />
                        </Form.Group>
                        {/* <button className="primary" type="submit" onClick={this.signIn}><Link to={{
                            pathname: "/user/home",
                            state: { "userId": this.state.userId + 1 }
                        }}>Sign In</Link></button> */}
                        <button className="primary" type="submit" onClick={this.signIn}>Sign In</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default SignIn;
