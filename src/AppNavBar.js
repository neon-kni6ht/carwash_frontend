import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import UserNavBar from "./UserNavBar";
import AdminNavbar from "./AdminNavBar";
import Cookies from "js-cookie";
import {Navigate} from "react-router";

export default function AppNavbar() {
    let isAdmin = false;
    let token = Cookies.get('access_token');
    if (token) {
        let roles = JSON.parse(token).userRoles;
        for (let role of roles) {
            if (role.authority == "ADMIN") {
                isAdmin = true
                break;
            }
        }
    }
    console.log(isAdmin)
    if (isAdmin)
        return (<div>
            <UserNavBar/>
            <AdminNavbar/>
        </div>)
    else
        return (
            <div>
                <UserNavBar/>
            </div>
);



}