import React from 'react';
import '../../App.css'
import { Route } from 'react-router-dom'
import HeroSection from '../HeroSection';
import Navbar from '../Navbar.js';
import Footer from '../Footer';
import useLocalStorage from 'use-local-storage';

function Home(theme, switchTheme) {
    return(
        <>
        <div className='home' theme={theme}>
            <Navbar switchTheme={switchTheme} theme={theme}/>
            <HeroSection />
            <Footer />
        </div>
        </>
    )
}


export default Home;