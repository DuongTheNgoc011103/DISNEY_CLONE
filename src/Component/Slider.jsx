import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
const screenWidth = window.innerWidth;
function Slider() {
    const [movieList, setMovieList] = useState([]);
    
    const elementRef = useRef();
    
    useEffect(() => {
      getTrendingMovies();  
    },[])
    
    const getTrendingMovies = () => {
        GlobalAPI.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })        
    }
    
    const sliderRight = (element) => {
        element.scrollLeft+= screenWidth - 110;
    }
    
    const sliderLeft = (element) => {
        element.scrollLeft-= screenWidth - 110;
    }
  return (
    <div className='relative'>
        <GoChevronLeft className='hidden md:block absolute cursor-pointer mx-5 left-0 text-white text-[40px] z-10 top-0 mt-[190px]'
        onClick={()=>sliderLeft(elementRef.current)}/>
        <div className='flex overflow-x-auto scrollbar-hide w-full px-16 py-4 scroll-smooth'
        ref={elementRef}>
            {movieList.map((item, index) => (
                <img src={IMAGE_BASE_URL + item.backdrop_path} key={index} alt="" 
                className='min-w-full md:h-[400px] object-cover
                object-left-top mr-5 rounded-3xl
                hover:outline hover:outline-[4px] hover:outline-gray-400
                transition-all duration-100 ease-in-out'/>
            ))}
        </div>
        <GoChevronRight className='hidden md:block absolute cursor-pointer mx-5 right-0 text-white text-[40px] z-10 top-0 mt-[190px]'
        onClick={()=>sliderRight(elementRef.current)}/>
    </div>
  )
}

export default Slider
