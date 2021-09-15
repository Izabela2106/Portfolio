import React from 'react';
import './index.css'
import Home from './pages'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


function App(){
    return(
        <Router>
        <Switch>
        <Route path='/' component={Home} exact />
        </Switch>
        </Router>
    )
}

export default App