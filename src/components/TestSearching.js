import React from 'react'
import './TestSearching.css'
import { Input } from './Input'
import { Button } from './Button'
import axios from 'axios'
import TestList from './TestList'

function TestSearching() {
    return (
        <div className='testSearching-container'>
            <h1>Dostępne Testy:</h1>
            <TestList />
            <h1>Jeżeli nie ma testu który cie interesuje możesz dodać test</h1>
            <Button link='/AddTest' buttonStyle='btn--outline' buttonSize='btn--large'>Dodaj test</Button>
        </div>
    )
}

export default TestSearching
