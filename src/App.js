// import logo from './logo.svg';
import React from 'react';

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ExperiencePage from './pages/ExperiencePage'
import './App.css';
import NavBar from './component/NavBar';
import { Route,Routes } from 'react-router-dom';


function App() {

  return (
      <>
        <NavBar /> 
          <div className='container'>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/exp" element={<ExperiencePage />} />
              </Routes>
          </div>
      </>
  
  );
}

export default App;
