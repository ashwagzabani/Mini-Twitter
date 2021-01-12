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
        this.handleDeleteClick = this.handleDeleteClick.bind(this);

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
        // console.log("after if statment :", favesTweets);
        // this.setState({ favesTweets });
        // console.log("state edit: ", this.state.favesTweets);
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

    //to delete specific tweet - by id 
    handleDeleteClick = (tweetId) => {
        //bring target tweet by id
        //check if tweet in Tweetslist and get their index 
        //check if id store in favestweet list === there ? delete id : skip
        //delete tweets from tweet list 
        //edit on db 
        const allTweets = this.state.tweet1.slice();
        console.log("all tweets: ", allTweets);
        console.log("target tweet id: ", tweetId);
        const tweetIndex = allTweets.indexOf(allTweets[tweetId - 1]);
        console.log("target tweet index: ", tweetIndex);
        // console.log("tweet index: ", tweetIndex);
        // tweetIndex > -1 ? console.log('remove', allTweets[tweetIndex].content) : console.log('not there');
        tweetIndex > -1 ? allTweets.splice(tweetIndex, 1) : console.log("object");
        console.log(allTweets);

        // //second check if the target tweet in favesTweet
        const favesTweets = this.state.favesTweets.slice();
        const faveTweetIndex = favesTweets.indexOf(tweetId);
        tweetIndex < 0 ? console.log("skip") : console.log("remove");
        this.editOnDb1('delete', allTweets, favesTweets);
    }

    editOnDb1 = (option, tweets, favesTweets) => {
        //get current data in db
        //set new favestweet array 
        //save the db 
        const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));
        if (option === 'delete') {

            //first delete tweet from alltweet list
            const tweet1 = tweets;
            console.log("option: ", option);
            console.log("before edit: ", getUserDetails[0].tweets.tweet);
            getUserDetails[0].tweets.tweet = tweet1;
            console.log("after edit: ", getUserDetails[0].tweets.tweet);

            console.log("before edit: ", getUserDetails[0].favesTweets);
            getUserDetails[0].favesTweets = favesTweets;
            console.log("after edit: ", getUserDetails[0].favesTweets);

            localStorage.setItem('TwitterDB', JSON.stringify(getUserDetails));
            this.setState({ favesTweets });
            this.setState({ tweet1 });
        } else {
            const favesTweets = tweets;
            console.log("state: ", favesTweets);
            console.log("before edit: ", getUserDetails[0].favesTweets);
            getUserDetails[0].favesTweets = favesTweets;
            console.log("after edit: ", getUserDetails[0].favesTweets);
            localStorage.setItem('TwitterDB', JSON.stringify(getUserDetails));
            this.setState({ favesTweets });
        }


    }

    render() {
        const tweets = this.state.tweet1.map((element, index) => {
            //  console.log(element.content);
            //console.log(this.state.favesTweets.includes(index));
            if (this.state.favesTweets.includes(index + 1)) {
                // console.log("include: ", this.state.favesTweets.includes(index + 1));
                // console.log("content", element.content);
                // console.log("index", index + 1);
                return (<TweetRow userName={this.state.userName} isFaveToggle={this.handleFaveToggle} handleDeleteClick={this.handleDeleteClick} tweetId={index + 1} tweetContent={element.content} isFave={true} />
                );
            } else {
                return (<TweetRow userName={this.state.userName} isFaveToggle={this.handleFaveToggle} handleDeleteClick={this.handleDeleteClick} tweetId={index + 1} tweetContent={element.content} isFave={false} />);
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
            // return (<TweetRow userName={this.state.userName} tweetId={favesTweetId} isFaveToggle={this.handleFaveToggle} tweetContent={getTweet.content} isFave={true} />
            // )


        });


        // console.log(this.state.displayName);
        return (
            // {this.state.tweet1.forEach(element => {
            //     console.log(element.content);
            // })}
            <div className="TweetList" >
                {/* <TweetRow userName={this.state.userName} tweetId={1} tweetContent={this.state.tweet} /> */}
                { this.state.listedTweets === 'all' ? tweets : favesTweet}
                {/* {this.state.listedTweets === 'all' ? this.state.favesTweets.length < 0 ? '' : favesTweet : ''} */}

                {/* {tweets} */}
                {/**<FavesTweets />*/}
                {/* {favesTweet} */}
            </div >
        );
    }
}

export default TweetList;
