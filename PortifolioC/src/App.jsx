import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'
import About from './components/about'
import Habilidades from './components/Habilidades'
import Projetos from './components/projetos'
import Cv from './components/mais_sobre'
import Footer from './components/footer'
import './global.css'

function App() {

  

  return (
    <>
    <Header/>
      <About/>
      <Habilidades/>
      <Projetos/>
      <Cv/>
      <Footer/>
    </>
  )
}

export default App
