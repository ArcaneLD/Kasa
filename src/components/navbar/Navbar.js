import './navbar.scss'

import { Link } from 'react-router-dom'

export default function Navbar() {

    const route = window.location.pathname;
    
    //Creating a Navbar that allows you to navigate through the different pages of the app
    return (
        <nav className='nav'>
            <ul className='nav_bar'>
                <li className={route === '/' ? 'nav_bar_link_active' : 'nav_bar_link'}>
                    <Link  to='/'>
                        Accueil
                    </Link>
                </li>
                
                <li className={route === '/apropos' ? 'nav_bar_link_active' : 'nav_bar_link'}>
                    <Link  to='/apropos'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
