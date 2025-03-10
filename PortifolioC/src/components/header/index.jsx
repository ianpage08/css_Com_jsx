
import React, { useState } from 'react';

import './index.scss'




const Header = () =>  {

  
    const [menuAberto, setMenuAberto] = useState(false);
    const [hamburguerAberto, setHaburguerberto] = useState(false)
  
    const alternarMenu = () => {
      setMenuAberto(!menuAberto);
      setHaburguerberto(!hamburguerAberto);
    };
    

  return (
    <>
    <header className='header '>
      <div className='container d-flex justify-content-between align-items-center'>
        <div>
          <input type="checkbox" className='btn-tema' value=""/>
        </div>
        <div>
          <h1>Portifólio</h1>
        </div>
          <div id='menu-hamburguer' onClick={alternarMenu} >
            <div  className={`linha-menu ${hamburguerAberto ? 'fechar' : ''}`}></div>
            <div  className={`linha-menu ${hamburguerAberto ? 'fechar' : ''}`}></div>
            <div  className={`linha-menu ${hamburguerAberto ? 'fechar' : ''}`}></div>
          </div> 
          </div>
          <nav id='menu' >
            <ul  className={`menu-lista ${menuAberto ? 'aberto' : ''}`}  >
              <li className='item-menu'><a href="#">Home</a></li>
              <li className='item-menu'><a href="#">Sobre</a></li>
              <li className='item-menu'><a href="#">Projetos</a></li>
              <li className='item-menu'><a href="#">Contato</a></li>
            </ul>
          </nav>
        
      
    </header></>
  )
}

export default Header
