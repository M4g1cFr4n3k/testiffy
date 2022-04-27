import React from 'react'
import './Input.css'

export const Input = ({
    placeholder,
    image,
    maxLength,
    size,
    checkbox,
    dataTooltip,
    dataTooltipCheck,
    required,
    onChange
}) => {
    return (
        <div className='input-container' data-tooltip={dataTooltip} data-flow="bottom">
            <i class={image} id='image'/>
            <input onChange={onChange} type='text' placeholder={placeholder} maxLength={maxLength} className={size} />
            <input type='radio' className={checkbox} name='correct' id='radio' data-tooltip={dataTooltipCheck} data-flow="right"/>
        </div>
    )
}
