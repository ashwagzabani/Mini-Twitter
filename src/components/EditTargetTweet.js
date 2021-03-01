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

    // componentDidMount() {
    //     this.setState({ show: this.props.showModalStatus });
    // }

    handleClose = () => {
        this.props.handleShow();
        // this.setState({ show: false });
        // console.log("handle show inside handleClose:", this.state.show);
    }

    assignValueToState = (event) => {
        let newContent = event.target.value;
        this.setState({ newContent })
        // console.log("tweet content:", this.state.newContent);
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
                {/* <Button variant="primary" onClick={this.handleShow}>
                    Launch demo modal
                </Button> */}

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
                        {/* <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button> */}
                        <Button variant="primary" onClick={this.getTweetContent}>
                            Add new Tweet
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* hello + {this.state.show} */}
            </div>
        );
    }
}

export default NewTweet;
