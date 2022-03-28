import './App.css';
import React from 'react'
import Header from './components/Header';
import Links from './components/Links';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Header />
    <Links />
    </Router>
  );
}

export default App;
