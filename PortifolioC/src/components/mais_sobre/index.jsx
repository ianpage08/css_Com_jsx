import './index.scss'


const MaisSObreMim = () =>{
    return(
        <>
        <div id='mais-sobre-mim'>
            <div className='container d-flex justify-content-between align-items-center'>
                
                    <div className='conteudo_sobre'>
                        <h2> MAIS SOBRE</h2>
                        <p>Acredito que um bom front-end é essencial para o sucesso de qualquer projeto digital. Por isso, me dedico a criar soluções de alta qualidade. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero vitae doloribus! Magni dicta, ut doloremque veniam laudantium nesciunt, sint quia repellat esse ratione expedita quos nisi? Quibusdam, distinctio quas?</p>
                        <div>
                            <div className='btn_sobre'>
                                <a href="#">Repositorio</a>
                            </div>
                            <div className='btn_sobre'>
                                <a href="#">Curriculo</a>
                            </div>
                        </div>
                    </div>
                        <div>
                            <img src="https://placehold.co/300x300"  alt=""  className='img_sobre'/>
                        </div>
            </div>
        </div>
        </>
    )
}

export default MaisSObreMim;