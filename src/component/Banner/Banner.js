import React, { useEffect, useState } from 'react'
import './Banner.css';
import requests from '../requests';
import axios from "../axios"
function Banner() {

    const [movies,setMovies]=useState([]);
        useEffect(()=>{
            async function fetchData(){
                const request=await axios.get(requests.fetchNetflixOriginals);
                setMovies(
                    request.data.results[
                        Math.floor(Math.random()*request.data.results.length-1)
                    ])
                    
                }
              fetchData();  
        },[])

    

      function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1) + '...' : string
      } 
  return (
  <>
    <header className='banner' style={{
        backgroundPosition:"center center",
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
        )`,
    }}
        >
<div className='banner__contents'>
          <h1 className='banner__title'>{movies?.title || movies?.name || movies.original_name}</h1>
    <div className='banner__button'>
        <button className='bunner__button'>play</button>
        <button className='bunner__button'>My List</button>

    </div>
    <h1 className='banner__description'>
    {truncate (`${movies?.overview}`,150)}
    </h1>
</div>
<div className='banner--fadeBotom'/>
    </header>
</>
  )
}

export default Banner