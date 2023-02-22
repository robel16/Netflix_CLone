import React from 'react'
import './Homescreen.css'
import Navbar from '../Navbar/Navbar' 
import Banner from '../Banner/Banner'
import requests from '../requests'
import Row from '../Row/Row'
const Homescreen = () => {
  return (
    <div className='homescreen'>
        <Navbar/>
        <Banner/>
          <div>
       <Row title="Netflix Originals" 
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow/>

       
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horor Movies" fetchUrl={requests.fetchHororMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries}/>
    </div> 
    </div>
  )
}

export default Homescreen