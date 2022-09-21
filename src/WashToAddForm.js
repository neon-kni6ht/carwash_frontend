import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";
import axios from "axios";


export default class WashToAddForm extends Component{


    constructor(props) {
        super(props);

        this.state = {
            title: "",
            address: "",
            latitude: "",
            longitude: "",
            ownerId: "",
            cityId: ""

        }

    }


    handleSubmit() {

        const payload = {
            title: this.state.title,
            address: this.state.address,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            ownerId: this.state.ownerId,
            cityId: this.state.cityId
        }

        axios.post("http://localhost:8080/car-wash/create", payload)
            .then(response => {
                console.log(response.data)

            })
            .catch(err => console.log(err));

    };


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
                                        <p>ID владельца</p>
                                        <input type="text" value={this.state.ownerId} onChange={(e) => {
                                            this.setState({ownerId: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>ID города</p>
                                        <input type="text" value={this.state.cityId} onChange={(e) => {
                                            this.setState({cityId: e.target.value})
                                        }}/>
                                    </label>
                                </div>
                                <div>
                                    <input className="btn btn-outline-light btn-lg" type="button" onClick={() =>
                                        this.handleSubmit()} value="Сохранить"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    }



}