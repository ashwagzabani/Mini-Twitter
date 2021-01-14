import React, { Component } from 'react';
import '../comonents-style/AxiosContentRow.css'

class AxiosContentRow extends Component {
    render() {
        return (
            <div className="AxiosContentRow">
                {this.props.imgUrl !== null ? <img src={this.props.imgUrl} /> : ''}
                <p>{this.props.title}</p>
                {/* <p>{" ` " + this.props.quetContent + " ` "}</p> */}
            </div>
        );
    }
}

export default AxiosContentRow;
