import React, { Component } from 'react';
import '../comonents-style/AxiosContentRow.css'
import news from '../news.png'
import { Card } from 'react-bootstrap'
class AxiosContentRow extends Component {
    render() {
        return (
            <div className="AxiosContentRow">
                {this.props.imgUrl !== null ? <img src={this.props.imgUrl} /> : <img src={news} />}
                <span>{this.props.title}</span>
                {/* <p>{" ` " + this.props.quetContent + " ` "}</p> */}
            </div>
        );
    }
}

export default AxiosContentRow;
