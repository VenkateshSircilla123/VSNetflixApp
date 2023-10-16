import axios from './axios'
import React, { useEffect } from 'react'
import './Banner.css'
import requests from './Request'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
function Banner() {
  const [movie,setMovie] = React.useState([])
  const [trailerUrl, setTrailerUrl] = React.useState('')
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(requests.trending)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData()
  }, [])
  // console.log(movie)

  function truncate(string, n){
    return string?.length > n ? string.substr(0,n-1) + '...' : string ;
  }


  const opts = {
        height:"440px",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }
    const handleClick = (movie)=>{
        if (trailerUrl){
            setTrailerUrl('')
        } else {
            // console.log(movie)
            movieTrailer(movie?.name || movie?.title).then((url)=>{
                // console.log(url)
                const urlParms = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParms.get('v'))

            }).catch((error) => console.log(error))
        }
    }
    const handleAdd = (movie)=>{
      localStorage.setItem(`${movie.id}`,JSON.stringify(movie))
      // console.log(movie)
    }

  return (
    <>
    <header
      className='banner' 
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
    <div className='banner-contents'>
      <h1 className='banner-title'>{movie?.original_title || movie?.original_name}</h1>
      <div className='banner-buttons'>
        <button onClick={()=>handleClick(movie)} className='banner-button'>Play</button>
        <button className='banner-button' onClick={()=>handleAdd(movie)}>My List</button>
      </div>
      <small className='banner-description'>
        {truncate(`${movie?.overview}`, 100)}block
      </small>
    </div>
    <div className='banner-fade-bottom' />
    </header>
    {trailerUrl && <div className='youtube'><Youtube videoId={trailerUrl} opts={opts} className='video' /><button onClick={handleClick} className='vbtn'>Close</button></div>}
    </>
  )
}

export default Banner
