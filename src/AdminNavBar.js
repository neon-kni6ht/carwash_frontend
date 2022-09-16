import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function AdminNavbar() {
        return <Navbar dark expand="md" fixed="top" style={{backgroundColor: 'rgba(150,150,150,0.5)'}}>
            <Nav className="me-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/admin">Администрирование</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/reports">Отчёты</NavLink>
                </NavItem>
            </Nav>


        </Navbar>


}