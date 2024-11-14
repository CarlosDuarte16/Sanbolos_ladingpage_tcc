import './Index.scss';
import { Link, useNavigate } from 'react-router-dom';
import Head from '../../components/header/Index';
import Line from '../../components/Line/Index';
import Baseboard from '../../components/baseboard/Index';
import { useEffect, useState } from 'react';
import axios from 'axios'; 



export default function Inicio() {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate()
  // ----------------------------------
  const bolos = [
    {
      img: "./assets/image/bolo-caseiro.png",
      title: "Bolos Caseiros",
    },
    {
      img: "./assets/image/bolo-decorados.png",
      title: "Bolos Decorados",
    },
    {
      img: "./assets/image/bolo-festas.png",
      title: "Bolos para Festas",
    },
  ];

  useEffect(() => {
    const intervalo_tempo = setInterval(() => {
      setSlide((Slide1) =>
        Slide1 === bolos.length - 1 ? 0 : Slide1 + 1
      );
    }, 10000);
    return () => clearInterval(intervalo_tempo);
  }, [bolos.length]);

  function Slide1() {
    setSlide(slide === 0 ? bolos.length - 1 : slide - 1);
  };

  function Slide2() {
    setSlide(slide === bolos.length - 1 ? 0 : slide + 1);
  };

  function Catálogo() {
    navigate('/Catálogo')
  }
  // ----------------------------------

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereço, setEndereço] = useState('');
  const [telefone, setTelefone] = useState('');

  async function salvarBD() {
    const salvador = {
      "nome": nome,
      "email": email,
      "endereço": endereço,
      "telefone": telefone
    }

    const url = 'http://4.172.207.208:5012/inserirCliente';
    let resp = await axios.post(url, salvador);
    alert(`Cliente adicionada no BD. Id: ${resp.data.novoId}`)
  }

  return (
    <div className="pagina-inicio">
      <Head />
      <div className="banner-card">
        <div className="card-information" id='faixa-inicio'>
          <h2>Fale com o nosso chat virtual</h2>
          <h4>Nome Completo:</h4>
          <input type="text" placeholder='Digite seu nome' value={nome} onChange={e => setNome(e.target.value)} />
          <h4>E-mail:</h4>
          <input type="text" placeholder='Digite seu e-mail' value={email} onChange={e => setEmail(e.target.value)} />
          <h4>Celular:</h4>
          <input type="text" placeholder='(00)00000-0000 ' value={telefone} onChange={e => setTelefone(e.target.value)} />
          <button onClick={salvarBD}>Cadastre-se agora</button>
          <p>Ao continuar, você concorda em receber comunicações da <br /> SanBolos. Confira nossa <Link>Declaração de Privacidade</Link></p>
        </div>
      </div>
      <Line />
      <div className="faixa-sobre_nos" id='sobre-nos'>
        <img src="./assets/image/bolo-chocolate.png" alt="" />
        <div className="text">
          <h2>Sobre nós</h2>
          <div className="text_sobre-nos">
            <p>
              Somos uma confeitaria artesanal fundada e gerida com muito amor e dedicação por Dream Cake. Nossa missão é adoçar a vida das pessoas com bolos, tortas e doces que não apenas encantam o paladar, mas também o coração.
            </p>
            <p>Tudo começou com uma paixão pela confeitaria, que foi crescendo junto com o desejo de criar delícias que pudessem ser compartilhadas em momentos especiais. Com anos de experiência e um talento natural para a arte da confeitaria, SanBolos decidiu transformar sua paixão em um negócio, trazendo para a sua mesa receitas únicas e tradicionais, preparadas com os melhores ingredientes e um toque especial de carinho.
            </p>
          </div>
        </div>
      </div>
      <Line />
      <div className="faixa_cardapio" id='faixa-cardapio-slide'>
        <h2>Cardápio</h2>
        <p>Conheça nosso cardápio completo e solicite seu orçamento.</p>

        <div className="slide_bolos">
          <img
            src="./assets/image/seta-right.png"
            alt="Seta esquerda"
            className="left-arrow"
            onClick={Slide1}
          />
          <div className="bolo_slide">
            <img src={bolos[slide].img} alt={bolos[slide].title} />
            <h4>{bolos[slide].title}</h4>
          </div>
          <img
            src="./assets/image/seta1.png"
            alt="Seta direita"
            className="right-arrow"
            onClick={Slide2}
          />
        </div>
        <button className='button-cardapio' onClick={Catálogo}>Clique aqui para conhecer o <br /> Cardápio Completo</button>
      </div>
      <div className="rodape" id='faixa-rodape'>
        <Baseboard />
      </div>
    </div>

  )
} 