import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Inicio from './/pages/Inicio/Index';
import Catálogo from './pages/Catálogo/Index';
import Produto from './pages/Produto/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/Catálogo' element={<Catálogo/>}/>
      <Route path='/Produto/:id' element={<Produto/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

