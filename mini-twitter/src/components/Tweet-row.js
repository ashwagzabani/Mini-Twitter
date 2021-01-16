import React, { Component } from 'react';
import EditTargetTweet from './EditTargetTweet'
import '../comonents-style/Tweet-row.css'
import { Card } from 'react-bootstrap'


class TweetRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            handleEditClicked: false,
        };

        this.handleFavesClick = this.handleFavesClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)

    }
    handleFavesClick = () => {
        console.log("fave icon clicked");
        this.props.isFaveToggle(this.props.tweetId)
    }

    handleDeleteClick = () => {
        console.log("delee icon clicked");
        this.props.handleDeleteClick(this.props.tweetId)
    }


    handleEditClick = () => {
        this.setState({
            showComponent: true,
            handleEditClicked: true
        });
        console.log("edit clicked" + this.props.tweetId);

        // this.editTargetTweetOnDb(tweetId);
    }
    handleShow = () => {
        this.setState({
            showComponent: false,
            handleEditClicked: false
        });
        // console.log("handleShowModalToggle value :", this.state.showComponent);
    }

    insertNewTweet = (newContent) => {

        this.props.handleEditClicked(this.props.tweetId, newContent);

    }


    render() {
        //this.getUserLoggedInDetails();
        // this.getUserLoggedInDetails();
        // console.log(getUserDetails[0].displayName);
        // console.log(this.state.tweets);
        // console.log(this.state.displayName);
        const isFave = (this.props.isFave) ? 'fave' : '';
        // console.log("tweet : " + this.props.tweetContent + ' ' + this.props.isFave);
        return (
            <div className="TweetRow">
                {/* <div className="Tweet">
                    <div className="userDetails">{this.props.userName}</div>
                    <div className="container">{this.props.tweetContent}</div>
                    <div className="optionsIcon">
                        <span>
                            <i className={"fa fa-star " + isFave} onClick={this.handleFavesClick}></i>
                            <i className="fa fa-trash" onClick={this.handleDeleteClick}></i>
                        </span>
                    </div>
                </div> */}
                <Card className="Tweet">
                    <Card.Header >{this.props.userName}</Card.Header>
                    <Card.Body className="container">
                        <Card.Text>
                            {this.props.tweetContent}
                        </Card.Text>
                        <footer>
                            <span>
                                <i className={"fa fa-star " + isFave} onClick={this.handleFavesClick}></i>
                                <i className="fa fa-edit" onClick={() => this.handleEditClick()}></i>
                                <i className="fa fa-trash" onClick={this.handleDeleteClick}></i>
                                {this.state.handleEditClicked ? <EditTargetTweet handleShow={this.handleShow} showModalStatus={this.state.handleEditClicked} insertNewTweetContent={this.insertNewTweet} /> : null}

                            </span>
                        </footer>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default TweetRow;
