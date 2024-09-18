import './index.scss';

export default function Vitrini(props) {
    return (
        <div className='pagina-catalogo'>
            <div className='vitrini'>

                <div className='imagem'>
                    <img src={props.imagem} alt="erro" />
                    <h1 className='page-title'>{props.titulo}</h1>
                    <h2 className='preco'>{props.preco}</h2>
                </div>
            </div>
        </div>
    )
}
