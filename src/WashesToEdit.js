import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";


export default class WashesToEdit extends Component {


    constructor(props) {
        super(props);

    }

    editWash(wash){
        localStorage.setItem('wash', JSON.stringify(wash));
        window.location.href = "/editwash"
    }

    removeWash(wash) {

        let cookie = Cookies.get('access_token')
        let token = JSON.parse(cookie).token
        if (token) {
            axios.defaults.headers.common["Authorization"] = `${token}`;
            //console.log(axios.defaults.headers.common)
        } else
            delete axios.defaults.headers.common["Authorization"];

        axios.delete("http://localhost:8080/car-wash/delete?id=" + wash.id)
            .then(response => {
                console.log(response.data)
                if (response.data.resultCode < 0)
                    alert(response.data.resultComment)
                else
                    window.location.href = '/admin'
            })
            .catch(err => console.log(err));
    }

    getPrice(wash) {
        localStorage.setItem('wash', JSON.stringify(wash));
        window.location.href = "/editwashprice"
    }

    render() {
        let points;

        if (this.props.washes)
            points = this.props.washes.map((item) => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.address}</td>
                        <td>{item.latitude}</td>
                        <td>{item.longitude}</td>
                        <td>{item.ownerId}</td>
                        <td>{item.cityId}</td>

                        <td>
                            <a href="#" style={{backgroundColor: "transparent"}}>
                                <input className="btn btn-dark mr-1" type="button" value="Редактировать" onClick={()=>this.editWash(item)}/>
                            </a>
                            <a href="#" style={{backgroundColor: "transparent"}}>
                                <input className="btn btn-dark mr-1" type="button" value="Удалить" onClick={()=>this.removeWash(item)}/>
                            </a>
{/*                            <a href="#" style={{backgroundColor: "transparent"}}>
                                <input className="btn btn-dark" type="button" value="Прайс" onClick={()=>this.getPrice(item)}/>
                            </a>*/}
                        </td>
                    </tr>
                );
            });


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
                                <table className="table table-dark w-100">
                                    <tr>
                                        <th>ID</th>
                                        <th>Наименование</th>
                                        <th>Адрес</th>
                                        <th>Широта</th>
                                        <th>Долгота</th>
                                        <th>ID Собственника</th>
                                        <th>ID Города</th>
                                        <th></th>
                                    </tr>
                                    {points}
                                </table>
                                <a href="/addwash">
                                    <input className="btn btn-dark" type="button" value="Добавить"/>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    }


}