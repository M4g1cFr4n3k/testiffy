import React from 'react';
import '../App.css';
import './FormQuestion.css';
import { Input } from './Input.js';

const FormQuestion = ({
    onChange
}) => {
    return (
        <>
            <div className='formQuestion-container'>
                <form>
                        <Input placeholder='Podaj pytanie' image="fa-solid fa-circle-question" maxLength='40' size='input-big' checkbox='no' className='question' dataTooltip='Wpisz pytanie' onChange={onChange}/>
                        <Input placeholder='Podaj odpowiedź' image="fa-regular fa-1" maxLength='20' size='input-medium' checkbox='yes' className='answers' dataTooltip='Wpisz pierwszą odpowiedź' dataTooltipCheck='Zaznacz poprawną odpowiedź na pytanie' onChange={onChange}/>
                        <Input placeholder='Podaj odpowiedź' image="fa-regular fa-2" maxLength='20' size='input-medium' checkbox='yes' className='answers' dataTooltip='Wpisz drugą odpowiedź' dataTooltipCheck='Zaznacz poprawną odpowiedź na pytanie' onChange={onChange}/>
                        <Input placeholder='Podaj odpowiedź' image="fa-regular fa-3" maxLength='20' size='input-medium' checkbox='yes' className='answers' dataTooltip='Wpisz trzecią odpowiedź' dataTooltipCheck='Zaznacz poprawną odpowiedź na pytanie' onChange={onChange}/>
                        <Input placeholder='Podaj odpowiedź' image="fa-regular fa-4" maxLength='20' size='input-medium' checkbox='yes' className='answers' dataTooltip='Wpisz czwartą odpowiedź' dataTooltipCheck='Zaznacz poprawną odpowiedź na pytanie' onChange={onChange}/>
                </form>
            </div>
        </>
    )
}

export { FormQuestion }
