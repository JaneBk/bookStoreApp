import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
// import list from '../../public/list.json';
import axios from "axios";


function Freebook() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res= await axios.get("http://localhost:4001/book");
        setBook(res.data.filter((data)=>data.category==="Free"));
      }
      catch(error){
        console.log(error);
      }
    }
    getBook();
  },[]);
    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-bold text-xl pb-2 text-red-500'>Free Offered Courses</h1>
          <p className='text-base-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima accusantium esse et sunt, inventore, in cupiditate, suscipit eius dolore quod earum distinctio excepturi asperiores error ipsum hic nihil? Fuga, saepe.</p>
        </div>
    
      <div>
      <Slider {...settings}>
          {book.map((item)=>(
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
    </>
  );
}

export default Freebook;
