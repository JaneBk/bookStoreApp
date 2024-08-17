import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
   
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) =>{
         console.log(data);
         toast.success('Submitted Successfully!');
         reset();
        }

  return (
    <>
     
    <div className='flex h-screen items-center justify-center'>
       <div className='w-[600px]'>
            <div className='modal-box'>
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h1 className='text-2xl font-semibold md:text-4xl'>Contact <span className='text-red-500'>us!!</span> :)</h1>

                    {/* email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' 
                        {...register("email", { required: true })}/>
                        <br />
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    
                    {/* message */}
                    <div className='mt-4 space-y-2'>
                        <span>Message</span>
                        <br />
                        <input type="text" placeholder='Enter your message' className='w-80 px-3 py-1 border rounded-md outline-none'
                        {...register("message", { required: true })}/>
                        <br />
                        {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className='flex justify-around mt-4'>
                        <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-700 duration-200">Submit</button> 
                    </div>
                </form>            
            </div>
            
        </div>
    </div>
    </>
  );
}

export default Contact
