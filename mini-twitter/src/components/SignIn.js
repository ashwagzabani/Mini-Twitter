import React, { Component } from 'react';
import {
    Form,
    Alert,
    Card,
    Button
} from 'react-bootstrap'

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
            alertValue: ''
        }
    }

    /**
     * To get and store input value in state
     */
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
    }//end-assignValueToState fun.

    /**
     * When the user click on sign in button the signIn function will be call
     */
    signIn = (e) => {
        e.preventDefault();
        this.validation();
    }//end-signIn fun.

    /**
    * After clicked on sign in button the validation fun. will be call via signIn func.
    * validation func. => check if the user name and email are not exsists 
    */
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
                    if (element.userName === this.state.userName) {
                        // console.log("step check userName ==> pass");
                        if (element.password === this.state.password) {
                            // console.log("step check password ==> pass");
                            parseInt(localStorage.setItem("userLoggedInId", element.id))
                            this.props.history.push("/ashwagzabani/Project-2/user/home")
                        } else {
                            // console.log("Your password is error ");
                            this.alertMessage();
                            this.setState({ alert: true, alertValue: 'password' })
                        }
                    } else if (getTwitterDB.length - 1 === index) {
                        // console.log("Your User Name is error or you are not register");
                        this.alertMessage();
                        this.setState({ alert: true, alertValue: 'userName' })

                    }
                })
            }
        }
    }//end-validation fun.

    /**
      * the alerMessage fun. will be call via validation
      * if the user name and email are not exsist the alert message will be show
      */
    alertMessage = () => {
        console.log(this.state.alertValue);
        let alertValue = '';
        if (this.state.alertValue === 'userName') {
            alertValue = 'The user name is not exsist';
        } else if (this.state.alertValue === 'password') {
            alertValue = 'The passwrod is not correct';
        }
        // console.log(alertValue);
        setTimeout(() => { this.setState({ alert: false, alertValue: '' }) }, 3000);

        return (
            <Alert variant='warning'>
                {alertValue}
            </Alert>);
    }//end-alertMessage fun.

    render() {
        return (
            <Card className='SignIn'>
                <form>
                    <fieldset>
                        <Card.Header><h3>Welcome Back!</h3></Card.Header>
                        <Card.Body>
                            {this.state.alert ? this.alertMessage() : ''}
                            <Form.Group>
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" name="userName" value={this.state.userName} placeholder="Enter user name" onChange={this.assignValueToState} />
                                {this.state.userName === '' ?
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
                            <Button variant="primary" type="submit" onClick={this.signIn}>Sign In</Button>
                        </Card.Body>
                    </fieldset>
                </form>
            </Card >
        );
    }
}

export default SignIn;
