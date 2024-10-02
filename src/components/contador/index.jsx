import './index.scss'

import { useState } from 'react'

export default function Contador(props) {
    const [contador, setContador] = useState(0);

    function aumentar() {
        if (contador < (props.fim ?? 100)) {
            setContador(contador + 1)
        }
    }

    function diminuir() {
        if (contador > (props.inicio ?? 0)) {
            setContador(contador - 1);
        }
    }

    return (
        <div className='comp-contador'>
            <h1> {props.titulo} </h1>

            <div className='cont'>
                <button className='butao' onClick={diminuir}> - </button> <hr />
                    {contador}
                 <hr /> <button className='butao1'onClick={aumentar}> + </button>
            </div>
        </div>
    )
}