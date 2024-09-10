import './Index.scss';
import { Link } from 'react-router-dom';

export default function Head(){

  return(
    <div className="comp-head">
      <header>
        <div className="head">
          <div className="left-logo">
            <img src="./assets/image/logo.png" alt="" />
          </div>
              <div className="right-options">            
                <Link className="Link" to="">Home</Link>
                <Link className="Link" to="">Contatos</Link>
                <Link className="Link" to="">Cardápio</Link>
                <Link className="Link" to="">Sobre nós</Link>      
              </div>
          </div>
      </header>
    </div>
  )
}