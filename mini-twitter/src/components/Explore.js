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
import Movies from './Movies';
import HealthNews from './HealthNews';
import Quets from './Quets';
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
                    <Tabs defaultActiveKey="Movies" id="uncontrolled-tab-example">
                        <Tab eventKey="Movies" title="Movies">
                            <Movies responseData={this.state.tab1responseData} callBackAxios={this.bringAxios} />
                            {/* <Route path='/expolre/movies' render={props => <Movies {...props} responseData={this.state.responseData} callBackAxios={this.bringAxios} />} /> */}
                        </Tab>
                        <Tab eventKey="HealthNews" title="Health" >
                            <HealthNews responseData={this.state.tab2responseData} callBackAxios={this.bringAxios} />
                            {/* <Route path="/explore/news" component={News} /> */}
                        </Tab>
                        <Tab eventKey="quets" title="Quets">
                            <Quets responseData={this.state.tab3responseData} callBackAxios={this.bringAxios} />
                            {/* <Route path="/explore/quets" component={Quets} /> */}
                        </Tab>
                    </Tabs>
                    {/* <Tabs id="uncontrolled-tab-example" defaultActiveKey="Movies">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/expolre/movies" eventKey="Movies" ><i className="fa fa-home"></i>{'  '}Movies</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/explore/quets" eventKey="Quets" ><i className="fa fa-newspaper"></i>{'  '}Quets</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/explore/news" eventKey="News"><i className="fa fa-star"></i>{'  '}News</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Route path='/expolre/movies' component={Movies} />
                            <Route path='/explore/quets' component={Quets} />
                            <Route path='/explore/news' component={News} />
                        </Tab.Content>

                    </Tabs> */}
                </div>
            </Router>
        );
    }
}

export default Explore;
