import './Index.scss';
import { Link } from 'react-router-dom';
import Head from '../../components/header/Index';
import Baseboard from '../../components/baseboard/Index';
import { useEffect, useState } from 'react';


export default function Catálogo() {

  return (
    <div className="pagina-catálogo">
      <Head />
      <div className="page-center"> 
        <input type="text" placeholder='  O que procura?' />  
        <h2 className='page-title'>Cardápio</h2>
      </div>
      <Baseboard />
    </div>

  )
} 