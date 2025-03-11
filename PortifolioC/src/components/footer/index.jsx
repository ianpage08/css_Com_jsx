import './index.scss'

import Github from './imagens/GitHub.png'
import Linkedin from './imagens/Linkedin.png'
import email from './imagens/e-mail.png'
import celular from './imagens/cel.png'




const Footer = () =>{
    return(
        <>
        <div id='footer'>
            <div className='container'>
                <div className='conteudo-footer'>
                    <h2>ENTRE EM CONTATO</h2>
                    <div className='d-flex justify-content-around align-items-center link-display-w768 '>
                        <div className='links-footer'>
                            <a href="#">
                                <img src={Github} alt="Github" />
                                <h4>GitHub</h4>
                                <p>@ianpage08</p>
                            </a>
                            
                        </div>
                        <div className='links-footer'>
                            <a href="#">
                                <img src={Linkedin} alt="linkedin" />
                                <h4>Linkedin</h4>
                                <p>@ianpage08</p>
                            </a>
                            
                        </div>
                        <div className='links-footer'>
                            <a href="#">
                                <img src={celular} alt="celular" />
                                <h4>Telefone</h4>
                                <p>(74) 99813-6456</p>
                            </a>
                            

                        </div>
                        <div className='links-footer'>
                            <a href="#">
                                <img src={email} alt="email" />
                                <h4>E-mail</h4>
                                <p>ianpage27@gmail.com</p>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Footer;
