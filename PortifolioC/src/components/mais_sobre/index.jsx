import './index.scss'


const Cv = () =>{
    return(
        <>
        <div id='cv'>
            <div className='container d-flex justify-content-between align-items-center  '>
                
                    <div className='conteudo-mais-sobre '>
                        <h2 > MAIS SOBRE</h2>
                        <p >Acredito que um bom front-end é essencial para o sucesso de qualquer projeto digital. Por isso, me dedico a criar soluções de alta qualidade. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero vitae doloribus! Magni dicta, ut doloremque veniam laudantium nesciunt, sint quia repellat esse ratione expedita quos nisi? Quibusdam, distinctio quas?</p>
                        <div>
                            <div className='btn-mais-sobre '>
                                <a href="#">Repositorio</a>
                            </div>
                            <div className='btn-mais-sobre '>
                                <a href="#" className='animação'>Curriculo</a>
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