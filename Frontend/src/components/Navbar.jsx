import React, { useEffect, useState } from 'react';
import Login from './Login';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout';
import logopic from "../../public/logo.png";

function Navbar() {

  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 0) 
        setSticky(true);
      else
        setSticky(false);
    }
    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll',handleScroll)
  },[])
  
  const [authUser,setAuthUser]=useAuth();

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </>
  )
  return (
    <>
      <div className={`max-w-screen-2xl container text-gray-950 mx-auto md:px-10 px-4 fixed top-0 left-0 right-0 z-50 ${sticky?"sticky-navbar shadow-md bg-violet-300 duration-300 transition-all ease-in-out":""}`}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 text-xl rounded-md z-[1] mt-3 w-52 p-2 shadow">
                {navItems}   
              </ul> {/*for small screen*/}
            </div>
           
            <img src={logopic} className="w-[35px] md:w-[60px] md:h-[50px] md:ml-10" alt="logo" />
            <a className="text-2xl font-bold">bookStore</a>
        
            
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>   {/*for larger screen*/}
            </div>
            
            {authUser ? (
              <Logout />
            ):(
            <div>
              <a className="border border-purple-500 text-gray-950 px-3 py-2 rounded-md hover:bg-white hover:text-black duration-300 cursor-pointer" onClick={()=>document.getElementById("my_modal_3").showModal() } >Login</a>
              <Login/>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
