import { Link } from 'react-scroll'
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
              <li className='item-menu'>
                <Link to="about" smooth={true} duration={500} spy={true}>
                Home
              </Link>
              </li>
              <li className='item-menu'>
                <Link to="destaques-projetos" smooth={true} duration={500} spy={true}>
                Projetos
              </Link>
              </li>
              <li className='item-menu'>
                <Link to="cv" smooth={true} duration={500} spy={true}>
                Sobre
              </Link>
              </li>
              <li className='item-menu'>
                <Link to="footer" smooth={true} duration={500} spy={true}>
                Contato
              </Link></li>
            </ul>
          </nav>
        
      
    </header></>
  )
}

export default Header
