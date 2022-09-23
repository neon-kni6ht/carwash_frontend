import React from 'react';
import AppNavbar from "./AppNavBar";
import ReportDataForm from "./ReportDataForm";


export default function ReportData(){
    let repdata = JSON.parse(localStorage.getItem("repdata"));

         return  <div style = {{height:"100vh", backgroundColor: "rgba(17,15,17,1.0)"}}>
             <ReportDataForm reportdata={repdata}/>
             <AppNavbar/>
         </div>






}