import React, { Component } from 'react';
import AxiosContentRow from './AxiosContentRow';

class Sports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseData: []
        }
    }
    componentDidMount() {
        //http://api.mediastack.com/v1/news?access_key=ddce94e898a6f1e3b3ebad3ef09516c2&categories=sports
        // this.props.callBackAxios('https://ghibliapi.herokuapp.com/films/?limit');
        this.props.callBackAxios('https://newsapi.org/v2/top-headlines?country=sa&apiKey=6d73526b0ae34c5d9b8d1d9b7ba6c9da&category=sports&pageSize', 'tab1responseData');
        // this.setState({ responseData: this.props.responseData })
        // this.bringAxios();
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

export default Sports;
