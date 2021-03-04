import React, { Component } from 'react';
import {
    Tab,
    Tabs
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Sports from './Sports';
import HealthNews from './HealthNews';
import Technology from './Technology';
import axios from 'axios';


class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1responseData: [],
            tab2responseData: [],
            tab3responseData: []
        }
    }

    componentDidMount() {
        this.bringAxios()
    }

    bringAxios = (url, tab) => {
        const limit = 5;
        axios
            .get(`${url}=${limit}`)
            .then(response => {
                const responseData = response.data;
                console.log(tab);
                this.setState({ [tab]: responseData })
                console.log(this.state.tab2responseData);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <Router>
                <div className="Explore container">
                    <Tabs defaultActiveKey="Sports" id="uncontrolled-tab-example">
                        <Tab eventKey="Sports" title="Sports">
                            <Sports responseData={this.state.tab1responseData} callBackAxios={this.bringAxios} />
                        </Tab>
                        <Tab eventKey="HealthNews" title="Health" >
                            <HealthNews responseData={this.state.tab2responseData} callBackAxios={this.bringAxios} />
                        </Tab>
                        <Tab eventKey="Technology" title="Technology">
                            <Technology responseData={this.state.tab3responseData} callBackAxios={this.bringAxios} />
                        </Tab>
                    </Tabs>
                </div>
            </Router>
        );
    }
}

export default Explore;
