import React, { useState } from 'react'
import movieTrailer from 'movie-trailer'
import Youtube from 'react-youtube'
import Nav from '../Nav'
import './mylist.css'


export default function MyList(isLarge=false) {
    const [trailerUrl, setTrailerUrl] = useState('')
    const baseURL = "https://image.tmdb.org/t/p/original"


    const movies = Object.values(localStorage)
    // const m = JSON.parse(movies)
    const opts = {
        height:"390px",
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
            movieTrailer(movie?.title || movie?.name).then((url)=>{
                // console.log(url)
                const urlParms = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParms.get('v'))
                

            }).catch((error) => console.log(error))
        }
    }
    
    
    const convertedObject = [];
    
    for (const key in movies) {
        const stringObject = movies[key];
        const object = JSON.parse(stringObject);
        convertedObject[key] = object;
    }
    console.log(convertedObject)

    const handleDel = (movie)=>{
        const id = movie.id
        localStorage.removeItem(id.toString())
        window.location.reload()
    }
  return (
    <div className='mlcontainer'>
        <Nav />
    <div className='col ml'>
      <h2>MY LIST</h2>
      <div className='col_posters col_posters1'>
            {
                localStorage.length==0 ? <h1>No Favourites</h1> :
                
                convertedObject.map((movie) => (
                    <div className='listContainer'><div className='img-name' key={movie.id}><img
                    className={`col_poster ${isLarge &&"col_posterLarge"}`} 
                    src={`${baseURL}${
                        isLarge ? movie.poster_path : movie.backdrop_path
                    }`} 
                    alt={movie.name}
                    key={movie.id}
                    onClick={()=>handleClick(movie)}
                    />{movie.title}</div>
                    <button onClick={()=>handleDel(movie)} className='listBtn'>del</button></div>
                ))

            }
        </div>
        {trailerUrl && <div className='youtube'><Youtube className='video' videoId={trailerUrl} opts={opts} /><button className='vbtn' onClick={handleClick}>Close</button></div>}
    </div>
    </div>
  )
}
