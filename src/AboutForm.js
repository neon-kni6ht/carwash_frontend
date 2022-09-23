import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";





const items = [
    {
        name: 'Максим Сергеевич Димиденко',
        tribe: 'SberData',
        position: "Junior Data инженер",
        email: "msdimidenko@sberbank.ru"
    },
    {
        name: 'Левина Анна Михайловна',
        tribe: ' ДИТ Розничный бизнес',
        position: "Junior Java разработчик",
        email: "fedosova.a.mi@sberbank.ru"
    },
    {
        name: 'Емельянов Антон Владимирович',
        tribe: 'ДИТ Розничный бизнес',
        position: "Junior Frontend разработчик",
        email: "emelyanov.a.vladimiro@sberbank.ru"
    },
    {
        name: 'Полада Михаил Викторович',
        tribe: 'SberWorks',
        position: "Junior Java разработчик",
        email: "mvpolada@sberbank.ru"

    },
    {
        name: 'Старостин Сергей Витальевич',
        tribe: 'ДИТ Корпоративно-инвестиционный бизнес',
        position: " Senior инженер по сопровождению",
        email: "starostin.s.vi@sberbank.ru"
    },
    {
        name: 'Тюрников Святослав Игоревич',
        tribe: 'ДИТ Корпоративно-инвестиционный бизнес',
        position: "Middle PEGA разработчик",
        email: "sityurnikov@sberbank.ru"
    }
];



export default class AboutForm extends Component{


    constructor(props) {
        super(props);

    }


    render() {
        let points;

            points = items.map((item) => {
                return (
                        <Card className="w-25 mx-3 text-center">
                            <CardBody>
                                <CardTitle className="h4 text-dark">{item.name}</CardTitle>
                                <CardSubtitle className="lead text-dark">{item.tribe}</CardSubtitle>
                                <CardText className="text-muted">
                                    <div>{item.position}</div>
                                    <div>{item.email}</div>
                                </CardText>
                            </CardBody>
                        </Card>
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
                            <h4 className="mb-5">О команде</h4>
                            <form style={{textAlign:"initial"}}>
                                <div className="d-flex">
                                    {points}
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>


    }



}