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

        this.handleFaveToggle = this.handleFaveToggle.bind(this);

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
    //I save the favestweet by tweet id so, I add favetoggle for the target favestweet  
    handleFaveToggle(tweetId) {
        //bring target tweet by id
        //check if tweet in favesTweets and get their index 
        //if it's there toggle them ? remove from favestweets : add it to favestweets
        //edit on db to push new favestweets array
        const favesTweets = this.state.favesTweets.slice();
        console.log(favesTweets);
        // console.log(tweetId);
        const tweetIndex = favesTweets.indexOf(tweetId);
        console.log("tweet index: ", tweetIndex);
        tweetIndex < 0 ? console.log('not there') : console.log('already there');
        // if (tweetIndex < 0) {
        //     faves.unshift(tweetId)
        // } else {
        //     faves.splice(tweetIndex, 1)
        // }
        tweetIndex < 0 ? favesTweets.unshift(tweetId) : favesTweets.splice(tweetIndex, 1);
        console.log("after if statment :", favesTweets);
        // this.setState({ favesTweets });
        console.log("state edit: ", this.state.favesTweets);
        // console.log(faves);
        // console.log(tweetIndex);
        // this.setState({ favesTweets: faves });
        this.editOnDb(favesTweets);
    }

    editOnDb = (favesTweets) => {
        //get current data in db
        //set new favestweet array 
        //save the db 
        const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));
        console.log("state: ", favesTweets);
        console.log("before edit: ", getUserDetails[0].favesTweets);
        getUserDetails[0].favesTweets = favesTweets;
        console.log("after edit: ", getUserDetails[0].favesTweets);
        localStorage.setItem('TwitterDB', JSON.stringify(getUserDetails));
        this.setState({ favesTweets });

    }

    render() {
        const tweets = this.state.tweet1.map((element, index) => {
            //  console.log(element.content);
            //console.log(this.state.favesTweets.includes(index));
            if (this.state.favesTweets.includes(index + 1)) {
                // console.log("include: ", this.state.favesTweets.includes(index + 1));
                // console.log("content", element.content);
                // console.log("index", index + 1);
                return (<TweetRow userName={this.state.userName} isFaveToggle={this.handleFaveToggle} tweetId={index + 1} tweetContent={element.content} isFave={true} />
                );
            } else {
                return (<TweetRow userName={this.state.userName} isFaveToggle={this.handleFaveToggle} tweetId={index + 1} tweetContent={element.content} isFave={false} />);
            }
        })
        // //the faves tweet saved by id of tweet so, fisrt: we need to get faves tweet id then get these tweet by id
        const favesTweet = this.state.favesTweets.map((favesTweetId, index) => {
            const getTweet = this.state.tweet1[favesTweetId - 1];
            console.log(getTweet);
            if (getTweet === undefined) {
                console.log("yes less than 0");
            } else {
                // console.log(favesTweetId);
                // console.log(' content ', getTweet.content);

                return (<TweetRow userName={this.state.userName} tweetId={favesTweetId} isFaveToggle={this.handleFaveToggle} tweetContent={getTweet.content} isFave={true} />
                )
            }


        });


        // console.log(this.state.displayName);
        return (
            // {this.state.tweet1.forEach(element => {
            //     console.log(element.content);
            // })}
            <div className="TweetList">
                {/* <TweetRow userName={this.state.userName} tweetId={1} tweetContent={this.state.tweet} /> */}
                {this.state.listedTweets === 'all' ? tweets : favesTweet}
                {/* {this.state.listedTweets === 'all' ? this.state.favesTweets.length < 0 ? '' : favesTweet : ''} */}

                {/* {tweets} */}
                {/**<FavesTweets />*/}
                {/* {favesTweet} */}
            </div>
        );
    }
}

export default TweetList;
