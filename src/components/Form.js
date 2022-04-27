import React from 'react'
import './Form.css'
import axios from 'axios'
import { FormQuestion } from './FormQuestion.js'
import { Input } from './Input.js'
import { useState } from 'react'
import { Button } from './Button'

function Form() { 
        const [inputList, setInputList] = useState([]);
      
        const onAddBtnClick = event => {
          setInputList(inputList.concat(<FormQuestion key={inputList.length} onChange={(e) => handleQuestion(e)} />));
        };
        const [QuestionData, setQuestionData] = useState({
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            whichIsCorrect: ""
        })
        const [TestData, setTestData] = useState({
            name: "",
            numberOfQuestions: inputList.length
        })

        function handleQuestion(e) {
            const newQuestion = {...QuestionData}
            newQuestion[e.target.id] = e.target.value
            setQuestionData(newQuestion)
        }
        function handleTest(e){
            const newTest = {...TestData}
            newTest[e.target.id] = e.target.value
            setTestData(newTest)
        }
        function submit(e){
            axios.post('http://localhost:8080/tests',{
                name: TestData.name,
                numberOfQuestions: TestData.numberOfQuestions
            })
            axios.post('http://localhost:8080/questions',{
                question: QuestionData.question,
                answer1: QuestionData.answer1,
                answer2: QuestionData.answer2,
                answer3: QuestionData.answer3,
                answer4: QuestionData.answer4,
                whichIsCorrect: QuestionData.whichIsCorrect
            })
        }
        
    return (
        <div className='form-container'>
            {/* <form onSubmit={(e)=> submit(e)}> */}
                <Input placeholder='Podaj nazwę testu' image="fa-regular fa-file-lines" maxLength='40' size='input-big' checkbox='no' dataTooltip="Wpisz nazę testu"/>
                <FormQuestion onChange={(e) => handleQuestion(e)} />
                {inputList}
                <button className='plus' onClick={onAddBtnClick}><i class="fa-solid fa-plus"></i></button>
                <div className='form-btn-cont'><Button className='form-btn' buttonStyle='btn--outline' buttonSize='btn--large' onClick={(e) => submit(e)}>Zapisz test</Button></div>
            {/* </form> */}
        </div>
    )
}    

export default Form
