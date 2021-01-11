import React, { Component } from 'react';
import TweetRow from './Tweet-row';

class TweetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            userName: '',
            favesTweets: [],
            tweet1: [],
            listedTweets: this.props.listedTweets
        }
    }
    componentDidMount() {
        const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));
        this.setState({
            displayName: getUserDetails[0].displayName,
            userName: getUserDetails[0].userName,
            favesTweets: getUserDetails[0].favesTweets,
            tweet1: getUserDetails[0].tweets.tweet
        });
    }

    render() {
        const tweets = this.state.tweet1.map((element, index) => {
            console.log(element.content);
            return (<TweetRow userName={this.state.userName} tweetId={index} tweetContent={element.content} />
            )
        })
        // //the faves tweet saved by id of tweet so, fisrt: we need to get faves tweet id then get these tweet by id
        const favesTweet = this.state.favesTweets.map((favesTweetId, index) => {
            let getTweet = this.state.tweet1[favesTweetId - 1];
            // console.log(this.state.tweet1[favesTweetId - 1]);

            return (<TweetRow userName={this.state.userName} tweetId={index} tweetContent={getTweet.content} />
            )

        });



        return (
            // {this.state.tweet1.forEach(element => {
            //     console.log(element.content);
            // })}
            <div className="TweetList">
                {/* <TweetRow userName={this.state.userName} tweetId={1} tweetContent={this.state.tweet} /> */}
                {this.state.listedTweets === 'all' ? tweets : favesTweet}
                {/* {tweets} */}
                {/**<FavesTweets />*/}
                {/* {favesTweet} */}
            </div>
        );
    }
}

export default TweetList;
