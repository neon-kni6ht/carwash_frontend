import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import SignIn from "./SignIn";
import Select from "./Select";

function App() {
  return (
      <Router>
        <Routes>
            <Route path='/' exact={true} element={<Home/>}/>
            <Route path='/signin' exact={true} element={<SignIn/>}/>
            <Route path='/select' exact={true} element={<Select goal="place"/>}/>
            <Route path='/price' exact={true} element={<Select goal="price"/>}/>
        </Routes>
      </Router>
  );
}

export default App;
