import React from 'react'
import ContactSection from '../ContactSection';
import Footer from '../Footer'
import Navbar from '../Navbar'


function Contact(theme, switchTheme) {
    return (
        <div theme={theme}>
            <Navbar switchTheme={switchTheme}/>
            <ContactSection />
            <Footer />
        </div>
    )
}

export default Contact;
