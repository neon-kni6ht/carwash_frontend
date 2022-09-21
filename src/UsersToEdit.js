import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";


export default class UsersToEdit extends Component{

    constructor(props){
        super(props);
    }

    getRoles(roles){
        console.log(roles)
        let userRoles = roles.map((role) => {
            return <div>
                <span>{role.roleName}</span>
            </div>
            }
        )
        return userRoles;
    }

    render() {

        let points;

        if (this.props.users)
        {points = this.props.users.map((item) => {
            return (
                <tr className="align-top">
                    <td>{item.userId}</td>
                    <td>{item.login}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td><input type="checkbox" disabled value={item.fromTlg}/></td>
                    <td>{item.eMail}</td>
                    <td>{item.nickName}</td>
                    <td>{item.password}</td>
                    <td>{item.phone}</td>
                    <td>{this.getRoles(item.userRoles)}</td>
                    <td></td>

                    <td>
                        <a href="/edituser" style={{backgroundColor: "transparent"}}>
                            <input className="btn btn-dark mr-1" type="button" value="Редактировать"/>
                        </a>
                        <a href="/" style={{backgroundColor: "transparent"}}>
                            <input className="btn btn-dark mr-1" type="button" value="Удалить"/>
                        </a>
                    </td>
                </tr>
            );
        });}


        return <div style={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: `url(${background}`,
            height: "100%",

        }}>


            <div
                style={{

                    backgroundImage: `url(${mask}`,
                    backgroundRepeat: 'repeat',
                    width: "100%",
                    height: "100%",
                    opacity: 0.9,
                }}>
                <div className="d-flex text-white justify-content-center align-items-center"
                     style={{width: "100%", height: "100%", verticalAlign: "middle", textAlign: "center"}}>
                    <div className="p-5" style={{
                        height: "auto",
                        width: "100%",
                        backgroundColor: "black",
                        border: "1px solid white"
                    }}>
                        <form style={{textAlign: "initial"}}>
                            <div>
                                <table className="table table-dark">
                                    <tr>
                                        <th>Id</th>
                                        <th>Логин</th>
                                        <th>Имя</th>
                                        <th>Фамилия</th>
                                        <th>Из Telegram</th>
                                        <th>E-Mail</th>
                                        <th>Никнэйм</th>
                                        <th>Пароль</th>
                                        <th>Номер телефона</th>
                                        <th>Роли</th>
                                        <th></th>
                                    </tr>
                                    {points}
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    }

}