import './Index.scss';
import { Link } from 'react-router-dom';

export default function Baseboard(){

  return(
    <div className="comp-baseboard">
      <img className='logo-baseboard' src="./assets/image/logo.png" alt="" />
      <div className="whats">
        <img src="./assets/image/whatsapp.png" alt="" />
        <p className='link'>(xx)xxxxx-xxxx</p>
      </div>
      <div className="insta">
        <img src="./assets/image/Instagram.png" alt="" />
        <Link className='link'>@xxxxxxxx</Link>
      </div>
      <div className="local">
        <img src="./assets/image/Local.png" alt="" />
        <Link className='link'>São Paulo/SP</Link>
      </div>
      <div className="email">
        <img src="./assets/image/email.png" alt=  "" />
        <Link className='link'>ra00000000000@acaonsfatima.org.br</Link>
      </div>
    </div>
  )
}