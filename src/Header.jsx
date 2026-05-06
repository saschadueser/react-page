import './styles/Header.css'

import { useState } from 'react'

import sdLogo from './assets/logos/s-logo-100px.png'

export default function Header() {

    const [navActive, setNavActive] = useState(false);

    function toggleNav() {
        setNavActive(!navActive)
    }

    return (
        <header>
            <div className='header-logo'>
                <img src={sdLogo} alt="Logo von Sascha Dueser" />
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