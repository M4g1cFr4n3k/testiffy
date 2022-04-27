import React from 'react'
import '../../App.css'
import Navbar from '../Navbar.js';
import Footer from '../Footer';
import SolvingTest from '../SolvingTest.js'



function SolveTest(theme, switchTheme){
    
    return(
        <>
            <div id="solveTest" theme={theme}>
                <Navbar switchTheme={switchTheme}/>
                <SolvingTest theme={theme}/>
                <Footer />
            </div>
        </>
    )
}
export default SolveTest;