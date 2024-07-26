import React from 'react';
import Home from './home/Home';
import {Route, Routes} from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contactus from './contact/Contactus';
import Aboutus from './about/Aboutus';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/about" element={<Aboutus/>} />
      </Routes>
    </>
    );
}

export default App
