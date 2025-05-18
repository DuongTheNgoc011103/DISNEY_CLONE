import React from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import MovieCard from './MovieCard'
import HrMovieCard from './HrMovieCard'
const screenWidth = window.innerWidth;
function MovieList({genreId,index_}) {
    const elementRef = useRef();
    
    const [movieList, setMovieList] = useState([])
    
    useEffect(() => {
        // console.log("Genre ID:", genreId); // Thêm dòng này
        const getMovieByGenreId = () => {
            GlobalAPI.getMovieByGenreId(genreId).then((resp) => {
                if (resp?.data?.results) {
                    setMovieList(resp.data.results);
                } else {
                    console.warn('Không có dữ liệu phim:', resp);
                    setMovieList([]); // fallback an toàn
                }
            }).catch((err) => {
                console.error("Lỗi API:", err);
                setMovieList([]); // fallback khi lỗi
            });
        };
        getMovieByGenreId();
    }, [genreId])

    const sliderRight = (element) => {
        element.scrollLeft+= screenWidth - 110;
    }
    
    const sliderLeft = (element) => {
        element.scrollLeft-= screenWidth - 110;
    }
    
  return (
    <div className='relative'>
        <GoChevronLeft className='hidden md:block absolute cursor-pointer mx-5 left-0 text-white text-[40px] z-10 top-1/2 -translate-y-1/2'
        onClick={()=>sliderLeft(elementRef.current)}/>
        
        <div className='flex overflow-x-scroll scrollbar-hide gap-8 py-5 px-3 scroll-smooth'
        ref={elementRef}>
            {movieList.map((item,index)=>(
                <React.Fragment key={item.id || index}>
                    {index_%3==0 ?<HrMovieCard key={index} item={item}/>:<MovieCard key={index} item={item} />}
                </React.Fragment>
            ))}
        </div>
        
        <GoChevronRight className='hidden md:block absolute cursor-pointer mx-5 right-0 text-white text-[40px] z-10 top-1/2 -translate-y-1/2'
        onClick={()=>sliderRight(elementRef.current)}/>
    </div>
  )
}

export default MovieList
