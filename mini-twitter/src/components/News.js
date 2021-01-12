import React, { Component } from 'react';
import AxiosContentRow from './AxiosContentRow';

class News extends Component {
    componentDidMount() {
        this.props.callBackAxios('https://ghibliapi.herokuapp.com/films/?limit');
    }

    render() {
        const getQuetList = this.props.responseData.map(element => {
            console.log(element.title);
            return (<AxiosContentRow quetContent={element.description} author={element.director} />);
        })
        return (
            <div className="News">
                {getQuetList}
            </div>
        );
    }
}

export default News;
