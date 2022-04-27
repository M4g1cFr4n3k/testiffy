import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import TestSearching from '../TestSearching'

function ChoseTest(theme, switchTheme) {
    return (
        <div theme={theme}>
            <Navbar switchTheme={switchTheme} />
            <TestSearching />
            <Footer />
        </div>
    )
}

export default ChoseTest
