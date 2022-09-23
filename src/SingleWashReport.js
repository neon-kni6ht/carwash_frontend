import React, {Component} from 'react';

import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import axios from "axios";

const items = [
    {
        address: 'У нас широчайший ассортимент услуг, связанных с мойкой автомобилей',
        name: 'Выбор'
    },
    {
        address: 'Вы можете быть спокойны, ваш автомобиль вы отдаете в надежные руки',
        name: 'Ответственный подход'
    },
    {
        address: 'У нас работают профессионалы высокого класса',
        name: 'Опыт'
    },
    {
        address: 'На наших автомойках применяется только качественная автохимия и современное оборудование',
        name: 'Качество'

    },
    {
        address: 'Невысокие цены и большое количество точек гарантируют ваш комфорт',
        name: 'Доступность'
    }
];


export default class SingleWashReport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateStart: "",
            dateEnd: "",
            washid: ""
        };
    }

    getAllOrders(dstart, dend, wash){
        let url = "http://localhost:8089/report/by-dates-by-car-wash?startDate=";

        url = url + dstart + "&endDate=" + dend + "&id=" + wash;

        axios.get(url)
            .then(response => {
                let repdata = response.data;


                localStorage.setItem('repdata', JSON.stringify(repdata));
                window.location.href = "/reportdata"
            })
            .catch(err => console.log(err));

    }

    render() {
        let points;

        if (this.props.washes)
            points = this.props.washes.map((item) => {
                return (
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                           id="flexRadioDefault1" onClick={(e) => {
                            this.setState({washid: item.id})
                        }}/><label>{item.title} {item.address}</label>
                    </div>
                );
            });


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
                        <div className="mb-3">
                            <h4 className="mb-3">Выберите мойку</h4>
                            {points}
                        </div>
                        <div className="d-flex text-white justify-content-center align-items-center" >
                            <button className="btn btn-outline-light btn-lg" type="button" onClick={() =>
                                this.getAllOrders(this.state.dateStart, this.state.dateEnd, this.state.washid)}>Сформировать отчёт</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    }


}