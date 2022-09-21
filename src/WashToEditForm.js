import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";


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
                                        <input type="text" value={this.state.title}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>Адрес</p>
                                        <input type="text" value={this.state.address}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>Широта</p>
                                        <input type="text" value={this.state.latitude}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>Долгота</p>
                                        <input type="text" value={this.state.longitude}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>ID Собственника</p>
                                        <input type="text" value={this.state.ownerId}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>ID Города</p>
                                        <input type="text" value={this.state.cityId}/>
                                    </label>
                                </div>
                                <div>
                                    <button className="btn btn-outline-light btn-lg" type="submit">Сохранить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    }



}