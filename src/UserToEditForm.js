import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";


export default class UserToEditForm extends Component{


    constructor(props) {
        super(props);

    }


    render() {

        const item = {
            name: "testName",
            address: "testAddress"
        }

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
                                        <input type="text" value={item.name}/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <p>Адрес</p>
                                        <input type="text" value={item.address}/>
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