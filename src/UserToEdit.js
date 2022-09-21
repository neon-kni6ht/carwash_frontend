import React, {Component} from 'react';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";
import {Link} from "react-router-dom";
import RegisterForm from "./RegisterForm";
import AppNavbar from "./AppNavBar";
import WashToEditForm from "./WashToEditForm";
import UserToEditForm from "./UserToEditForm";


export default class UserToEdit extends Component{


    constructor(props) {
        super(props);

    }


    render() {

         return  <div style = {{height:"100vh", backgroundColor: "rgba(17,15,17,1.0)"}}>
             <UserToEditForm/>
             <AppNavbar/>
         </div>



    }



}