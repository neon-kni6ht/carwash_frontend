import React, {Component} from 'react';

import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {

    Nav,

    NavItem,
    NavLink,

} from "reactstrap";
import ReportForm from "./ReportForm";

export default function Report(props) {

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
                    <ReportForm/>
                </div>
            </div>
        </div>
    </div>




}