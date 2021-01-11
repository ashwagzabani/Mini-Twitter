import React, { Component } from 'react';
import TweetList from './Tweet-list';

class FavesTweets extends Component {
    render() {
        return (
            <div className="FavesTweets">
                <TweetList listedTweets='favesTweets' />
            </div>
        );
    }
}

export default FavesTweets;
