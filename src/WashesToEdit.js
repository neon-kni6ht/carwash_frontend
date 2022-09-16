import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";



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
export default class WashesToEdit extends Component{


    constructor(props) {
        super(props);

    }


    render() {
        let points;

            points = items.map((item) => {
                return (
                    <tr>
                        <td >{item.name}</td>
                        <td >{item.address}</td>
                        <td >
                            <a href="/edit" style={{backgroundColor:"transparent"}}>
                                <input className="btn btn-dark mr-1" type="button" value="Редактировать"/>
                            </a>
                            <a href="/" style={{backgroundColor:"transparent"}}>
                                <input className="btn btn-dark mr-1" type="button" value="Удалить"/>
                            </a>
                            <a href="/" style={{backgroundColor:"transparent"}}>
                                <input className="btn btn-dark" type="button" value="Прайс"/>
                            </a>
                        </td>
                    </tr>
                );
            });


        return <div style={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: `url(${background}`,
            height:"100%",

        }}>




            <div
                style={{

                    backgroundImage: `url(${mask}`,
                    backgroundRepeat: 'repeat',
                    width: "100%",
                    height:"100%",
                    opacity: 0.9,
                }}>
                    <div className="d-flex text-white justify-content-center align-items-center" style={{width: "100%", height:"100%", verticalAlign:"middle", textAlign:"center"}}>
                        <div className="p-5" style={{
                            height: "auto",
                            width: "60%",
                            backgroundColor:"black",
                            border: "1px solid white"
                        }}>
                            <h4 className="mb-5">Автомойки</h4>
                            <form style={{textAlign:"initial"}}>
                                <div>
                                    <table className="table table-dark">
                                        <tr>
                                            <th>Наименование</th>
                                            <th>Адрес</th>
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