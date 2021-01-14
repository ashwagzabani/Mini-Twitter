import React, { Component } from 'react';
import AxiosContentRow from './AxiosContentRow';

class Quets extends Component {

    componentDidMount() {
        // this.props.callBackAxios('https://ghibliapi.herokuapp.com/films/?limit');
    }
    render() {
        // const getQuetList = this.props.responseData.map(element => {
        //     console.log(element.title);
        //     return (<AxiosContentRow quetContent={element.description} author={element.director} />);
        // })
        // console.log(this.state.quetsList);
        return (
            <div className="Quets">
                {/* {getQuetList} */}
            </div>
        );
    }
}

export default Quets;
