import api from './imagens/api.png'
import htlm from './imagens/html.png'
import css from './imagens/css.png'
import javascript from './imagens/js.png'
import typescript from './imagens/typescript.png'
import react from './imagens/react.png'
import bootstrap from './imagens/bootstrap.png'
import sass from './imagens/sass.png'
import redux from './imagens/redux.png'

import './index.scss'



const Habilidades = () => {

    
    

    return(
        <>
            <section id='habilidades'  >
                <div className='container'>
                    <h1 id='h1-habilidades'>HABILIDADES</h1>
                    <div className="d-flex justify-content-around aling-items-center flex-wrap" id='hb'>
                        
                        <img src={htlm} alt="" className='img-habilidades'/>
                        <img src={css} alt="" className='img-habilidades'/>
                        <img src={javascript} alt=""className='img-habilidades' />
                        <img src={typescript} alt=""className='img-habilidades' />
                        <img src={react} alt="" className='img-habilidades'/>
                        <img src={api} alt="" className='img-habilidades'/>
                        <img src={bootstrap} alt="" className='img-habilidades'/>
                        <img src={redux} alt="" className='img-habilidades'/>
                        <img src={sass} alt="" className='img-habilidades'/>
                    </div>

                </div>

            </section>
        </>
    )
}       



export default Habilidades