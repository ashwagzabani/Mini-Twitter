import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

class NewTweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: props.showModalStatus,
            newContent: props.currentTweet
        }
        this.assignValueToState = this.assignValueToState.bind(this);

    }


    handleClose = () => {
        this.props.handleShow();
    }

    assignValueToState = (event) => {
        let newContent = event.target.value;
        this.setState({ newContent })
    }

    getTweetContent = () => {
        if (this.state.newContent === '') {
            //alert 
        } else {
            this.props.insertNewTweetContent(this.state.newContent);
            this.handleClose();
        }
    }

    render() {
        console.log("handle show:", this.props.showModalStatus);
        return (
            <div className="NewTweet">

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton >
                        <Modal.Title>Edit Your Tweet Content</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control type="text" name="newTweet" value={this.state.newContent} onChange={this.assignValueToState} />
                        {this.state.newContent === '' ?
                            (< Form.Text>please fill required field </Form.Text>) : ''}
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="primary" onClick={this.getTweetContent}>
                            Add new Tweet
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default NewTweet;
