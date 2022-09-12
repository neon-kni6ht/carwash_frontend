import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import SignIn from "./SignIn";
import Select from "./Select";
import Register from "./Register";
import LeaveContactData from "./LeaveContactData";

function App() {
  return (
      <Router>
        <Routes>
            <Route path='/' exact={true} element={<Home/>}/>
            <Route path='/signin' exact={true} element={<SignIn/>}/>
            <Route path='/select' exact={true} element={<Select goal="place"/>}/>
            <Route path='/price' exact={true} element={<Select goal="price"/>}/>
            <Route path='/register' exact={true} element={<Register/>}/>
            <Route path='/leavecontacts' exact={true} element={<LeaveContactData/>}/>

        </Routes>
      </Router>
  );
}

export default App;
