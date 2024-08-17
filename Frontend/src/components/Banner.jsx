import React from 'react'
import banner from '../../public/Banner.png';
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

function Banner() {
  
  const [authUser,setAuthUser]=useAuth();

  return (
    <>
      <div className='max-w-screen-2xl container text-base-content mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
          <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
              <div className='space-y-12'>
                  <h2 className='text-4xl font-bold'>Hello, welcome to the journey of <span className='text-red-500'> Learning New Everyday</span>
                  </h2>
                  <div className='space-y-4'>
                     <p className='text-xl'>We welcome you to the most interesting lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis sed commodi est nisi nobis quae nemo repellat at labore enim perspiciatis quasi excepturi doloribus, voluptas adipisci corporis libero. Ab! We hope your journey here will be adipisicing elit. Fuga consectetur, qui numquam magnam quia perferendis quas.</p>
                    <Link to="/course">
                      <button className='mt-4 px-4 py-2 my-8 text-xl front semi-bold border border-base-content hover:bg-slate-200 rounded-full'>Discover books</button>
                    </Link>
                  </div>
                 
              </div>
          </div>
          <div className='w-full order-1 mt-20 md:w-1/2'>
              <img src={banner} className="md:w-[550px] md:h-[460px] md:ml-16" alt=""/>
          </div>
      </div>
    </>
  )
}

export default Banner
