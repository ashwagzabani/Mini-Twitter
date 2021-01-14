import React, { Component } from 'react';

class AxiosContentRow extends Component {
    render() {
        return (
            <div className="AxiosContentRow">
                {this.props.imgUrl !== null ? <img src={this.props.imgUrl} /> : ''}
                <h1>{this.props.title}</h1>
                {/* <p>{" ` " + this.props.quetContent + " ` "}</p> */}
            </div>
        );
    }
}

export default AxiosContentRow;
