import React, { Component } from 'react';
import axios from 'axios';
import AxiosContentRow from './AxiosContentRow';

class Quets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quetsList: []
        }
    }

    componentDidMount() {
        const limit = 5;
        axios
            .get(`https://ghibliapi.herokuapp.com/films/?limit=${limit}`)
            .then(response => {
                const res = response.data;
                this.setState({ quetsList: res })
                // setResponseFilmsData(res, limit);
            })
            .catch(error => {
                console.log(error);
            });
        //     const getContainer = document.querySelector('.cards');
        // let i = 0;
        // while (response[i].id <= 5) {

        //     const divCard = document.createElement('div');
        //     divCard.className = 'card';

        //     const characterName = document.createElement('p');
        //     characterName.innerText = response[i].name;

        //     const image = document.createElement('img');
        //     image.setAttribute('src', response[i].image);

        //     getContainer.appendChild(divCard);
        //     divCard.appendChild(characterName);
        //     divCard.appendChild(image);
        //     i++;

        // }
    }

    render() {
        const getQuetList = this.state.quetsList.map(element => {
            console.log(element.title);
            return (<AxiosContentRow quetContent={element.description} author={element.director} />);
        })
        console.log(this.state.quetsList);
        return (
            <div className="Quets">
                {getQuetList}
            </div>
        );
    }
}

export default Quets;
