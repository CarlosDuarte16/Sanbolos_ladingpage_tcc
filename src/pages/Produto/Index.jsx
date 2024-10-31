import './Index.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from '../../components/header/Index';
import Baseboard from '../../components/baseboard/Index';

export default function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  async function carregarProduto() {
    try {
      const url = `http://localhost:5001/api/consultarProduto/${id}`;
      let resp = await axios.get(url);

      setProduto(resp.data);
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

  // Verifique se produto é nulo ou indefinido
  if (!produto) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <div className="pagina-produto">
      <Head />
      <div className="page-center">
        <input type="text" placeholder='  O que procura?' />
        <div className='img-text'>
          <img src={produto.imagem || "/assets/image/bolo.jpeg"} alt={produto.nome} />
          <div className="description-product">
            <h1>{produto.nome}</h1>
            <h3>R${produto.valor}</h3>
            <p>{produto.descrição}</p>
          </div>
          <div className="direct-whatsapp">
            <img src="/assets/image/whatsapp.png" alt="WhatsApp" />
            <h3>Fale conosco no WhatsApp</h3>
          </div>
        </div>
      </div>
      <Baseboard />
    </div>
  );
}
