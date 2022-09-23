import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";


export default class UserOrdersForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            order: "",
            newstatus: "",
            myusername: ""
        };
        this.getUserName();
    }

    getUserName() {
        let cookie = Cookies.get('access_token')
        let myusername = JSON.parse(cookie).nickName;
        if (myusername) {
            this.state = {myusername: myusername}
        } else {
            let firstName = JSON.parse(cookie).firstName
            let lastName = JSON.parse(cookie).lastName
            let login = JSON.parse(cookie).login
            if (firstName || lastName) {
                if (firstName) {
                    myusername = firstName
                    if (lastName) {
                        myusername = myusername + " " + lastName
                    }
                } else myusername = lastName
                this.state = {myusername: myusername}
            } else this.state = {myusername: login}
        }



    }

    changeStatus(order) {

        if (order.status === "В работе" || order.status === "Новый" || order.status === "Создан") {
            let url = "http://localhost:8080/order/update-status?id=" + order.id.toString() + "&status=Отменен";
            axios.post(url)
                .then(response => {
                    //get token from response
                })
            window.location.href = "/userorders"

        }
    }

    doOrder() {
        window.location.href = '/select'
    }

    render() {
        let repdatarows;
         if (this.props.orderlist) {
             repdatarows = this.props.orderlist.map((repdatarow) => {
                 return (<tr>
                         <td>{repdatarow.carWashTitle}</td>
                         <td>{repdatarow.userNickName}</td>
                         <td>{repdatarow.status}</td>
                         <td>{repdatarow.date}</td>
                         <td>{repdatarow.price}</td>
                         <td>{repdatarow.id}</td>
                         <td>
                             <a href="#" style={{backgroundColor: "transparent"}}>
                                 <input className="btn btn-dark mr-1" type="button" value="Отменить" onClick={()=>this.changeStatus(repdatarow, "Отменен")}/>
                             </a>
                         </td>
                     </tr>
                 );
                 }
             );
         }

         return <div style={{
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover',
             backgroundImage: `url(${background}`,
             height: "100%",

         }}>


             <div
                 style={{
                     backgroundPosition: 'center',
                     backgroundImage: `url(${mask}`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: "100%",
                     height: "100%",
                     opacity: 0.9,
                 }}>
                 <div className="d-flex text-white justify-content-center align-items-center"
                      style={{width: "100%", height: "100%", verticalAlign: "middle", textAlign: "center"}}>
                     <div className="p-5" style={{
                         height: "auto",
                         width: "95%",
                         backgroundColor: "black",
                         border: "1px solid white"
                     }}>
                         <form style={{textAlign: "initial"}}>
                             <div>
                                 Все заказы пользователя {this.state.myusername}
                             </div>
                             <br/>
                             <div>
                                 <table className="table table-dark w-100">
                                     <tr>
                                         <th>Мойка</th>
                                         <th>Заказчик</th>
                                         <th>Статус заказа</th>
                                         <th>Дата заказа</th>
                                         <th>Стоимость заказа</th>
                                         <th>ID заказа</th>
                                         <th></th>
                                     </tr>
                                     {repdatarows}
                                 </table>
                             </div>
                             <div>
                                 <button className="btn btn-outline-light btn-lg" type="button" onClick={() =>
                                     this.doOrder()}>Оформить новый заказ</button>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>


    }


}