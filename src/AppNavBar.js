import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import UserNavBar from "./UserNavBar";
import AdminNavbar from "./AdminNavBar";

export default function AppNavbar() {
        return (
            <div>
                <UserNavBar/>
                <AdminNavbar/>
            </div>
);



}