import React, { Component } from 'react';
import TweetList from './Tweet-list';
import '../comonents-style/Home.css'
import NewTweet from './NewTweet';
import { Redirect, Route } from 'react-router-dom';

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
        this.insertNewTweet = this.insertNewTweet.bind(this)
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
        // window.location.reload();
        this.setState({
            userLoggedInDetails: getUserDetails[indexOfUserId]
        });

    }

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

    handleSignOutClicked = () => {
        // console.log(this.props.handleOptionClicked);
        if (this.props.handleOptionClicked === 'signOutClicked') {
            console.log('hello');
            // this.props.history.push("/");
            // console.log(this.props.history);
            return <Route path="/user/home" to="/" />

        }
    }

    render() {
        const numOfTweets = this.state.userLoggedInDetails.tweets.tweet.length;
        const style = (numOfTweets === 0) ? 'emptyList' : numOfTweets === 1 ? "oneTweet" : numOfTweets === 2 ? 'twoTweet' : '';

        this.handleSignOutClicked();
        return (
            <div className="Home">
                {parseInt(localStorage.getItem("userLoggedInId")) < 0 ? this.props.history.push("/") : (
                    <>
                        <TweetList getUserDetails={() => this.getUserLoggedInDetails()} user={this.state.userLoggedInDetails} listedTweets={this.props.listedTweets} handleOptionClicked={this.props.handleOptionClicked} />
                        {/* {this.props.tweets} */}
                        {this.props.listedTweets === 'all' ? <span className={"addIcon " + style} onClick={() => this.handleAddClicked()} ><i className="fa fa-plus-circle"></i></span> : ''}
                        {/* <NewTweet /> */}
                        {this.state.handleClicked ? <NewTweet handleShow={this.handleShow} showModalStatus={this.state.handleClicked} insertNewTweet={this.insertNewTweet} /> : null}
                    </>
                )}
                {/*home page*/}

            </div>
        );
    }
}

export default Home;
