import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import useLocalStorage from 'use-local-storage';
import Home from './components/pages/Home.js';
import Contact from './components/pages/Contact';
import SolveTest from './components/pages/SolveTest';
import axios from 'axios';
import AddTest from './components/pages/AddTest';
import ChoseTest from './components/pages/ChoseTest';


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
          { Home(theme, switchTheme) }
        </Route>
        <Route exact path='/Contact'>
          { Contact(theme, switchTheme) }
        </Route>
        <Route exact path='/AddTest'>
          { AddTest(theme, switchTheme)}
        </Route>
        <Route exact path='/ChoseTest'>
          { ChoseTest(theme, switchTheme)}
        </Route>
        <Route exact path='/SolveTest'>
          { SolveTest(theme, switchTheme)}
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
