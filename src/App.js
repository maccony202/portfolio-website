
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Projects from './Components/Pages/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
         <Routes>
         <Route path='/' element={<Home />}>
        </Route>
        <Route path='/about' element={<About />}>
        </Route>
        <Route path='/projects' element={<Projects />}>
        </Route>
        <Route path='/contact' element={<Contact />}>
        </Route>
         </Routes>
       
    </BrowserRouter>
  );
}

export default App;
