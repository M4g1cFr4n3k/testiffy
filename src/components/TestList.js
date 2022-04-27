import React from 'react';
import axios from 'axios';
import './TestList.css';
import ExerciseTest from './ExerciseTest'
import { Link } from 'react-router-dom';

const api = axios.create({
    baseURL: `http://localhost:8080`
})

export default class TestList extends React.Component {

    state = {
        tests: []
    }

    constructor(){
        super();
        api.get('/tests').then(res => {
            console.log(res.data)
            this.setState({ tests: res.data})
        })
    }
  render() {
    return (
      <ul>
        {
            this.state.tests.map(test => <Link to={`/Test/${test.id}`}><li className='tests' key={test.id}><ExerciseTest text={test.name} check='no' size='big' dataTooltip="kliknij aby rozwiązać test"/></li></Link>)
        }
      </ul>
    )
  }
}
