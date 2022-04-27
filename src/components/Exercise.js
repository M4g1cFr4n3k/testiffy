import React from 'react'
import './Exercise.css'
import {Button} from './Button'
import percentUpdate from './SolvingTest'
import axios from 'axios'
import ExerciseTest from './ExerciseTest'
// import ExerciseService from '../services/ExerciseService'



let answer1 = "aaa";
let answer2 = "bbb";
let answer3 = "ccc";
let answer4 = "ddd";
let id = 2;

let question = "aaaaaaa"


function Exercise(){
    return(
        <div className="exercise-container">
            <ExerciseTest text={question} check='no' size='big'/>
            <ExerciseTest text={answer1} check='exercise-yes' size='medium' className='answer'/>
            <ExerciseTest text={answer2} check='exercise-yes' size='medium' className='answer'/>
            <ExerciseTest text={answer3} check='exercise-yes' size='medium' className='answer'/>
            <ExerciseTest text={answer4} check='exercise-yes' size='medium' className='answer'/>
        </div>
        
    )
}

export default Exercise;

