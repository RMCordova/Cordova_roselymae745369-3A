import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import { BrowserRouter as router, Routes, Route, Router } from 'react-router-dom';
import Navbar from './Nav';
import Login from './LogIn';
import Registration from './Registration';

function App()
{
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='Nav' element= {<Navbar />} />
          <Route path='LogIn' element= {<Login />} />
          <Route path='Registration' element= {<Registration />} />
        </Routes>
    </Router>
  )
}

export default App;
