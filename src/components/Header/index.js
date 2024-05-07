import './header.css'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import usuarioLogo from '../../img/usuario.png'



function Header() {
    return (
        <header>
            <Link className='logo' to='/' ><img src={logo}></img></Link>
            <Link className='item-menu' to={'/'}>Home</Link>
            <Link className='item-menu' to={'/catalogo'}>Catálogo</Link>
            <Link className='item-menu' to={'/sugestao'}>Sugestôes</Link>
            <Link className='item-menu' to={'/contato'}>Contato</Link>
            <Link className='usuarioLogo' to='#' ><img src={usuarioLogo}></img></Link>
        </header>
    )
}

export default Header;