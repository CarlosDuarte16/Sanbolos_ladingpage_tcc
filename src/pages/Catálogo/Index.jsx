import './Index.scss';
import Head from '../../components/header/Index';
import Baseboard from '../../components/baseboard/Index';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Catálogo() {
  const [consulProduct, setConsulProduct] = useState([]);

  async function buscar() {
    const url = 'http://localhost:5001/api/consultarProduto';
    try {
      let resp = await axios.get(url);
      setConsulProduct(resp.data);
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
    }
  }

  useEffect(() => {
    buscar();
  }, []);

   return (
    <div className="pagina-catálogo">
      <Head />
      <div className="page-center">
        <input type="text" placeholder='  O que procura?' />
        <h2 className='page-title'>Cardápio</h2>
        <div className="cards_products">
          {consulProduct.map(item => (
            <Link to={`/Produto/${item.id}`} className='card' key={item.id}>
              <div className='card'>
                <img src={item.imagem || "/assets/image/bolo.jpeg"} alt={item.nome} />
                <h3>{item.nome}</h3>
                <p>R${item.valor}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Baseboard />
    </div>
  );
}