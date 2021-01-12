import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

class NewTweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: props.showModalStatus,
            newTweetContent: ''
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
        let newTweetContent = event.target.value;
        this.setState({ newTweetContent })
        // console.log("tweet content:", this.state.tweetContent);
    }

    getTweetContent = () => {
        this.props.getNewTweet(this.state.newTweetContent);
        this.handleClose();
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
                        <Modal.Title>Write New Tweet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" name="newTweet" value={this.state.newTweetContent} placeholder="Write here" onChange={this.assignValueToState} />
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
                hello
                {/* hello + {this.state.show} */}
            </div>
        );
    }
}

export default NewTweet;
