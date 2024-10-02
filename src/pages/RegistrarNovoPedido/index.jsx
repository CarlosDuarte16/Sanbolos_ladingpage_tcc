// import { useState } from 'react';
import Contador from '../../components/contador';
import './index.scss';

export default function NovoPedido() {

    // const [valorPedido, setValorPedido] = useState(0)
    //Nome Cliente
    //Endereço
    //WhatsApp
    //Telefone
    //contador
    //Valor
    //const [nomeCliente, setNomeCliente] = useState('')
    //const [endereco, setEnderco] = useState('')
    //const [wats, setWats] = useState(0)
    //const [telefone, setTelefone] = useState(0)
    //const [valor, setValor] = useState(0)

    return (
        <div className=' pagina-novo-pedido'>

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
                        <input type="text" />
                    </div>
                </div>
            </div>

            <div className='butoes'>
                <button>Salvar</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}