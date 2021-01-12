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
            newTweetContent: ''
        }

        // this.getTheNewTweetContent = this.handleAddClicked.bind(this)
    }

    handleAddClicked = () => {
        // console.log("add icon clicked");
        this.setState({
            showComponent: true,
            handleClicked: true
        });
        // console.log("show compnent state value :", this.state.showComponent);
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
        // console.log(newTweetContent);
        // console.log(this.state.newTweetContent);
        // return newTweetContent;
    }

    componentDidMount() {
        // console.log(this.props);
        // console.log(this.props.history.location.state.userId);
        console.log(parseInt(localStorage.getItem('userLoggedInId')));
        // this.setState({
        //     UserLoggedInId: this.props.history.location.state.userId
        // })
        console.log(this.state.userLoggedInId);

    }
    render() {
        return (
            <div className="Home">
                {/*home page*/}
                <TweetList listedTweets='all' newTweetContent={this.state.newTweetContent} />
                <span className="addIcon" onClick={() => this.handleAddClicked()}><i className="fa fa-plus-circle"></i></span>
                {/* <NewTweet /> */}
                {this.state.handleClicked ? <NewTweet handleShow={this.handleShow} showModalStatus={this.state.handleClicked} getNewTweet={this.getTheNewTweetContent} /> : null}
            </div>
        );
    }
}

export default Home;
