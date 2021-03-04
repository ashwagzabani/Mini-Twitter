import React, { Component } from 'react';
import AxiosContentRow from './AxiosContentRow';

class HealthNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseData: []
        }
    }
    componentDidMount() {
        this.props.callBackAxios('https://newsapi.org/v2/top-headlines?country=sa&apiKey=6d73526b0ae34c5d9b8d1d9b7ba6c9da&category=health&pageSize', 'tab2responseData');

    }

    render() {
        console.log(this.props.responseData);
        let getQuetList = '';
        if (this.props.responseData.length !== 0) {
            getQuetList = this.props.responseData.articles.map(element => {
                console.log(element.title);
                return (<AxiosContentRow title={element.title} imgUrl={element.urlToImage} />);
            })
            console.log("nooooo");
        }
        return (
            <div className="News">
                {getQuetList}
            </div>
        );
    }
}

export default HealthNews;
