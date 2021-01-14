import axios from 'axios';
import React, { Component } from 'react';
import AxiosContentRow from './AxiosContentRow';

class News extends Component {
    constructor() {
        super();
        this.state = {
            responseData: ''
        }
    }
    componentDidMount() {
        //http://api.mediastack.com/v1/news?access_key=ddce94e898a6f1e3b3ebad3ef09516c2&categories=sports
        // this.props.callBackAxios('https://ghibliapi.herokuapp.com/films/?limit');
        // this.props.callBackAxios('http://api.mediastack.com/v1/news?access_key=ddce94e898a6f1e3b3ebad3ef09516c2&categories=sports/?limit');
        this.bringAxios();
    }
    bringAxios = () => {
        const limit = 5;
        axios
            .get(`http://api.mediastack.com/v1/news?access_key=ddce94e898a6f1e3b3ebad3ef09516c2&categories=science&languages=en&limit=${limit}`)
            .then(response => {
                const responseData = response.data.data;
                this.setState({ responseData })
                // setResponseFilmsData(res, limit);
            })
            .catch(error => {
                console.log(error);
            });
    }/**
     * http://api.mediastack.com/v1/news?access_key=ddce94e898a6f1e3b3ebad3ef09516c2&categories=sports&limit=5&languages=en
     */
    render() {
        console.log(this.state.responseData);
        // this.bringAxios();
        // const getQuetList = this.state.responseData["data"].map(element => {
        //     console.log(element.title);
        //     // return (<AxiosContentRow quetContent={element.description} author={element.director} />);
        // })
        return (
            <div className="News">
                {/* {getQuetList} */}
            </div>
        );
    }
}

export default News;
