import './Index.scss';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Head(){

  function scrool(el){
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return(
    <div className="comp-head">
      <header>
        <div className="head">
          <div className="left-logo">
            <img src="./assets/image/logo.png" alt="" />
          </div>
              <div className="right-options">            
                <HashLink scroll={scrool} className="Link" to="#faixa-inicio">Home</HashLink>
                <HashLink scroll={scrool} className="Link" to="#faixa-rodape">Contatos</HashLink>
                <HashLink scroll={scrool} className="Link" to="#faixa-cardapio-slide">Cardápio</HashLink>
                <HashLink scroll={scrool} className="Link" to="#sobre-nos">Sobre nós</HashLink>      
              </div>
          </div>
      </header>
    </div>
  )
}