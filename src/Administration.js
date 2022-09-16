import React, {Component} from 'react';
import './App.css';
import './index.css';
import AppNavbar from "./AppNavBar";
import Slider from "./Slider";
import AdminNavbar from "./AdminNavBar";
import AdministrationApp from "./AdministrationApp";


export default class Administration extends Component {
    render() {
        return (
            <div style = {{height:"100vh", backgroundColor: "rgba(17,15,17,1.0)"}}>
                <AdministrationApp/>
                <AppNavbar/>
            </div>

        );
    }
}

