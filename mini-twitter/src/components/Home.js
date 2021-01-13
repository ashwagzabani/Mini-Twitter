import React, { Component } from 'react';
import TweetList from './Tweet-list';
import '../comonents-style/Home.css'
import NewTweet from './NewTweet';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // props.history.location.state.userId
            userLoggedInId: parseInt(localStorage.getItem('userLoggedInId')),
            showComponent: false,
            handleClicked: false,
            userLoggedInDetails: {},
            newTweetContent: ''
        }

        this.getTheNewTweetContent = this.getTheNewTweetContent.bind(this)
    }

    getUserLoggedInDetails = () => {
        // newTweetContent
        const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));
        const userLoggedInId = parseInt(localStorage.getItem('userLoggedInId'));
        this.setState({
            userLoggedInDetails: getUserDetails[userLoggedInId - 1]
        });
    }
    handleAddClicked = () => {
        // console.log("add icon clicked");
        this.setState({
            showComponent: true,
            handleClicked: true
        });
        // console.log("show compnent state value :", this.state.showComponent);
        // const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));
        // const currentTweets = this.state.userLoggedInDetails.tweets.tweet.slice();

        // console.log(currentTweets.length);
        // console.log(newTweetComponent);
        // // const newTweet = {
        //     id: currentTweets.length + 1,
        //     content: newTweetComponent
        // };
        // currentTweets.unshift(newTweet);
        // getUserDetails[this.state.userLoggedInDetails - 1].tweets.tweet = currentTweets;
        // localStorage.setItem('TwitterDB', JSON.stringify(getUserDetails));
    }

    insertNewTweet = (newTweetComponent) => {
        const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));
        const indexOfUserId = this.state.userLoggedInId - 1;
        const currentTweets = getUserDetails[indexOfUserId].tweets.tweet;
        console.log(currentTweets.length);
        console.log(newTweetComponent);
        const newTweet = {
            id: currentTweets.length + 1,
            content: newTweetComponent
        };
        console.log(indexOfUserId);
        // console.log(getUserDetails[indexOfUserId].tweets.tweet);
        currentTweets.unshift(newTweet);
        getUserDetails[indexOfUserId].tweets.tweet = currentTweets;
        localStorage.setItem('TwitterDB', JSON.stringify(getUserDetails));
        this.setState({
            userLoggedInDetails: getUserDetails[indexOfUserId]
        });
    }

    /**
     * addnewTweetToDb() {
        const getUserDetails = JSON.parse(localStorage.getItem('TwitterDB'));
        const userLoggedInId = parseInt(localStorage.getItem("userLoggedInId")) - 1; //parseInt(localStorage.getItem('userLoggedInId'))
        const currentTweets = this.state.tweet1.slice();

        const newTweet = {
            id: this.state.tweet1.length + 1,
            content: this.state.newTweet
        };
        currentTweets.unshift(newTweet);
        getUserDetails[userLoggedInId].tweets.tweet = currentTweets;
        localStorage.setItem('TwitterDB', JSON.stringify(getUserDetails));
        this.setState({
            tweet1: currentTweets,
            newTweet: ''
        });
        console.log("done add");
    }
     */
    handleShow = () => {
        this.setState({
            showComponent: false,
            handleClicked: false
        });
        // console.log("handleShowModalToggle value :", this.state.showComponent);
    }

    getTheNewTweetContent = (newTweetContent) => {
        this.setState({ newTweetContent: newTweetContent })

    }

    componentWillMount() {
        this.getUserLoggedInDetails();

    }

    render() {
        console.log("helooe");
        console.log(this.props.listedTweets);
        return (
            <div className="Home">
                {/*home page*/}
                <TweetList getUserDetails={() => this.getUserLoggedInDetails()} user={this.state.userLoggedInDetails} listedTweets={this.props.listedTweets} newTweetContent={this.state.newTweetContent} />
                <span className="addIcon" onClick={() => this.handleAddClicked()} ><i className="fa fa-plus-circle"></i></span>
                {/* <NewTweet /> */}
                {this.state.handleClicked ? <NewTweet handleShow={this.handleShow} showModalStatus={this.state.handleClicked} insertNewTweet={this.insertNewTweet} /> : null}
            </div>
        );
    }
}

export default Home;
