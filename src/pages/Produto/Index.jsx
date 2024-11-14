import './Index.scss';
import { useParams, Link } from 'react-router-dom';
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
      const url = `http://4.172.207.208:5012/consultarProdutos/${id}`;
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

  if (!produto) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <div className="pagina-produto">
      <Head />
      <div className="page-center">
        <input type="text" placeholder='  O que procura?' />
        <div className='img-text'>
          <img className='img-bolo' src={produto.imagem || "/assets/image/bolo.jpeg"} alt={produto.nome} />
          <div className="descrissoes">
            <div className="description-product">
              <h1>{produto.nome}</h1>
              <h3>R${produto.valor}</h3>
              <p>{produto.descrição}</p>
            </div>
            <div>
              <Link to="https://w.app/VZDyK5" className='direct-whatsapp'>
                <img src="/assets/image/whatsapp-black.png" alt="WhatsApp" />
                <h3>Clique aqui!Para finalizar <br /> seu pedido pelo Whatsapp!</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className='line'></div>
      </div>
      <Baseboard />
    </div>
  );
}
