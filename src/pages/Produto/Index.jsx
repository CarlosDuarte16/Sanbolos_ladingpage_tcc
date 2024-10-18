import './Index.scss';
import { useParams } from 'react-router-dom';
import Head from '../../components/header/Index';
import Baseboard from '../../components/baseboard/Index';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Produto() {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [descrição, setDescrição] = useState('');
  const [valor, setValor] = useState('');
  const [loading, setLoading] = useState(true);

  async function carregarProduto() {
    try {
      const url = `http://localhost:5001/api/consultarProduto/${id}`;
      let resp = await axios.get(url);

      const produto = resp.data;
      setNome(produto.nome);
      setDescrição(produto.descrição);
      setValor(produto.preço);
    } catch (error) {
      console.error('Erro ao carregar o produto', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarProduto();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="pagina-produto">
      <Head />
      <div className="page-center">
        <input type="text" placeholder='  O que procura?' />
        <div className='img-text'>
          <img src="/assets/image/bolo.jpeg" alt={nome} />
          <div className="description-product">
            <h1>{nome}</h1>
            <h3>R${valor}</h3>
            <p>{descrição}</p>
          </div>
          <div className="direct-whatsapp">
            <img src="/assets/icons/whatsapp.png" alt="WhatsApp" />
            <h3>Fale conosco no WhatsApp</h3>
          </div>
        </div>
      </div>
      <Baseboard />
    </div>
  );
}
