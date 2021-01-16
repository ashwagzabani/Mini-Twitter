import React, { Component } from 'react';
import TwitterDB from '../TwitterDB'
import '../comonents-style/Tweet-row.css'
import { Card } from 'react-bootstrap'

class TweetRow extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     displayName: 'ashwag',
        //     tweets: []
        // };
        this.handleFavesClick = this.handleFavesClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }
    handleFavesClick = () => {
        console.log("fave icon clicked");
        this.props.isFaveToggle(this.props.tweetId)
    }

    handleDeleteClick = () => {
        console.log("delee icon clicked");
        this.props.handleDeleteClick(this.props.tweetId)
    }

    componentDidUpdate() {

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
                                <i className="fa fa-edit" onClick={this.handleDeleteClick}></i>
                                <i className="fa fa-trash" onClick={this.handleDeleteClick}></i>
                            </span>
                        </footer>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default TweetRow;
