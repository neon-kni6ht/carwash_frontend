import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function AppNavbar() {
        return <Navbar dark expand="md" fixed="bottom" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <Nav className="me-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/select">Запись</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/price">Услуги</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/">Контакты</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/">Стать партнёром</NavLink>
                </NavItem>
            </Nav>
            <Nav className="mr-auto" navbar>
                <NavItem className="px-2">
                    <NavbarText tag={Link} to="/register">Регистрация</NavbarText>
                </NavItem>
                <NavItem className="px-2">
                    <NavbarText tag={Link} to="/signin">Вход</NavbarText>
                </NavItem>
            </Nav>


        </Navbar>


}