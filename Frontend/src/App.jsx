import React from 'react';
import Home from './home/Home';
import {Navigate, Route, Routes} from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contactus from './contact/Contactus';
import Aboutus from './about/Aboutus';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);

  return (
    <>
      <div className='bg-violet-200'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/contact" element={<Contactus/>} />
          <Route path="/about" element={<Aboutus/>} />
        </Routes>
      </div>
      <Toaster />
    </>
    );
}

export default App
