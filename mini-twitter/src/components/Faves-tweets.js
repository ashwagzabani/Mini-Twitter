import React, { Component } from 'react';

class FavesTweets extends Component {
    render() {
        return (
            <div className="FavesTweets">
                <div className="Tweet">
                    <div className="userDetails">{this.props.userName}</div>
                    <div className="container">{this.props.tweetContent}</div>
                    <div className="optionsIcon">
                        <span>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-trash"></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FavesTweets;
