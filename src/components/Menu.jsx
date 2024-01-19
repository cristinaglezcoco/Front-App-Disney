import { Link } from 'react-router-dom';
import Disney from '../images/disney.png';
import '../styles/_menu.scss'
import Hamburger from '../images/hamburguesa.png'
import { useState } from 'react';

function Menu() {

    const [showMenu, setShowMenu] = useState(false); //el valor inical de showMenu es false

    const handleMenu = () => {
       setShowMenu(!showMenu);
    }


    return (
        <header className = "container-menu">
            <div className="menu-logo"><Link to="/"><img src={Disney}></img></Link></div>
            <ul className={showMenu ? 'visible' : ''}>  
                <li onClick={handleMenu}><Link to="/movies">Películas</Link></li>
                <li onClick={handleMenu}><Link to="/characters">Personajes</Link></li>
                <li onClick={handleMenu}><Link to="/register">Registro</Link></li>
                <li onClick={handleMenu}><Link to="/login">Login</Link></li>
                <li onClick={handleMenu}><Link to="/myarea">Mi Á rea</Link></li>
            </ul>

            <div className='menu-hamburguer' onClick={handleMenu}>
                <img src={Hamburger} alt='menu'/>
            </div>
        </header>
    )

}

export default Menu;