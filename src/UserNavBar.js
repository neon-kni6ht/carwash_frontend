import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import HasJWT from "./HasJWT";
import Reports from "./Reports";
import Cookies from "js-cookie";

export default function UserNavBar() {
    let token = Cookies.get('access_token');
    let authbar;
    if (token)
        authbar = <Nav className="mr-auto" navbar>
            <NavItem className="px-2">
                <NavbarText tag={Link} to="/signout">Выход</NavbarText>
            </NavItem>
        </Nav>
    else
        authbar = <Nav className="mr-auto" navbar>
            <NavItem className="px-2">
                <NavbarText tag={Link} to="/register">Регистрация</NavbarText>
            </NavItem>
            <NavItem className="px-2">
                <NavbarText tag={Link} to="/signin">Вход</NavbarText>
            </NavItem>
        </Nav>

    return <Navbar dark expand="md" fixed="bottom" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to="/select">Запись</NavLink>
            </NavItem>
            <NavItem>
                <NavLink as={"a"} href="http://localhost:8081/user/all-prices-read">Услуги</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/about">Контакты</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/">Мои заказы</NavLink>
            </NavItem>
        </Nav>
        {authbar}

    </Navbar>


}