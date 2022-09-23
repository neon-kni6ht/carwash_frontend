import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";


export default class UserToEditForm extends Component {


    constructor(props) {
        super(props);
        let item = JSON.parse(localStorage.getItem("user"));

        let isAdmin = false;
        for (let role of item.userRoles){
            if (role.roleId == "ADMIN"){
                isAdmin = true;
                break;

            }
        }

        this.state = {
            userId: item.userId,
            login: item.login,
            firstName: item.firstName,
            lastName: item.lastName,
            nickName: item.nickName,
            eMail: item.eMail,
            phone: item.phone,
            password: item.password,
            fromTlg: item.fromTlg,
            userRoles: item.userRoles,
            isAdmin: isAdmin
        }


    }

    handleSubmit() {

        let userRoles;
        if (this.state.isAdmin)
            userRoles = [
                {roleId: "ADMIN", roleName: 'Администратор(ЦА)', authority: 'ADMIN'},
                {roleId: 'WASHOWNER', roleName: 'Владелец мойки', authority: 'WASHOWNER'},
                {roleId: "USER", roleName: 'Клиент', authority: 'USER'}]
        else
            userRoles = [
                {roleId: "USER","roleName": ""}]

        let payload = {
            userId: this.state.userId,
            login: this.state.login,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            nickName: this.state.nickName,
            eMail: this.state.eMail,
            phone: this.state.phone,
            password: this.state.password,
            fromTlg: this.state.fromTlg,
            userRoles: userRoles,
        }
        let cookie = Cookies.get('access_token')
        let token = JSON.parse(cookie).token
        if (token) {
            axios.defaults.headers.common["Authorization"] = `${token}`;
            //console.log(axios.defaults.headers.common)
        } else
            delete axios.defaults.headers.common["Authorization"];

        axios.put("http://localhost:8083/user-service/api/user/updateCarWashUser", payload)
            .then(response => {
                //get token from response
                console.log(response.data)
                if (response.data.resultCode < 0)
                    alert(response.data.resultComment)
                else
                    window.location.href = '/admin'
            })
            .catch(err => console.log(err));


    }


    render() {


        return <div style={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: `url(${background}`,
            height: "100%"
        }}>
            <div
                style={{
                    opacity: 0.7,
                    backgroundImage: `url(${mask}`,
                    backgroundRepeat: 'repeat',
                    width: "100%",
                    height: "100%",
                }}>
                <div className="d-flex justify-content-center align-items-center"
                     style={{textAlign: "center", height: "100%"}}>
                    <div className="d-flex text-white justify-content-center align-items-center"
                         style={{width: "100%", height: "100%", verticalAlign: "middle"}}>
                        <div className="p-5" style={{
                            backgroundColor: "black",
                            border: "1px solid white"
                        }}>
                            <form>
                                <div className="mb-3">
                                    <label>
                                        <p>Логин</p>
                                        <input type="text" value={this.state.login} onChange={(e) => {
                                            this.setState({login: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>Никнэйм</p>
                                        <input type="text" value={this.state.nickName} onChange={(e) => {
                                            this.setState({nickName: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>Имя</p>
                                        <input type="text" value={this.state.firstName} onChange={(e) => {
                                            this.setState({firstName: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>Фамилия</p>
                                        <input type="text" value={this.state.lastName} onChange={(e) => {
                                            this.setState({lastName: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>Адрес электронной почты</p>
                                        <input type="text" value={this.state.eMail} onChange={(e) => {
                                            this.setState({eMail: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>Введите пароль</p>
                                        <input type="password" value={this.state.password} onChange={(e) => {
                                            this.setState({password: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-5">
                                    <label>
                                        <p>Контактный телефон</p>
                                        <input type="tel" value={this.state.phone} onChange={(e) => {
                                            this.setState({phone: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-5">
                                    <label>
                                        <label className="px-2">Из Телеграмма</label>
                                        <input className="px-2 align-middle" type="checkbox" checked={this.state.fromTlg} onChange={(e) => {
                                            this.setState({fromTlg: e.target.checked})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-5">
                                    <label>
                                        <label className="px-2">Администратор</label>
                                        <input className="px-2 align-middle" type="checkbox" checked={this.state.isAdmin} onChange={(e) => {
                                            this.setState({isAdmin: e.target.checked})
                                        }}/>
                                    </label>
                                </div>
                                <div>
                                    <button className="btn btn-outline-light btn-lg" type="button" onClick={() =>
                                        this.handleSubmit()}>Сохранить
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    }


}