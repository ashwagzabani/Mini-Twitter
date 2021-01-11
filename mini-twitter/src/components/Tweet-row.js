import React, { Component } from 'react';
import TwitterDB from '../TwitterDB'
import '../comonents-style/Tweet-row.css'

class TweetRow extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     displayName: 'ashwag',
        //     tweets: []
        // };
        this.handleFavesClick = this.handleFavesClick.bind(this)
    }
    handleFavesClick = () => {
        console.log("fave icon clicked");
        this.props.isFaveToggle(this.props.tweetId)
    }

    handleDeleteClick = () => {
        console.log("delee icon clicked");
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
        console.log("tweet : " + this.props.tweetContent + ' ' + this.props.isFave);
        return (
            <div className="TweetRow">
                <div className="Tweet">
                    <div className="userDetails">{this.props.userName}</div>
                    <div className="container">{this.props.tweetContent}</div>
                    <div className="optionsIcon">
                        <span>
                            <i className={"fa fa-star " + isFave} onClick={this.handleFavesClick}></i>
                            <i className="fa fa-trash" onClick={this.handleDeleteClick}></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TweetRow;
