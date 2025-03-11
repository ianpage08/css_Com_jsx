import './index.scss'


const Cv = () =>{
    return(
        <>
        <div id='cv'>
            <div className='container d-flex justify-content-between align-items-center mais-sobre '>
                
                    <div className='conteudo-mais-sobre '>
                        <h2 > MAIS SOBRE</h2>
                        <p >Minha jornada na programação começou com a curiosidade de desvendar os segredos por trás das tecnologias que usamos diariamente. O Front-End me proporcionou a oportunidade de expressar minha criatividade e construir interfaces que encantam. Agora, no Back-End, busco aprofundar meus conhecimentos e entender a lógica por trás das aplicações web. Acredito que a paixão pelo aprendizado contínuo é a chave para se tornar um desenvolvedor completo.</p>
                        <div>
                            <div className='btn-mais-sobre '>
                                <a href="https://github.com/ianpage08" target='blank'>Repositório</a>
                            </div>
                            <div className='btn-mais-sobre ' >
                                <a href="https://drive.google.com/file/d/1UIyBI7SOjsUjCdLNrem6unizfh7nxCNz/view?usp=sharing"  target='blank'>Currículo</a>
                            </div>
                        </div>
                    </div>
                        <div >
                            <img src="https://placehold.co/300x300"  alt=""  className='img-mais-sobre'/>
                        </div>
            </div>
        </div>
        </>
    )
}

export default Cv;