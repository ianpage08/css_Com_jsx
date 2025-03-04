import React from 'react'
import './components/source/main.scss'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'

function App() {
  

  return (
    <>
    <Header/>
      <div><h1>Olá mundo</h1></div>
      
      <button className='btn-primary btn'>Botão</button>
      
    </>
  )
}

export default App
