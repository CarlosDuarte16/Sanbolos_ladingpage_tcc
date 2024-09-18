import './Index.scss';
// import { Link } from 'react-router-dom';
import Head from '../../components/header/Index';
import Baseboard from '../../components/baseboard/Index';
import Vitrini from '../../components/vitrini';
// import { useEffect, useState } from 'react';
//https://media.discordapp.net/attachments/1232382615898816574/1285607334126682145/bolo1.png?ex=66eb8b61&is=66ea39e1&hm=77cd07ecbd8e9030c76124d1bc6f2fe622fb940b95818212d11ebbc55e384670&=&format=webp&quality=lossless

export default function Catálogo() {

  let mapeamento = [{
    imagem:'https://media.discordapp.net/attachments/1232382615898816574/1285607334126682145/bolo1.png?ex=66eb8b61&is=66ea39e1&hm=77cd07ecbd8e9030c76124d1bc6f2fe622fb940b95818212d11ebbc55e384670&=&format=webp&quality=lossless',
    titulo:'bolo de de chocolate com cobertura de morango trufado',
    preco:'R$50,00'
  },
  {
    imagem:'https://media.discordapp.net/attachments/1232382615898816574/1285607334550175754/bolo2.png?ex=66eb8b61&is=66ea39e1&hm=67a9ac4313a6bc925bece9ae974e1ea910ce07a02ef597669dbc69d6e1f7f6d7&=&format=webp&quality=lossless',
    titulo:'',
    preco:''
  },
  {
    imagem:'https://media.discordapp.net/attachments/1232382615898816574/1285607334902759527/bolo3.png?ex=66eb8b62&is=66ea39e2&hm=0617cd0978ffebfe1b804bc9d7a4a97d5bbb9002ec68a427e8e459876adea87e&=&format=webp&quality=lossless',
    titulo:'',
    preco:''
  },
  {
    imagem:'https://media.discordapp.net/attachments/1232382615898816574/1285607335213006899/bolo4.png?ex=66eb8b62&is=66ea39e2&hm=f7085f1fbdd21420c4bbcb590958e22df866afdfd86e93f0841bf688e09d167d&=&format=webp&quality=lossless',
    titulo:'',
    preco:''
  },
  {
    imagem:'https://media.discordapp.net/attachments/1232382615898816574/1285607335938752534/bolo5.png?ex=66eb8b62&is=66ea39e2&hm=4bb5f0027db788f6ce09c033f5bb2b45e7053958221227f68be48483aeb67521&=&format=webp&quality=lossless',
    titulo:'',
    preco:''
  },
  {
    imagem:'https://media.discordapp.net/attachments/1232382615898816574/1285607336244678787/bolo6.png?ex=66eb8b62&is=66ea39e2&hm=2ee92821abeb940f0788760da727de3e05343e1a746740c15080345d7bb96100&=&format=webp&quality=lossless',
    titulo:'',
    preco:''
  },
  {
    imagem:'https://media.discordapp.net/attachments/1232382615898816574/1285607336538411071/bolo7.png?ex=66eb8b62&is=66ea39e2&hm=d2bd1bd71b3edcc7f62d52ec45d610885998969039ecb253d97039f05ad19368&=&format=webp&quality=lossless',
    titulo:'',
    preco:''
  },
  {
    imagem:'https://media.discordapp.net/attachments/1232382615898816574/1285607336764768256/bolo8.png?ex=66eb8b62&is=66ea39e2&hm=08ab886558dc24f6ffd51f50538100b28290272082b691d75bd97ac6d71a6c49&=&format=webp&quality=lossless',
    titulo:'',
    preco:''
  }

]


  return (
    <div className="pagina-catálogo">
      <Head />
      <div className="page-center">
        <input type="text" placeholder='  O que procura?' />
        <h2 className='page-title'>Cardápio</h2>
      </div>

      <div className='vitrini'>

      {mapeamento.map(item => (
          <Vitrini
            imagem={item.imagem}
            titulo={item.titulo}
            preco={item.preco}
          />
        ))}
      </div>
      <Baseboard />
    </div>

  )
} 