import React, {Component} from 'react';

import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";

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


export default class AllWashesReport extends Component {


    render() {
        let points;

        points = items.map((item) => {
            return (
                <div className="form-check mb-3">
                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                           id="flexRadioDefault1"/><label>{item.address}</label>
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
                <div className="d-flex text-white justify-content-center align-items-center">
                    <input className="btn btn-dark" type="submit" value="Получить отчёт"/>
                </div>
                <form style={{textAlign: "initial"}}>
                    <div>
                        <div>
                            <h4 className="mb-3">Выберите мойку</h4>
                            {points}
                        </div>
                    </div>
                </form>
            </div>
        </div>


    }


}