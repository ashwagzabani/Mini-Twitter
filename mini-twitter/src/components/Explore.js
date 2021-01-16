import React, { Component } from 'react';
import {
    Tab,
    Tabs,
    Row,
    Col,
    Nav
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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

    // reset = (tabResponseData) => {
    //     this.setState({ responseData: [] })
    // }
    //     // onClick={() => this.bringAxios('http://api.mediastack.com/v1/news?access_key=ddce94e898a6f1e3b3ebad3ef09516c2&categories=science&languages=en&limit')}

    bringAxios = (url, tab) => {
        const limit = 5;
        axios
            .get(`${url}=${limit}`)
            .then(response => {
                const responseData = response.data;
                console.log(tab);
                this.setState({ [tab]: responseData })
                console.log(this.state.tab2responseData);
                // setResponseFilmsData(res, limit);
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
                            {/* <Route path='/expolre/Sports' render={props => <Sports {...props} responseData={this.state.responseData} callBackAxios={this.bringAxios} />} /> */}
                        </Tab>
                        <Tab eventKey="HealthNews" title="Health" >
                            <HealthNews responseData={this.state.tab2responseData} callBackAxios={this.bringAxios} />
                            {/* <Route path="/explore/news" component={News} /> */}
                        </Tab>
                        <Tab eventKey="Technology" title="Technology">
                            <Technology responseData={this.state.tab3responseData} callBackAxios={this.bringAxios} />
                            {/* <Route path="/explore/Technology" component={Technology} /> */}
                        </Tab>
                    </Tabs>
                    {/* <Tabs id="uncontrolled-tab-example" defaultActiveKey="Sports">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/expolre/Sports" eventKey="Sports" ><i className="fa fa-home"></i>{'  '}Sports</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/explore/Technology" eventKey="Technology" ><i className="fa fa-newspaper"></i>{'  '}Technology</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/explore/news" eventKey="News"><i className="fa fa-star"></i>{'  '}News</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Route path='/expolre/Sports' component={Sports} />
                            <Route path='/explore/Technology' component={Technology} />
                            <Route path='/explore/news' component={News} />
                        </Tab.Content>

                    </Tabs> */}
                </div>
            </Router>
        );
    }
}

export default Explore;
