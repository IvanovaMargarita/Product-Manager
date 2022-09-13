import logo from './logo.svg';
import './App.css';
import PersonForm from './components/PersonForm';
import ProductForm from './components/ProductForm';
import {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import MainTwo from './views/MainTwo';
import OneProduct from './components/OneProduct';
import UpdatedProduct from './components/UpdatedProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route element={<MainTwo/>} path="/home" default></Route>
        <Route element={<OneProduct/>} path ="/products/:id"></Route>
        <Route element={<UpdatedProduct/>} path="/products/edit/:id"></Route>
            {/* <Route element={<Main/>} path="/home" default/>
            <Route element={<Detail/>}path={"people/:id"}></Route> */}
            {/* <ProductForm/> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
