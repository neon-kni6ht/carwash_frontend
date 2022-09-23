import React, {Component} from 'react';

import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import axios from "axios";


export default class AllWashesReport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateStart: "",
            dateEnd: ""
        };
    }

    getAllOrders(dstart, dend){
        let url = "http://localhost:8089/report/by-dates?startDate=";

        url = url + dstart + "&endDate=" + dend;

        localStorage.setItem('repdata', url);

        axios.get(url)
            .then(response => {
                let repdata = response.data;


                localStorage.setItem('repdata', JSON.stringify(repdata));
                window.location.href = "/reportdata"
            })
            .catch(err => console.log(err));

    }

    render() {

        return <div className="d-flex text-white justify-content-center align-items-center"
                    style={{width: "100%", height: "100%", verticalAlign: "middle", textAlign: "center"}}>
            <div className="p-5" style={{
                height: "auto",
                width: "100%",
                backgroundColor: "black",
                border: "1px solid white"
            }}>
                <form style={{textAlign: "initial"}}>
                    <div>
                        <div>
                            <div>
                                <h4 className="mb-3">Выберите период</h4>
                                <div className="mb-4">
                                    <div className="mb-3">
                                        <label className="mb-2">Начало периода</label>
                                        <input type="date" className="form-control" value={this.state.dateStart} onChange={(e) => {
                                            this.setState({dateStart: e.target.value})
                                        }}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="mb-2">Окончание периода</label>
                                        <input type="date" className="form-control" value={this.state.dateEnd} onChange={(e) => {
                                            this.setState({dateEnd: e.target.value})
                                        }}/>
                                    </div>
                                </div>
                                <div className="d-flex text-white justify-content-center align-items-center" >
                                <button className="btn btn-outline-light btn-lg" type="button" onClick={() =>
                                    this.getAllOrders(this.state.dateStart, this.state.dateEnd)}>Сформировать отчёт</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    }


}