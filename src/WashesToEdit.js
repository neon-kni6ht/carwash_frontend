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
export default class WashesToEdit extends Component {


    constructor(props) {
        super(props);

    }

    editUser(user){
        localStorage.setItem('wash', JSON.stringify(user));
        window.location.href = "/editwash"
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
                                <input className="btn btn-dark mr-1" type="button" value="Редактировать" onClick={()=>this.editUser(item)}/>
                            </a>
                            <a href="#" style={{backgroundColor: "transparent"}}>
                                <input className="btn btn-dark mr-1" type="button" value="Удалить"/>
                            </a>
                            <a href="#" style={{backgroundColor: "transparent"}}>
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