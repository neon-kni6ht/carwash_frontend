import React, {Component} from 'react';

import {
    Col,

    Nav,

    NavItem,
    NavLink, Row, TabContent, TabPane,

} from "reactstrap";
import classnames from "classnames";
import SingleWashReport from "./SingleWashReport";
import AllWashesReport from "./AllWashesReport";
import WashesToEdit from "./WashesToEdit";
import UsersToEdit from "./UsersToEdit";
import axios from "axios";
import Cookies from "js-cookie";
import {saveCookie, setAuthToken} from "./SignInForm";



export default class AdministrationForm extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
        this.getUsers();

    }

    getUsers() {
        let cookie = Cookies.get('access_token')
        let token = JSON.parse(cookie).token
        if (token) {
            axios.defaults.headers.common["Authorization"] = `${token}`;
            //console.log(axios.defaults.headers.common)
        } else
            delete axios.defaults.headers.common["Authorization"];

        let users;

        axios.get("http://localhost:8083/user-service/api/admin/getAllCarWashUsers")
            .then(response => {
                //get token from response
                console.log(response.data)
                if (response.data.resultCode < 0)
                {
                    alert(response.data.resultComment)

                }
                else
                    this.setState({users : response.data.carWashUserDtoList})
                //redirect user to home page
                //   window.location.href = '/'
            })
            .catch(err => console.log(err))

    };


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,

            });
        }
    }

    render() {
        console.log(this.state.users)

        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '1'})}
                                 onClick={() => {
                                     this.toggle('1');
                                 }}>
                            Автомойки
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '2'})}
                                 onClick={() => {
                                     this.toggle('2');
                                 }}>Пользователи</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <WashesToEdit/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <UsersToEdit users={this.state.users}/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }

}