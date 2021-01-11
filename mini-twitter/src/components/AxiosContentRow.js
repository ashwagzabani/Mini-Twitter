import React, { Component } from 'react';

class AxiosContentRow extends Component {
    render() {
        return (
            <div className="AxiosContentRow">
                <h1>{this.props.author}</h1>
                <p>{" ` " + this.props.quetContent + " ` "}</p>
            </div>
        );
    }
}

export default AxiosContentRow;
