import React, {Component} from 'react';
import './App.css';
import './index.css';
import AppNavbar from "./AppNavBar";
import SelectForm from "./SelectForm";


export default function Select(props){
        return (
            <div style = {{height:"100vh", backgroundColor: "rgba(17,15,17,1.0)"}}>
                <SelectForm goal={props.goal}/>
                <AppNavbar/>
            </div>

        );
}

