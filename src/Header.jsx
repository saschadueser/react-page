import './styles/Header.css'

import { useState } from 'react'

export default function Header() {

    const [navActive, setNavActive] = useState(false);

    function toggleNav() {
        setNavActive(!navActive)
    }

    return (
        <header>
            <div className='header-logo'>

            </div>
            <div className={`nav-trigger ${navActive ? 'active' : ''}`} onClick={toggleNav}>
                <div className='nav-beam'></div>
                <div className='nav-beam'></div>
            </div>
            <nav className={navActive ? '' : 'inactive'}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Leistungen</a></li>
                    <li><a href="">Projekte</a></li>
                    <li><a href="">Über Mich</a></li>
                    <li><a href="">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    )
}