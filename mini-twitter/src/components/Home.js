import React, { Component } from 'react';
import TweetList from './Tweet-list';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                {/*home page*/}
                <TweetList />
            </div>
        );
    }
}

export default Home;
