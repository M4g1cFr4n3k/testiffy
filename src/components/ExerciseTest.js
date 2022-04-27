import React from 'react'
import { Button } from './Button'
import './ExerciseTest.css'

const ExerciseTest = ({
    text,
    size,
    check,
    dataTooltip,
    dataTooltipCheck
}
) => {
    return (
        <div className='exerciseTest-container'>
            <input type='radio' name='corect' className={check} data-flow="right" data-tooltip={dataTooltipCheck}/>
            <p className={size} data-flow="bottom" data-tooltip={dataTooltip}>{text}</p>
        </div>
    )
}

export default ExerciseTest
