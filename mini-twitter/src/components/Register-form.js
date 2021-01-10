import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class RegisterForm extends Component {
    render() {
        return (
            <div className="RegisterForm">
                <form method="post">
                    <fieldset>
                        <legend>User Information</legend>
                        <Form.Group>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter user name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter display name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Button variant="primary">Register</Button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default RegisterForm;
