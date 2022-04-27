import React from 'react'
import Navbar from '../Navbar'
import Form from '../Form'
import Footer from '../Footer'


function AddTest(theme, switchTheme) {
    return (
        <div theme={theme}>
            <Navbar switchTheme={switchTheme}/>
            <Form />
            <Footer />
        </div>
    )
}

export default AddTest
