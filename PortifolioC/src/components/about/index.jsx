import './index.scss'
import objeto_sobre from './imagens/objeto_sobre.png'


function About() {
    return (
        <>
            <section id='about'>
                <div className='d-flex justify-content-between align-items-center container w-768'>
                    <div className='conteudo_sobre'>
                        <h2>SOBRE</h2>
                        <p>Acredito que um bom front-end é essencial para o sucesso de qualquer projeto digital. Por isso, me dedico a criar soluções de alta qualidade.</p>
                        <div>
                            <div className='btn_sobre'>
                                <a href="https://drive.google.com/file/d/1UIyBI7SOjsUjCdLNrem6unizfh7nxCNz/view?usp=sharing" target='blank'>Currículo</a>
                            </div>
                            <div className='btn_sobre'>
                                <a href="https://wa.me/5574998136456" target='blank'>Entre em Contato</a>
                            </div>
                        </div>
                    </div>
                    <div>
                    <img src={objeto_sobre} alt=""  className='img_sobre'/>
                    </div>
                </div>
            </section>
        </>
    )
}




export default About