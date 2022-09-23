import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";


export default class ReportDataForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            order: "",
            newstatus: ""
        };
    }

    changeStatus(order, newstatus) {

        console.log("order.id");
        console.log(order.id);
        console.log("newstatus");
        console.log(newstatus);
        if (order.status == "Новый" || order.status == "Создан" || order.status == "В работе") {
            if ((order.status == "Новый" || order.status == "Создан") || (order.status == "В работе" && (newstatus == "Завершен" || newstatus == "Отменен")))
            {
                let url = "http://localhost:8080/order/update-status?id=" + order.id.toString() + "&status=" + newstatus;
                axios.post(url)
                    .then(response => {
                        //get token from response
                        window.location.href = "/reportdata"
                    })
                    .catch(err => console.log(err));
            }

        }
    }

    toReports() {
        window.location.href = '/reports'
    }

    render() {
        let repdatarows;
         if (this.props.reportdata) {
             repdatarows = this.props.reportdata.map((repdatarow) => {
                 return (<tr>
                         <td>{repdatarow.carWashTitle}</td>
                         <td>{repdatarow.userNickName}</td>
                         <td>{repdatarow.status}</td>
                         <td>{repdatarow.date}</td>
                         <td>{repdatarow.price}</td>
                         <td>{repdatarow.id}</td>
                         <td>{repdatarow.userId}</td>
                         <td>{repdatarow.carWashId}</td>
                         <td>
                             <a href="#" style={{backgroundColor: "transparent"}}>
                                 <input className="btn btn-dark mr-1" type="button" value="В работу" onClick={()=>this.changeStatus(repdatarow, "В работе")}/>
                             </a>
                             <a href="#" style={{backgroundColor: "transparent"}}>
                                 <input className="btn btn-dark mr-1" type="button" value="Отменить" onClick={()=>this.changeStatus(repdatarow, "Отменен")}/>
                             </a>
                             <a href="#" style={{backgroundColor: "transparent"}}>
                                 <input className="btn btn-dark" type="button" value="Завершить" onClick={()=>this.changeStatus(repdatarow, "Завершен")}/>
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
                                 <table className="table table-dark w-100">
                                     <tr>
                                         <th>Мойка</th>
                                         <th>Заказчик</th>
                                         <th>Статус заказа</th>
                                         <th>Дата заказа</th>
                                         <th>Стоимость заказа</th>
                                         <th>ID заказа</th>
                                         <th>ID заказчика</th>
                                         <th>ID станции</th>
                                         <th></th>
                                     </tr>
                                     {repdatarows}
                                 </table>
                             </div>
                             <div>
                                 <button className="btn btn-outline-light btn-lg" type="button" onClick={() =>
                                     this.toReports()}>К списку отчётов</button>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>


    }


}