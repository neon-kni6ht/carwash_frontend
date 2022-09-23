import React, {Component} from 'react';
import './App.css';
import './index.css';
import AppNavbar from "./AppNavBar";
import axios from "axios";
import Cookies from "js-cookie";
import UserOrdersForm from "./UserOrdersForm";


class UserOrders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderlist: ""
        };
        this.getOrders();

    }
    getOrders() {
        let cookie = Cookies.get('access_token')
        let userId = JSON.parse(cookie).userId;
        let myusername = JSON.parse(cookie).login;
        let orderlist;
        this.setState({myusername: myusername});

        let url = "http://localhost:8080/order/by-userId?id=" + userId;

        axios.get(url)
            .then(response => {
                orderlist = response.data;
                this.setState({orderlist: orderlist});

            })
            .catch(err => console.log(err));


    };

    render() {
        return (
            <div style = {{height:"100vh", backgroundColor: "rgba(17,15,17,1.0)"}}>
                <UserOrdersForm orderlist={this.state.orderlist}/>
                <AppNavbar/>
            </div>

        );
    }
}

export default UserOrders;