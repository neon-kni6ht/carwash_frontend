import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";


export default class WashToEditForm extends Component{


    constructor(props) {
        super(props);
        let item = JSON.parse(localStorage.getItem("wash"));

        this.state = {
            id: item.id,
            title: item.title,
            address: item.address,
            latitude: item.latitude,
            longitude: item.longitude,
            ownerId: item.ownerId,
            cityId: item.cityId
        }


    }

    handleSubmit() {

        let payload = {
            id: this.state.id,
            title: this.state.title,
            address: this.state.address,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            ownerId: this.state.ownerId,
            cityId: this.state.cityId
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
                                        <p>Наименование</p>
                                        <input type="text" value={this.state.title} onChange={(e) => {
                                            this.setState({title: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>Адрес</p>
                                        <input type="text" value={this.state.address} onChange={(e) => {
                                            this.setState({address: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>Широта</p>
                                        <input type="text" value={this.state.latitude} onChange={(e) => {
                                            this.setState({latitude: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>Долгота</p>
                                        <input type="text" value={this.state.longitude} onChange={(e) => {
                                            this.setState({longitude: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>ID Собственника</p>
                                        <input type="text" value={this.state.ownerId} onChange={(e) => {
                                            this.setState({ownerId: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>ID Города</p>
                                        <input type="text" value={this.state.cityId} onChange={(e) => {
                                            this.setState({cityId: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div>
                                    <button className="btn btn-outline-light btn-lg" type="button" onClick={() =>
                                        this.handleSubmit()}>Сохранить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    }



}