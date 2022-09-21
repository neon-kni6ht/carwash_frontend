import React, {Component} from 'react';
import './App.css';
import './index.css';
import AppNavbar from "./AppNavBar";
import SelectForm from "./SelectForm";
import WashesToEdit from "./WashesToEdit";
import background from "./img/background1.jpg";
import mask from "./img/mask.jpg";
import ReportForm from "./ReportForm";
import AdministrationForm from "./AdministrationForm";


export default function AdministrationApp(props){
    return <div style={{
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${background}`,
        height:"100%",

    }}>
        <div
            style={{

                backgroundImage: `url(${mask}`,
                backgroundRepeat: 'repeat',
                width: "100%",
                height:"100%",
                opacity: 0.9,
            }}>
            <div className="d-flex text-white justify-content-center align-items-center" style={{width: "100%", height:"100%", verticalAlign:"middle", textAlign:"center"}}>
                <div className="p-5" style={{
                    height: "auto",
                    width: "60%",
                    backgroundColor:"black",
                    border: "1px solid white"
                }}>
                    <AdministrationForm/>
                </div>
            </div>
        </div>
    </div>
}

