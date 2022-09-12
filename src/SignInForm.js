import React, {Component} from 'react';

import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";



export default class SignInForm extends Component{


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
                                        <input type="text" />
                                    </label>
                                </div>
                                <div className="mb-5">
                                    <label>
                                        <p>Пароль</p>
                                        <input type="password" />
                                    </label>
                                </div>
                                <div>
                                    <button className="btn btn-outline-light btn-lg" type="submit">Войти</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }



}