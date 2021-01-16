import React, { Component } from 'react';
import TweetRow from './Tweet-row';

class TweetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: props.user.displayName,
            userName: props.user.userName,
            favesTweets: props.user.favesTweets,
            tweets: props.user.tweets.tweet,
            listedTweets: props.listedTweets

        }

        this.handleFaveToggle = this.handleFaveToggle.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);

    }


    //I save the favestweet by tweet id so, I add favetoggle for the target favestweet  
    handleFaveToggle(tweetId) {
        //bring target tweet by id
        //check if tweet in favesTweets and get their index 
        //if it's there toggle them ? remove from favestweets : add it to favestweets
        //edit on db to push new favestweets array
        const favesTweets = this.state.favesTweets.slice();
        console.log('faves tweet in state', favesTweets);
        console.log('tweet id', tweetId);
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
        this.editFavesTweetsOnDb(favesTweets);
    }

    editFavesTweetsOnDb = (favesTweets) => {
        //get current data in db
        //set new favestweet array 
        //save the db 
        const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));
        const userId = parseInt(localStorage.getItem("userLoggedInId")) - 1;
        console.log("state: ", favesTweets);
        console.log("before edit: ", getUserDetails[userId].favesTweets);
        getUserDetails[userId].favesTweets = favesTweets;
        console.log("after edit: ", getUserDetails[userId].favesTweets);
        localStorage.setItem('TwitterDB', JSON.stringify(getUserDetails));
        // window.location.reload();
        this.setState({ favesTweets });

    }

    //to delete specific tweet - by id 
    handleDeleteClick = (tweetId) => {
        //bring target tweet by id
        //check if tweet in Tweetslist and get their index 
        //check if id store in favestweet list === there ? delete id : skip
        //delete tweets from tweet list 
        //edit on db 
        const allTweets = this.state.tweets.slice();
        // console.log("all tweets: ", allTweets);
        // console.log("target tweet id: ", tweetId);
        // const tweetIndex = allTweets.indexOf(allTweets[tweetId - 1]);
        const tweetIndex = allTweets.indexOf(this.getTweet(tweetId));
        // console.log("target tweet index: ", tweetIndex);
        // console.log("tweet index: ", tweetIndex);
        // tweetIndex > -1 ? console.log('remove', allTweets[tweetIndex].content) : console.log('not there');
        tweetIndex > -1 ? allTweets.splice(tweetIndex, 1) : console.log("object");
        // console.log(allTweets);

        // //second check if the target tweet in favesTweet
        const favesTweets = this.state.favesTweets.slice();
        const faveTweetIndex = favesTweets.indexOf((tweetId));
        // console.log(faveTweetIndex);
        // tweetIndex < 0 ? console.log("skip") : console.log("remove");
        if (tweetIndex > -1) {
            favesTweets.splice(faveTweetIndex, 1);
        }

        this.deleteTweetFromDb1(allTweets, favesTweets);
    }

    deleteTweetFromDb1 = (tweets, favesTweets) => {
        //get current data in db
        //set new favestweet array 
        //save the db 
        const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));

        //first delete tweet from alltweet list
        const userId = parseInt(localStorage.getItem("userLoggedInId")) - 1;
        // console.log("tweet list before remove: ", getUserDetails[0].tweets.tweet);
        getUserDetails[userId].tweets.tweet = tweets;
        // console.log("after edit: ", getUserDetails[0].tweets.tweet);

        // console.log("faves tweets before delete: ", getUserDetails[userId].favesTweets);
        getUserDetails[userId].favesTweets = favesTweets;
        // console.log("after faves tweets after delete: ", getUserDetails[userId].favesTweets);

        localStorage.setItem('TwitterDB', JSON.stringify(getUserDetails));
        this.setState({ favesTweets });
        // console.log("faves tweets in state: ", this.state.favesTweets);
        window.location.reload();
        this.setState({ tweets });
    }

    getTweet = (tweetId) => {
        let id = 0;
        this.state.tweets.map((element, index) => {
            // console.log(tweetId);
            // console.log(element.id);

            if (element.id === tweetId) {
                id = element;
                // console.log("yes");

            }
        });

        return id;
    }

    handleOptionClicked = () => {
        const option = this.props.handleOptionClicked;
        if (option === 'deleteAllTweetsClicked') {
            console.log(option);
            this.handleDeleteAllTweetsClicked();
        } else if (option === 'deleteAllFavesTweetsClicked') {
            console.log(option);
            this.handleDeleteAllFavesTweetsClicked();
        }
    }

    handleDeleteAllTweetsClicked = () => {
        console.log(this.props.user.tweets.tweet.length);
        if (this.props.user.tweets.tweet.length === 0) {
            //there is no tweet to delete it 
        } else {
            //get current data in db
            //delete all tweets
            const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));

            //first delete alltweet list
            const userId = parseInt(localStorage.getItem("userLoggedInId")) - 1;

            getUserDetails[userId].tweets.tweet = [];
            this.setState({ tweets: [] });

            //first delete allfavestweet list
            getUserDetails[userId].favesTweets = [];
            this.setState({ favesTweets: [] });

            localStorage.setItem('TwitterDB', JSON.stringify(getUserDetails));
            window.location.reload();
        }
    }

    handleDeleteAllFavesTweetsClicked = () => {
        console.log(this.props.user.favesTweets.length);
        if (this.props.user.favesTweets.length === 0) {
            //there is no tweet to delete it 
        } else {
            //get current data in db
            //delete all tweets
            const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));

            //first delete alltweet list
            const userId = parseInt(localStorage.getItem("userLoggedInId")) - 1;

            //first delete allfavestweet list
            getUserDetails[userId].favesTweets = [];
            this.setState({ favesTweets: [] });

            localStorage.setItem('TwitterDB', JSON.stringify(getUserDetails));
            window.location.reload();
        }
    }


    handleEditClicked = (tweetId, newContent) => {

        console.log("edit clicked" + tweetId, newContent);

        this.editTargetTweetOnDb(tweetId, newContent);
    }

    editTargetTweetOnDb = (tweetId, newContent) => {
        //get current tweet in db
        //set new ontent to current tweet  
        //save the db 

        const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));
        const userId = parseInt(localStorage.getItem("userLoggedInId")) - 1;

        getUserDetails[userId].tweets.tweet.map((element, index) => {
            if (element.id === tweetId) {
                element.content = newContent
                console.log(element);
            }
        })
        // console.log("after edit: ", getUserDetails[userId].favesTweets);
        localStorage.setItem('TwitterDB', JSON.stringify(getUserDetails));
        window.location.reload();
        // this.setState({ favesTweets });

    }

    render() {
        this.handleOptionClicked();
        const tweets = this.props.user.tweets.tweet.map((element, index) => {
            if (this.state.favesTweets.includes(element.id)) {
                return (<TweetRow userName={this.state.userName} isFaveToggle={this.handleFaveToggle} handleDeleteClick={this.handleDeleteClick} handleEditClicked={this.handleEditClicked} tweetId={element.id} tweetContent={element.content} isFave={true} />
                );
            } else {
                return (<TweetRow userName={this.state.userName} isFaveToggle={this.handleFaveToggle} handleDeleteClick={this.handleDeleteClick} handleEditClicked={this.handleEditClicked} tweetId={element.id} tweetContent={element.content} isFave={false} />);
            }
        })

        // //the faves tweet saved by id of tweet so, fisrt: we need to get faves tweet id then get these tweet by id
        const favesTweet = this.state.favesTweets.map((favesTweetId, index) => {
            // console.log(favesTweetId, ' ');
            // const getTweet = this.state.tweets[0];
            // console.log(this.getTweet(favesTweetId));
            const getTweet = this.getTweet(favesTweetId);
            // console.log(favesTweetId, ' ');
            if (getTweet !== undefined) {
                // console.log(favesTweetId);
                // console.log(' content ', getTweet.content);

                return (<TweetRow userName={this.props.user.userName} tweetId={favesTweetId} isFaveToggle={this.handleFaveToggle} handleDeleteClick={this.handleDeleteClick} tweetContent={getTweet.content} isFave={true} />
                )
            }
            return (<TweetRow userName={this.props.user.userName} tweetId={favesTweetId} isFaveToggle={this.handleFaveToggle} tweetContent={getTweet.content} isFave={true} />
            )
            // console.log(this.props.userLoggedInId);

        });
        // const favesTweet = ''

        // console.log(this.state.displayName);
        return (
            // {this.state.tweet1.forEach(element => {
            //     console.log(element.content);
            // })}
            <div className="TweetList" >
                {/* <TweetRow userName={this.state.userName} tweetId={1} tweetContent={this.state.tweet} /> */}
                { this.state.listedTweets === 'all' ?
                    this.props.user.tweets.tweet.length !== 0 ? tweets : 'There is no tweets! Start write your tweet Now' :
                    this.props.user.favesTweets.length !== 0 ? favesTweet : 'There is no Faves Tweets'
                }
                {/* {this.state.listedTweets === 'all' ? this.state.favesTweets.length < 0 ? '' : favesTweet : ''} */}

                {/* {tweets} */}
                {/**<FavesTweets />*/}
                {/* {favesTweet} */}
            </div >
        );
    }
}

export default TweetList;
