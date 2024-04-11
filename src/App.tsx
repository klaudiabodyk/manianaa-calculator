import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import CalculatorContainer from "./calculatorManiany/CalculatorContainer";

const App = () => {
    return (
        <Router>
            <CalculatorContainer />
        </Router>
    );
}

export default App;