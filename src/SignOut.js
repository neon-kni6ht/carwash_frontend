import React, {Component} from 'react';
import './App.css';
import './index.css';
import AppNavbar from "./AppNavBar";
import SignInForm from "./SignInForm";
import {Navigate} from "react-router";
import axios from "axios";
import Cookies from "js-cookie";


export default function SignOut() {
    delete axios.defaults.headers.common["Authorization"];
    let expires = new Date()
    expires.setTime(expires.getTime())
    Cookies.set('access_token', '', {path: '/', expires})
        return (
            <Navigate Navigate to="/" replace/>

        );
}

