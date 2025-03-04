import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

function Header() {
  return (
    <header className='container header'>
      <nav>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
