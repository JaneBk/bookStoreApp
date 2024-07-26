import React from 'react';
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom"

function Course() {
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-red-500'>here!!</span> :)</h1>
        <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam deleniti aliquid omnis ipsam, vel consectetur quod illum harum delectus itaque obcaecati incidunt repellendus voluptatibus! Earum facere, cum minus in natus, et deleniti corporis nemo at totam hic deserunt sit. Asperiores exercitationem praesentium totam minus nemo dolore fugiat debitis officia officiis!</p>
        <Link to="/">
        <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300 mt-6 cursor-pointer'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
      </div>
    </div>
   </>
  );
}

export default Course;
