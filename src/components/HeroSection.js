import React from 'react'
import './HeroSection.css'
import {Button} from './Button.js'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Studying is everything</h1>
            <p>Darmowe testy do rozwiązania.</p>
            <br/>
            <p>A może ty dodasz test? Na co czekasz?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' link='/solveTest'>Rozwiąż Test!</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' link='/addTest'>Dodaj Test!</Button>
            </div>
        </div>

    )
}

export default HeroSection

