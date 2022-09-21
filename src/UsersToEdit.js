import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";


export default class UsersToEdit extends Component{

    constructor(props){
        super(props);

    }

    editUser(user){
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = "/edituser"
    }

    getRoles(roles){
        let userRoles = roles.map((role) => {
            return <div>
                <span>{role.roleName}</span>
            </div>
            }
        )
        return userRoles;
    }

    removeUser(user) {

        let cookie = Cookies.get('access_token')
        let token = JSON.parse(cookie).token
        if (token) {
            axios.defaults.headers.common["Authorization"] = `${token}`;
            //console.log(axios.defaults.headers.common)
        } else
            delete axios.defaults.headers.common["Authorization"];

        axios.delete("http://localhost:8083/user-service/api/admin/deleteCarWashUserById/" + user.userId)
            .then(response => {
                console.log(response.data)
                if (response.data.resultCode < 0)
                    alert(response.data.resultComment)
                else
                    window.location.href = '/admin'
            })
            .catch(err => console.log(err));
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
                        <Link to="#" style={{backgroundColor: "transparent"}} onClick={()=>this.editUser(item)}>
                            <input className="btn btn-dark mr-1" type="button" value="Редактировать"/>
                        </Link>
                        <Link href="#" style={{backgroundColor: "transparent"}}>
                            <input className="btn btn-dark mr-1" type="button" value="Удалить" onClick={()=>{this.removeUser(item)}}/>
                        </Link>
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