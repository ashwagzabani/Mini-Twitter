import React, { Component } from 'react';
import TwitterDB from '../TwitterDB'
import '../comonents-style/TweetRow.css'
class TweetRow extends Component {
    render() {
        return (
            <div className="TweetRow">
                <div className="Tweet">
                    <div className="userDetails">{TwitterDB.users[0].displayName}</div>
                    <div className="container">{TwitterDB.users[0].tweets.tweet[0].content}</div>
                    <div className="optionsIcon">
                        <span>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-trash"></i>
                        </span>
                    </div>
                </div>
                <div className="Tweet">
                    <div className="userDetails">{TwitterDB.users[0].displayName}</div>
                    <div className="container">{TwitterDB.users[0].tweets.tweet[1].content}</div>
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
