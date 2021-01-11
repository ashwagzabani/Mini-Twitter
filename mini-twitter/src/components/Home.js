import React, { Component } from 'react';
import TweetList from './Tweet-list';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                {/*home page*/}
                <TweetList listedTweets='all' />
            </div>
        );
    }
}

export default Home;
