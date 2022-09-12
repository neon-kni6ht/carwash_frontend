import React, {Component} from 'react';

import AppNavbar from "./AppNavBar";
import LeaveContactDataForm from "./LeaveContactDataForm";



export default function LeaveContactData() {

    return (
        <div style={{height: "100vh", backgroundColor: "rgba(17,15,17,1.0)"}}>
            <LeaveContactDataForm/>
            <AppNavbar/>
        </div>
    )
}