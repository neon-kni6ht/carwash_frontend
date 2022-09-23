import React, {useState} from 'react';
import {BrowserRouter as Router, Redirect, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./Home";
import SignIn from "./SignIn";
import Select from "./Select";
import Register from "./Register";
import LeaveContactData from "./LeaveContactData";
import Administration from "./Administration";
import WashToEdit from "./WashToEdit";
import Reports from "./Reports";
import HasJWT from "./HasJWT";
import { useCookies } from "react-cookie";
import SignOut from "./SignOut";
import IsAdmin from "./IsAdmin";
import UserToEdit from "./UserToEdit";
import WashToAdd from "./WashToAdd";
import PriceToEdit from "./PriceToEdit";

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' exact={true} element={<Home/>}/>
                <Route path='/signin' exact={true} element={<SignIn/>}/>
                <Route path='/select' exact={true}
                       element={<Select goal="place"/>}/>
                <Route path='/price' exact={true}
                       element={<Select goal="price"/>}/>
                <Route path='/register' exact={true} element={<Register/>}/>
                <Route path='/leavecontacts' exact={true} element={<LeaveContactData/>}/>
                <Route path='/admin' exact={true}
                       element={
                           <IsAdmin child={<Administration/>}/>
                       }/>
                <Route path='/editwash' exact={true}
                       element={
                           <IsAdmin child={<WashToEdit/>}/>
                       }/>
                <Route path='/editwashprice' exact={true}
                       element={
                           <IsAdmin child={<PriceToEdit/>}/>
                       }/>
                <Route path='/addwash' exact={true}
                       element={
                           <IsAdmin child={<WashToAdd/>}/>
                       }/>
                <Route path='/edituser' exact={true}
                       element={
                           <IsAdmin child={<UserToEdit/>}/>
                       }/>
                <Route path='/reports' exact={true}
                       element={
                           <IsAdmin child={<Reports/>}/>
                       }/>
                <Route path='/signout' exact={true} element={<SignOut/>}/>
                <Route path='/forbidden' exact={true} element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
