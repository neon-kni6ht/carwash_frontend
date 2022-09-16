import React, {Component} from 'react';
import './App.css';
import './index.css';
import AppNavbar from "./AppNavBar";
import SelectForm from "./SelectForm";
import WashesToEdit from "./WashesToEdit";


export default function AdministrationApp(props){
        return (
            <div style = {{height:"100vh", backgroundColor: "rgba(17,15,17,1.0)"}}>
                <WashesToEdit/>
            </div>

        );
}

