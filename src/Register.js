import React, {Component} from 'react';
import './App.css';
import './index.css';
import AppNavbar from "./AppNavBar";
import RegisterForm from "./RegisterForm";


export default class Register extends Component {
    render() {
        return (
            <div style = {{height:"100vh", backgroundColor: "rgba(17,15,17,1.0)"}}>
                <RegisterForm/>
                <AppNavbar/>
            </div>

        );
    }
}

