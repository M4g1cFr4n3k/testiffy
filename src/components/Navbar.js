import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import './Navbar.css';
import '../App.css';
import {Button} from './Button.js';



function Navbar({ theme, switchTheme }) {
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [colorClick, setColorClick] = useState(true);

    const handleColorClick = () => setColorClick(!colorClick);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    const custom = () => {
        switchTheme();
        handleColorClick();
    }
    useEffect(() => {
        showButton();
    }, [])
    
    // naprawa buga z wyswietlaniem przycisku na srodku po odswiezeniu

    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src="logoBlueSmall.png" />
                </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-color' onClick={custom}>
                            <i className={colorClick ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}/>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Strona Główna
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/AddTest' className='nav-links' onClick={closeMobileMenu}>
                                Dodaj Test
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                                Kontakt
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/ChoseTest' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Rozwiąż Test
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' link='/SolveTest'>Rozwiąż Test</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;