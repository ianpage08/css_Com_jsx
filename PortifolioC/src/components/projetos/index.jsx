import { useState } from "react";
import ReactPlayer from 'react-player'
import './index.scss'
import videoMiranda from './videos/video-prejeto-miranda.mp4'
//import api from './imagens/api.png'
import html from './imagens/html.png'
import css from './imagens/css.png'
import javascript from './imagens/js.png'
//import typescript from './imagens/typescript.png'
//import react from './imagens/react.png'
//import bootstrap from './imagens/bootstrap.png'
import sass from './imagens/sass.png'
//import redux from './imagens/redux.png'
import mirandaMaciel from './imagens/foto-projeto-miranda.jpg'
import videoEmail from './videos/Projeto-email.mp4'
import imgEmail from './imagens/Projeto E-mail.jpg'


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
                    <h2 className="text-center nome-projetos">PROJETOS</h2>
                    <h3 className="nome-destaques">Destaques</h3>
                            <div className="linha"></div>
                </div>
                <div className="d-flex  flex-wrap pw-768">
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

                                <h3 className="data-projeto"> 16/12/2024</h3>
                                <button onClick={abrirprojeto1} className="btn-ver-mais ">Ver Mais</button>
                            </div>
                        </div>
                    
                    </div>
                    <div className="destaques-projetos">
                        
                        <div className="projetos">
                            <img src={imgEmail} alt=""  className="img-projetos"/>
                            <div id="teste1">
                                <div>
                                    <h3 className="titulo-projeto">Hammer Grill</h3> 
                                    <img src={css} alt="sass" className="img-capa-tec-projetos" />
                                    <img src={html} alt="htlm" className="img-capa-tec-projetos" />
                                    
                                </div>
                                
                            </div>
                        <div className="ver-mais">
                    
                                <h3 className="data-projeto"> 12/03/2025</h3>
                                <button onClick={abrirprojeto2} className="btn-ver-mais ">Ver Mais</button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="animação">
                    <h2 className="text-center todos-projetos"> TODOS OS PROJETOS</h2>
                            <div className="m-auto linha-todos-projetos"></div>
                </div>
                <div className="d-flex  flex-wrap pw-768">
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

                                <h3 className="data-projeto"> 16/12/2023</h3>
                                <button onClick={abrirprojeto1} className="btn-ver-mais ">Ver Mais</button>
                            </div>
                        </div>
                    
                    </div>
                    <div className="destaques-projetos">
                        
                        <div className="projetos">
                            <img src={imgEmail} alt=""  className="img-projetos"/>
                            <div id="teste1">
                                <div>
                                    <h3 className="titulo-projeto">Hammer Grill</h3> 
                                    <img src={css} alt="css" className="img-capa-tec-projetos" />
                                    <img src={html} alt="htlm" className="img-capa-tec-projetos" />
                                    
                                </div>
                                
                            </div>
                            <div className="ver-mais">
                    
                                <h3 className="data-projeto"> 12/03/2025</h3>
                                <button onClick={abrirprojeto2} className="btn-ver-mais ">Ver Mais</button>
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
                    width="350px"
                    height="300px"
                    controls={true}
                    playing={true}
                    />
                    
                    <p>Desenvolver o site do escritório Miranda e Maciel Advocacia foi um projeto que me permitiu combinar minhas habilidades em design e programação para criar uma plataforma online que transmitisse profissionalismo e confiança.</p>
                </div>
                <div className="links-modal">
                        <a href="https://advocacia-miranda-maciel.vercel.app/" target="_blank">Acessar Projeto</a>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7297680164124057600/" target="_blank"> Acessar PostLinkedin</a>
                        <a href="https://github.com/ianpage08/Projeto-Advocacia-Miranda-Maciel" target="_blank"> Acessar Repositorio GitHub</a>

                </div>
            </Modal>
            <Modal aberto={projeto2aberto}
                onClose={fecharprojeto2}
                titulo= "E-mail Promocional Temático Hammer Grill">
                    <div className="conteudo-dentro-modal">
                    <ReactPlayer 
                    url={videoEmail}
                    width="350px"
                    height="300px"
                    controls={true}
                    playing={true}
                    />
                    
                    <p>Desenvolvi um e-mail promocional temático para um restaurante fictício chamado "Hammer Grill", inspirado na rica mitologia nórdica. O objetivo era criar uma peça de comunicação visualmente atraente e informativa, capaz de despertar o interesse do público e promover os pratos e a atmosfera única do restaurante.</p>
                </div>
                <div className="links-modal">
                        <a href="https://projeto-email-hammer-grill.vercel.app/" target="_blank">Acessar Projeto</a>
                        <a href="https://www.linkedin.com/posts/ian-page-miranda-maciel-b98a07212_html-css-emailmarketing-activity-7305728307629559808-bQLF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADXmDeQBkdLYg7_8IZquVW9WAOWmTjI8X28" target="_blank"> Acessar PostLinkedin</a>
                        <a href="https://github.com/ianpage08/Projeto_email_Hammer_grill" target="_blank"> Acessar Repositorio GitHub</a>

                </div>
            </Modal>
            </div>
            </>
        
    )
}

export default Projetos