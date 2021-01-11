import React, { Component } from 'react';
import TweetRow from './Tweet-row';

class TweetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            userName: '',
            tweets: []
        }
    }
    componentDidMount() {
        const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));
        this.setState({
            displayName: getUserDetails[0].displayName,
            userName: getUserDetails[0].userName,
            tweet: getUserDetails[0].tweets.tweet[0].content
        });
    }
    render() {
        console.log(this.state.tweet);
        return (
            <div className="TweetList">
                <TweetRow userName={this.state.userName} tweetId={1} tweetContent={this.state.tweet} />
            </div>
        );
    }
}

export default TweetList;
