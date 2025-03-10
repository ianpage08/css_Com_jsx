import { useState } from "react";
import ReactPlayer from 'react-player'
import './index.scss'
import videoMiranda from './videos/video-prejeto-miranda.mp4'
//import api from './imagens/api.png'
import html from './imagens/html.png'
//import css from './imagens/css.png'
import javascript from './imagens/js.png'
//import typescript from './imagens/typescript.png'
//import react from './imagens/react.png'
//import bootstrap from './imagens/bootstrap.png'
import sass from './imagens/sass.png'
//import redux from './imagens/redux.png'
import mirandaMaciel from './imagens/foto-projeto-miranda.jpg'


const Modal = ({aberto, onClose, titulo, children}) => {
    if(!aberto) return null

    return(
        <>
        <div className="modal-fundo">
                <div className="modal-conteudo">
                    <div className="header-modal">
                        <h2>{titulo}</h2>
                        <button onClick={onClose} className="btn btn-danger">X</button>
                    </div>
                    
                    {children}
                    
                </div>
        </div>
        </>
    )
}


const Projetos = () => {
    const [projeto1aberto, setProjeto1aberto] = useState(false)
    const [projeto2aberto, setProjeto2aberto] = useState(false)

    const abrirprojeto1 =  () => {setProjeto1aberto(true)
        
    }
    const fecharprojeto1 = () => setProjeto1aberto(false)

    const abrirprojeto2 =  () => setProjeto2aberto(true)
    const fecharprojeto2 = () => setProjeto2aberto(false)
    
    return ( 
        <>
        <div id="destaques-projetos">
            <div className="container" >
                <div className="animação">
                    <h2 className="text-center nome-projetos">Projetos</h2>
                    <h3 className="nome-destaques">Destaques</h3>
                            <div className="linha"></div>
                </div>
                <div className="d-flex  flex-wrap">
                    <div className="destaques-projetos">
                        
                        <div className="projetos">
                            <img src={mirandaMaciel} alt=""  className="img-projetos"/>
                            <div id="teste1">
                                <div>
                                    <h3 className="titulo-projeto">Miranda E Maciel</h3> 
                                    <img src={sass} alt="sass" className="img-capa-tec-projetos" />
                                    <img src={html} alt="htlm" className="img-capa-tec-projetos" />
                                    <img src={javascript} alt="javascript"  className="img-capa-tec-projetos"/>
                                </div>
                                
                            </div>

                            <div className="ver-mais">

                                <h3 className="data-projeto"> Miranda Maciel</h3>
                                <button onClick={abrirprojeto1} className="btn btn-primary ">Ver Mais</button>
                            </div>
                        </div>
                    
                    </div>
                    <div className="destaques-projetos">
                        
                        <div className="projetos">
                            <img src="https://placehold.co/350x250" alt=""  className="img-projetos"/>
                            <div id="teste1">
                                <div>
                                    <h3 className="titulo-projeto">Miranda E Maciel</h3> 
                                    <img src={sass} alt="sass" className="img-capa-tec-projetos" />
                                    <img src={html} alt="htlm" className="img-capa-tec-projetos" />
                                    <img src={javascript} alt="javascript"  className="img-capa-tec-projetos"/>
                                </div>
                                
                            </div>
                        <div className="ver-mais">
                    
                                <h3 className="data-projeto"> Miranda Maciel</h3>
                                <button onClick={abrirprojeto2} className="btn btn-primary ">Ver Mais</button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="animação">
                    <h2 className="text-center todos-projetos"> Todos os Projetos</h2>
                            <div className="m-auto linha-todos-projetos"></div>
                </div>
                <div className="d-flex  flex-wrap">
                    <div className="destaques-projetos">
                        
                        <div className="projetos">
                            <img src={mirandaMaciel} alt=""  className="img-projetos"/>
                            <div id="teste1">
                                <div>
                                    <h3 className="titulo-projeto">Miranda E Maciel</h3> 
                                    <img src={sass} alt="sass" className="img-capa-tec-projetos" />
                                    <img src={html} alt="htlm" className="img-capa-tec-projetos" />
                                    <img src={javascript} alt="javascript"  className="img-capa-tec-projetos"/>
                                </div>
                                
                            </div>

                            <div className="ver-mais">

                                <h3 className="data-projeto"> Miranda Maciel</h3>
                                <button onClick={abrirprojeto1} className="btn btn-primary ">Ver Mais</button>
                            </div>
                        </div>
                    
                    </div>
                    <div className="destaques-projetos">
                        
                        <div className="projetos">
                            <img src="https://placehold.co/350x250" alt=""  className="img-projetos"/>
                            <div id="teste1">
                                <div>
                                    <h3 className="titulo-projeto">Miranda E Maciel</h3> 
                                    <img src={sass} alt="sass" className="img-capa-tec-projetos" />
                                    <img src={html} alt="htlm" className="img-capa-tec-projetos" />
                                    <img src={javascript} alt="javascript"  className="img-capa-tec-projetos"/>
                                </div>
                                
                            </div>
                            <div className="ver-mais">
                    
                                <h3 className="data-projeto"> Miranda Maciel</h3>
                                <button onClick={abrirprojeto2} className="btn btn-primary ">Ver Mais</button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <Modal aberto = {projeto1aberto}
                onClose = {fecharprojeto1}
                titulo = "Projeto Miranda E Maciel Advocacia">

                <div className="conteudo-dentro-modal">
                    <ReactPlayer
                    url={videoMiranda}
                    width="400px"
                    height="300px"
                    controls={true}
                    playing={true}
                    />
                    
                    <p>Desenvolver o site do escritório Miranda e Maciel Advocacia foi um projeto que me permitiu combinar minhas habilidades em design e programação para criar uma plataforma online que transmitisse profissionalismo e confiança.</p>
                </div>
                <div className="links-modal">
                        <a href="#">Acessar Projeto</a>
                        <a href="#"> Acessar PostLinkedin</a>
                        <a href="#"> Acessar Repositorio GitHub</a>

                </div>
            </Modal>
            <Modal aberto={projeto2aberto}
                onClose={fecharprojeto2}
                titulo= "Projeto 2">
            
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tenetur consequuntur quos in assumenda reiciendis sequi voluptate dignissimos adipisci aspernatur sit porro magni, voluptatem consectetur alias quasi laudantium quisquam delectus.</p>
            </Modal>
            </div>
            </>
        
    )
}

export default Projetos