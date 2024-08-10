import React from 'react'
import banner from '../../public/Banner.jpg'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
            <div className='space-y-12'>
                <h2 className='text-4xl font-bold'>Hello, welcome to the journey of {" "}
                        <span className='text-red-500'>Learning New Everyday</span>
                </h2>

                <p className='text-xl'>We welcome you to the most interesting lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis sed commodi est nisi nobis quae nemo repellat at labore enim perspiciatis quasi excepturi doloribus, voluptas adipisci corporis libero. Ab!</p>
                <p className='text-xl'>We hope your journey here will be adipisicing elit. Fuga consectetur, qui numquam magnam quia perferendis dolorum sequi beatae in veritatis non sint, eaque, voluptatum asperiores sapiente necessitatibus fugit fugiat quas.</p>
            </div>
        </div>
        <div className='w-full order-1 md:w-1/2'>
            <img src={banner} className='w-92 h-95'/>
        </div>
    </div>
    </>
  )
}

export default Banner
