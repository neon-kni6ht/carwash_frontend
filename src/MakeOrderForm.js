import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import Cookies from "js-cookie";
import axios from "axios";
import moment from "moment";


export default class MakeOrderForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            selectedWash: null
        }

        this.getCurrentPosition()

    }


    getCurrentPosition() {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        let success = (pos) => {
            const crd = pos.coords;

            this.setState({
                latitude: crd.latitude,
                longitude: crd.longitude
            })

        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }


    getFreeWashes(date) {
        if (date) {
            this.setState({date: date})

            let cookie = Cookies.get('access_token')
            let token = JSON.parse(cookie).token
            if (token) {
                axios.defaults.headers.common["Authorization"] = `${token}`;

            } else
                delete axios.defaults.headers.common["Authorization"];

            if (date && this.state.longitude && this.state.latitude)
                axios.get("http://localhost:8080/car-wash/nearest-free-car-washes-by-date?latitude=" + this.state.latitude + "&longitude=" + this.state.longitude + "&date=" + date)
                    .then(response => {

                        //console.log(response.data)
                        this.setState({washes: response.data})
                    })
                    .catch(err => console.log(err))
        }
    }


    makeOrder() {
        let cookie = Cookies.get('access_token')
        let token = JSON.parse(cookie).token
        let user = JSON.parse(cookie).userId

        let payload = {
            userId: user,
            status: "В работе",
            carWashId: this.state.selectedWash.id,
            date: this.state.date,
        }



        if (token) {
            axios.defaults.headers.common["Authorization"] = `${token}`;

        } else
            delete axios.defaults.headers.common["Authorization"];

        if (this.state.date && this.state.selectedWash)
            axios.post("http://localhost:8080/order/create",payload)
                .then(response => {
                    //console.log(response.data)
                    window.location.href = "/"

                })
                .catch(err => console.log(err))

    }

    render() {
        let points;

        if (this.state.washes)
            points = this.state.washes.map((wash) => {
                return (
                    <tr>

                        <td><input className="form-check-input" type="radio" onChange={(e) => {
                            this.setState({selectedWash: wash})
                        }}/></td>
                        <td>{wash.title}</td>
                        <td>{wash.address}</td>
                        <td>{wash.price}</td>
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
                        width: "60%",
                        backgroundColor: "black",
                        border: "1px solid white"
                    }}>
                        <h4 className="mb-5">Выберите удобное для вас время</h4>
                        <div className="mb-5">
                            <input type="date" value={this.state.date} onChange={(e) => {
                                this.getFreeWashes(e.target.value)
                            }}/>
                        </div>
                        {this.state.date &&
                            <div>
                                <h4 className="mb-5">Мы приготовили список ближайших к вам моек</h4>
                                <form style={{textAlign: "initial"}}>

                                    <table className="table table-dark w-100">
                                        <tr>
                                            <th></th>
                                            <th>Наименование мойки</th>
                                            <th>Адрес</th>
                                            <th>Цена</th>
                                        </tr>
                                        {points}
                                    </table>
                                </form>
                                <input className="btn btn-outline-light btn-lg" type="button" value="Записаться" onClick={()=>this.makeOrder()}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>


    }

}