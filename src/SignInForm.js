import React, {Component} from 'react';
import * as ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import axios from 'axios';
import {useNavigate} from "react-router";

function HandleSubmit(login, pass) {
    const loginPayload = {
        login: login,
        password: pass
    }

    axios.post("http://localhost:8083/user-service/api/login", loginPayload)
        .then(response => {
            //get token from response
            let token = null;
            console.log(response.data)
            if (response.data.resultCode == "200") {
                token = JSON.stringify(response.data.carWashUserDto);


                //set JWT token to cookie
                saveCookie(token)

                window.location.href = '/'
            }

        })
        .catch(err => console.log(err));


};


export function saveCookie(token) {
    if (token) {
        let expires = new Date()
        expires.setTime(expires.getTime() + (1000000 * 1000))
        Cookies.set('access_token', token, {path: '/', expires})
    } else {
        let expires = new Date()
        expires.setTime(expires.getTime())
        Cookies.set('access_token', '', {path: '/', expires})
    }


}

export default class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        }

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
                                <div className="mb-5">
                                    <label>
                                        <p>Пароль</p>
                                        <input type="password" value={this.state.password} onChange={(e) => {
                                            this.setState({password: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div>
                                    <button className="btn btn-outline-light btn-lg" type="button"
                                            onClick={() => {
                                                HandleSubmit(this.state.login, this.state.password)
                                            }}>Войти
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


