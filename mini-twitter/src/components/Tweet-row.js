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
    }



    render() {
        //this.getUserLoggedInDetails();

        // this.getUserLoggedInDetails();
        // console.log(getUserDetails[0].displayName);
        // console.log(this.state.tweets);
        // console.log(this.state.displayName);
        return (
            <div className="TweetRow">
                <div className="Tweet">
                    <div className="userDetails">{this.props.userName}</div>
                    <div className="container">{this.props.tweetContent}</div>
                    <div className="optionsIcon">
                        <span>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-trash"></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TweetRow;
