import axios from 'axios';
import React, { Component } from 'react';
import AxiosContentRow from './AxiosContentRow';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseData: []
        }
    }
    componentDidMount() {
        //http://api.mediastack.com/v1/news?access_key=ddce94e898a6f1e3b3ebad3ef09516c2&categories=sports
        // this.props.callBackAxios('https://ghibliapi.herokuapp.com/films/?limit');
        this.props.callBackAxios('http://api.mediastack.com/v1/news?access_key=ddce94e898a6f1e3b3ebad3ef09516c2&categories=science&languages=en&limit', 'tab2responseData');
        // this.setState({ responseData: this.props.responseData })
        // this.bringAxios();
    }
    // bringAxios = () => {
    //     const limit = 5;
    //     axios
    //         .get(`http://api.mediastack.com/v1/news?access_key=ddce94e898a6f1e3b3ebad3ef09516c2&categories=science&languages=en&limit=${limit}`)
    //         .then(response => {
    //             const responseData = response.data.data;
    //             this.setState({ responseData })
    //             // setResponseFilmsData(res, limit);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }
    /**
     * http://api.mediastack.com/v1/news?access_key=ddce94e898a6f1e3b3ebad3ef09516c2&categories=sports&limit=5&languages=en
     */
    render() {
        // this.props.callBackAxios('http://api.mediastack.com/v1/news?access_key=ddce94e898a6f1e3b3ebad3ef09516c2&categories=science&languages=en&limit');
        // console.log(this.props.responseData.length);
        console.log(this.props.responseData);
        // const a = this.props.responseData.data;
        // console.log(a[0]);
        // this.bringAxios();
        let getQuetList = '';
        if (this.props.responseData.length !== 0) {
            getQuetList = this.props.responseData.data.map(element => {
                console.log(element.title);
                return (<AxiosContentRow title={element.title} imgUrl={element.image} />);
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

export default News;
