import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

class NewTweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            setShow: false,
            show: false
        }
    }

    handleClose = () => this.setState({ setShow: false });
    handleShow = () => this.setState({ setShow: false });
    render() {
        return (
            <div className="NewTweet">
                <Button variant="primary" onClick={this.handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* hello */}
            </div>
        );
    }
}

export default NewTweet;
