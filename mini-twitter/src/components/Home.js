import React, { Component } from 'react';
import TweetList from './Tweet-list';
import '../comonents-style/Home.css'
import NewTweet from './NewTweet';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showComponent: false,
            handleClicked: false
        }

        // this.handleAddClicked = this.handleAddClicked.bind(this)
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
    render() {
        return (
            <div className="Home">
                {/*home page*/}
                <TweetList listedTweets='all' />
                <span className="addIcon" onClick={() => this.handleAddClicked()}><i className="fa fa-plus-circle"></i></span>
                {/* <NewTweet /> */}
                {this.state.handleClicked ? <NewTweet handleShow={this.handleShow} showModalStatus={this.state.handleClicked} /> : null}
            </div>
        );
    }
}

export default Home;
