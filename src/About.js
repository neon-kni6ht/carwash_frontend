import React, {Component} from 'react';
import './App.css';
import './index.css';
import AppNavbar from "./AppNavBar";
import AboutForm from "./AboutForm";


export default function About(){
        return (
            <div style = {{height:"100vh", backgroundColor: "rgba(17,15,17,1.0)"}}>
                <AboutForm/>
                <AppNavbar/>
            </div>

        );
}

