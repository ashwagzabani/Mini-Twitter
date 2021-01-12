import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

class NewTweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: props.showModalStatus
        }
        // this.handleClose = this.handleClose.bind(this);

    }

    // componentDidMount() {
    //     this.setState({ show: this.props.showModalStatus });
    // }

    handleClose = () => {
        this.props.handleShow();
        // this.setState({ show: false });
        // console.log("handle show inside handleClose:", this.state.show);
    }

    render() {
        console.log("handle show:", this.props.showModalStatus);
        return (
            <div className="NewTweet">
                {/* <Button variant="primary" onClick={this.handleShow}>
                    Launch demo modal
                </Button> */}

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton >
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
                hello
                {/* hello + {this.state.show} */}
            </div>
        );
    }
}

export default NewTweet;
