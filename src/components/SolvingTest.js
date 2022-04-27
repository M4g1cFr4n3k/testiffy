import React from 'react'
import Exercise from './Exercise.js'
import './SolvingTest.css'
import { Button } from './Button.js'
import { Line } from 'rc-progress'

let percent = 30;
export function percentUpdate(){
    percent += 10
}
function SolvingTest(theme){
    return(
        <>
            <div className='solvingTest-container'>
            
                <Exercise />
            </div>
        </>
    )
}

export default SolvingTest;
