import './index.scss'
import objeto_sobre from './imagens/objeto_sobre.png'


function About() {
    return (
        <>
            <section id='about'>
                <div className='d-flex justify-content-between align-items-center container w-768'>
                    <div className='conteudo_sobre'>
                        <h2>SOBRE</h2>
                        <p>Sou um desenvolvedor apaixonado por transformar ideias em realidade digital. Minha jornada na programação começou com o fascínio pela capacidade de criar mundos inteiros com linhas de código. Com foco em Front-End, busco construir interfaces intuitivas e experiências de usuário memoráveis. Atualmente, exploro o universo do Back-End, expandindo meu conhecimento para criar aplicações web completas e robustas.</p>
                        <div>
                            <div className='btn_sobre'>
                                <a href="https://drive.google.com/file/d/1UIyBI7SOjsUjCdLNrem6unizfh7nxCNz/view?usp=sharing" target='blank'>Currículo</a>
                            </div>
                            <div className='btn_sobre'>
                                <a href="https://wa.me/5574998136456" target='blank'>Contato</a>
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