import React, {Component} from 'react';

import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import axios from "axios";
import {saveCookie, setAuthToken} from "./SignInForm";


function handleSubmit(login, firstName,lastName,nickName,eMail,phone, password) {


    const loginPayload = {
        login: login,
        firstName: firstName,
        lastName: lastName,
        nickName: nickName,
        eMail: eMail,
        phone: phone,
        password: password,
        fromTlg: false
    }

    axios.post("http://localhost:8083/user-service/api/createCarWashUser", loginPayload)
        .then(response => {
            //get token from response
            if (response.data.resultCode < 0)
                alert(response.data.resultComment)
            else
                window.location.href = '/signin'
        })
        .catch(err => console.log(err));

};


export default class RegisterForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            firstName: "",
            lastName: "",
            nickName: "",
            eMail: "",
            phone: "",
            password: "",
        }
    }

    render() {


        return <div style={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: `url(${background}`,
            height:"100%"
        }}>
            <div
                style={{
                    opacity: 0.7,
                    backgroundImage: `url(${mask}`,
                    backgroundRepeat: 'repeat',
                    width: "100%",
                    height:"100%",
                }}>
                <div className="d-flex justify-content-center align-items-center" style={{textAlign:"center", height:"100%"}}>
                    <div className="d-flex text-white justify-content-center align-items-center" style={{width: "100%", height:"100%", verticalAlign:"middle"}}>
                        <div className="p-5" style={{
                            backgroundColor:"black",
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
                                        <input type="text" value={this.state.email} onChange={(e) => {
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
                                <div>
                                    <button className="btn btn-outline-light btn-lg" type="button" onClick={() =>
                                        handleSubmit(this.state.login, this.state.firstName,this.state.lastName,this.state.nickName,this.state.eMail,this.state.phone,this.state.password)}>Регистрация</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }

}