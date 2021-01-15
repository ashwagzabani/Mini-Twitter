import React, { Component } from 'react';
import {
    Form,
    InputGroup,
    FormControl,
    Col,
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
            alertValue: '',
            valid: true,
            feedback: ''
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
        // const getTwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));

        // if (this.state.userId <= (getTwitterDB.length + 1)) {
        //     this.setState({
        //         userId: getTwitterDB.length + 1
        //     })
        // }
        // if (fieldName !== 'password') {
        //     this.validation(fieldName, event.target.value);
        // }
    }

    signIn = (e) => {
        e.preventDefault();
        this.validation();
        // if (this.state.userName === '' || this.state.password === '') {
        //     console.log("please fill the input required");
        // } else {
        //     // console.log("you are not register");
        //     // //get Twitter Db from local storage

        //     if (localStorage.getItem('TwitterDB') == '') {
        //         //the TwitterDb is empty
        //         //alert => your are not registerd
        //         console.log("you are not register");
        //     } else {
        //         console.log("you are register");
        //         const getTwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));
        //         getTwitterDB.map(element => {
        //             if (element.userName === this.state.userName) {
        //                 console.log("step check userName ==> pass");
        //                 if (element.password === this.state.password) {
        //                     console.log("step check password ==> pass");
        //                     parseInt(localStorage.setItem("userLoggedInId", element.id))
        //                     return this.props.history.push("/user/home")
        //                 } else {
        //                     console.log("Your password is error ");
        //                     this.setState({ alert: "Your password is error " })
        //                     this.alertMessage()
        //                 }
        //             } else {
        //                 console.log("Your User Name is error or you are not register");
        //             }
        //         })
        //     }
        // }
    }

    validation = () => {
        if (this.state.userName === '' || this.state.password === '') {
            console.log("please fill the input required");
        } else {
            // console.log("you are not register");
            // //get Twitter Db from local storage

            if (localStorage.getItem('TwitterDB') == '') {
                //the TwitterDb is empty
                //alert => your are not registerd
                console.log("you are not register");
            } else {
                // console.log("you are register");
                const getTwitterDB = JSON.parse(localStorage.getItem('TwitterDB'));
                getTwitterDB.map((element, index) => {
                    console.log(index);
                    if (element.userName == this.state.userName) {
                        console.log("step check userName ==> pass");
                        if (element.password === this.state.password) {
                            console.log("step check password ==> pass");
                            parseInt(localStorage.setItem("userLoggedInId", element.id))
                            // return this.props.history.push("/user/home")
                            return true
                        } else {
                            console.log("Your password is error ");
                            this.setState({ alert: "Your password is error " })
                            this.alertMessage()
                        }
                    } else if (element.length - 1 === index) {
                        console.log("Your User Name is error or you are not register");
                        this.setState()
                    }
                })
            }
        }
    }

    alertMessage = () => {
        // const alertValue = '';
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
        setTimeout(() => { this.setState({ alert: false }) }, 3000);

        return (
            <Alert variant='warning'>
                <p>{this.state.alertValue}</p>
            </Alert>);
    }
    render() {
        return (
            <div className='SignIn'>
                {this.state.alert ? this.alertMessage() : ''}
                <form  >
                    <Col xs={7}>
                        <fieldset>
                            <legend>Welcome Back!</legend>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl placeholder="Username" />
                            </InputGroup>

                            <Form.Group>
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" name="userName" value={this.state.userName} placeholder="Enter user name" onChange={this.assignValueToState} />
                                {/* <Form.Control.Feedback type="valid">{this.state.feedback}</Form.Control.Feedback> */}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>password</Form.Label>
                                <Form.Control name="password" value={this.state.password} type="password" placeholder="Enter password" onChange={this.assignValueToState} />
                                {this.state.password === '' ?
                                    (< Form.Text>please fill required field </Form.Text>)

                                    : this.state.password.length < 6 ?

                                        (< Form.Text>Your password must be at least 6 characters</Form.Text>) : ''}
                            </Form.Group>
                            {/* <button className="primary" type="submit" onClick={this.signIn}><Link to={{
                            pathname: "/user/home",
                            state: { "userId": this.state.userId + 1 }
                        }}>Sign In</Link></button> */}
                            <button className="primary" type="submit" onClick={this.signIn}>Sign In</button>
                        </fieldset>
                    </Col>
                </form>
            </div >
        );
    }
}

export default SignIn;
