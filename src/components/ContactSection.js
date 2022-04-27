import React from 'react'
import { Button } from './Button'
import './ContactSection.css'


function ContactSection() {
    return (
        <div className='contact-container'>
            <h1>
                Potrzebujesz Pomocy?
            </h1>
            <p>
            Z mniejszymi sprawami nasi konsultanci pomogą ci odrazu na chatcie 😉
            </p>
            <p>
                Z większymi sprawami prosimy pisać na maila 😎
            </p>
            <div className='contact-btns'>
            <Button className='contact-btn' buttonSize='btn--large' buttonStyle='btn--primary'>
                <i class="fa-solid fa-message"></i>
            </Button>
            <Button class='contact-btn' buttonSize='btn--large' buttonStyle='btn--outline' onClick='mailto:mail@mail.com'>
                <i class="fa-solid fa-envelope" />
            </Button>
            </div>
            <h2>
            </h2>
        </div>
    )
}

export default ContactSection