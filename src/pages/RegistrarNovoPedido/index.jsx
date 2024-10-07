import './index.scss';
// import { useState } from 'react';
import Contador from '../../components/contador';

export default function NovoPedido() {

    return (
        <div className='pagina-novo-pedido'>

                <img src="" alt="Error" />
                <h1>Novo pedido</h1>

            <div className='informacoes-pedido'>

                <div className='inputs'>

                    <div className='input'>
                        <h3>Nome Cliente:</h3>
                        <input type="text" />
                    </div>                   
                    <div className='input'>
                        <h3>Endereço:</h3>
                        <input type="text" />
                    </div>

                </div>

                <div className='inputs'>

                    <div className='input'>
                        <h3>WhatsApp:</h3>
                        <input type="text" />
                    </div>
                    <div className='input'>
                        <h3>Telefone:</h3>
                        <input type="text" />
                    </div>
                </div>
                <div className='inputs'>

                    <div className='Contador'>
                        <Contador/>
                    </div>

                    <div className='input'>
                        <h3>Valor:</h3>
                        <input type="" />
                    </div>
                </div>
            </div>
            <div className='forma-de-pagamento'>
            <h3>Forma de pagamento:</h3>
            <input className='pagamento' type="text" />
            </div>
            <div className='butoes'>
                <button>Salvar</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}