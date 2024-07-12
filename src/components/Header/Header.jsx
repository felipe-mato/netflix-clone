import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
    <header>
      <div className="container flexSB">
        <nav className='flexSB'>
          <div className="logo">
          <Link to={`/`}> 
            <img src="/img/logo.png" alt="Logo" />
          </Link>
          </div>
          <ul
           className={Mobile? "navMenu-list":'flexSB'}
           onClick={() => setMobile(false)}
          >
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/series'>Series</Link>
            <Link className='nav-link' to='/movies'>Filmes</Link>
            <Link className='nav-link' to='/pages'>Paginas</Link>
            <Link className='nav-link' to='/pricing'>Assinaturas</Link>
            <Link className='nav-link' to='/contact'>Contato</Link>
          </ul>
          <button
           className='toggle'
           onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? <i className='fa fa-times'></i>:<i className='fa fa-bars'></i>}
          </button>
        </nav>
        <div className="account flexSB">
          <i className='fa fa-search'></i>
          <i className='fa fa-bell'></i>
          <i className='fa fa-user'></i>
          <NavLink
            to='/login'
            className='login-btn'
          >
            Login
          </NavLink>
        </div>
      </div>
    </header>
    </>
  )
}
