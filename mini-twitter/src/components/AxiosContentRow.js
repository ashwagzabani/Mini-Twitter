import React, { Component } from 'react';
import '../comonents-style/AxiosContentRow.css'
import news from '../news.png'
import { Card } from 'react-bootstrap'
class AxiosContentRow extends Component {
    render() {
        return (
            <Card className="AxiosContentRow">
                {this.props.imgUrl !== null ? <img src={this.props.imgUrl} /> : <img src={news} />}
                <p>{this.props.title}</p>
                {/* <p>{" ` " + this.props.quetContent + " ` "}</p> */}
            </Card>
        );
    }
}

export default AxiosContentRow;
