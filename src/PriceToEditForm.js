import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";
import axios from "axios";


export default class PriceToEditForm extends Component{


    constructor(props) {
        super(props);

        let item = JSON.parse(localStorage.getItem("wash"));
        let pricelist;
        axios.get("http://localhost:8081/user/getGroup/" + item.id)
            .then(response => {
                console.log(response.data)
                pricelist = response.data
            })
            .catch(err => console.log(err));


        this.state = {
            pricelist : pricelist,
        }



    };


    render() {

        let points = this.state.pricelist.map((service)=>{
            return (
                <tr>
                    <td>{service.id}</td>
                    <td>{service.idCarwash}</td>
                    <td>{service.service}</td>
                    <td>{service.price}</td>
                </tr>
            );
        })

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
                                <div>
                                    <table className="table table-dark w-100">
                                        <tr>
                                            <th>ID услуги</th>
                                            <th>ID мойки</th>
                                            <th>Наименование услуги</th>
                                            <th>Цена</th>
                                        </tr>
                                        {points}
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    }



}