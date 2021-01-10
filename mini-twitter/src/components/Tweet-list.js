import React, { Component } from 'react';
import TweetRow from './Tweet-row';

class TweetList extends Component {
    render() {
        return (
            <div className="TweetList">
                <TweetRow />
            </div>
        );
    }
}

export default TweetList;
