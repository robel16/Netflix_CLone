import React, { useState,useEffect } from 'react'
import axios from '../axios';
import './Row.css'
import YouTube from  'react-youtube'
import movieTrailer from "movie-trailer"


const base_Url="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,isLargeRow}) {
const[Movies,setMovies]=useState([])
const[trailerUrl,setTrailerUrl]=useState("");

useEffect(()=>{
async function fetchData(){
const request=await axios.get(fetchUrl);

 setMovies(request.data.results)
 console.log(request)
 return(request)

}
fetchData();
},[fetchUrl]);
// console.log(Movies)
const opts={
    height:"390",
    width:"700",
    playerVars:{
        autoplay:1,
    },
};

const handleClick=(movie)=>{
if(trailerUrl){
    setTrailerUrl("");
}else{
    movieTrailer(movie.name || movie?.original_title || "")
    .then((url)=>{
        const urlparams=new URLSearchParams( new URL(url).search);
        setTrailerUrl (urlparams.get('v'));  
    })
    .catch((error)=>console.log(error))
}
}

  return (
  <>
 
    <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
            {Movies.map(movie=>(
                <img
                 key={movie.id}
                 onClick={()=>handleClick(movie)}
                className={`row__poster ${isLargeRow &&"row__posterLarge"}`}
                src={`${base_Url}${isLargeRow? movie.poster_path :movie.backdrop_path}`} 
                alt={movie.name}/>
            ))}
        </div>
       { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>

       
  </>
  )
}

export default Row