import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";



const items = [
    {
        address: 'У нас широчайший ассортимент услуг, связанных с мойкой автомобилей',
        header: 'Выбор'
    },
    {
        address: 'Вы можете быть спокойны, ваш автомобиль вы отдаете в надежные руки',
        header: 'Ответственный подход'
    },
    {
        address: 'У нас работают профессионалы высокого класса',
        header: 'Опыт'
    },
    {
        address: 'На наших автомойках применяется только качественная автохимия и современное оборудование',
        header: 'Качество'

    },
    {
        address: 'Невысокие цены и большое количество точек гарантируют ваш комфорт',
        header: 'Доступность'
    }
];

const messages = {
    chooseplace: "Мы приготовили список ближайших к вам моек",
    chooseservice: "Выберите желаемую услугу",
    choosetimemessage: "Выберите удобное для вас время"
}

export default class SelectForm extends Component{


    constructor(props) {
        super(props);

    }


    render() {
        let message;
        let points;

        if (this.props.goal=="place"){
            message = messages.chooseplace;
            points = items.map((item) => {
                return (
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/><label>{item.address}</label>
                    </div>
                );
            });
        }
        else if (this.props.goal=="price") {
            message = messages.chooseservice;
            points = items.map((item) => {
                return (
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                               id="flexRadioDefault1"/><label>{item.address}</label>
                    </div>
                );
            });
        }
        else if (this.props.goal=="time") {
            message = messages.choosetimemessage;
            points = items.map((item) => {
                return (
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                               id="flexRadioDefault1"/><label>{item.address}</label>
                    </div>
                );
            });
        }

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
                            <h4 className="mb-5">{message}</h4>
                            <form style={{textAlign:"initial"}}>
                                <div>
                                    {points}
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>


    }



}