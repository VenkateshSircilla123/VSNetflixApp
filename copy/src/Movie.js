import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Movie.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row({title ,fetchURL, isLarge = false}) {
    
    const baseURL = "https://image.tmdb.org/t/p/original"
    const [movies, setMovies] = React.useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    const [myList,setMyList] = React.useState([])

    React.useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }
        fetchData()
        
    }, [fetchURL])


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
    const handleAdd = (movie)=>{
        const date = new Date()
        if(!myList.includes(movie)){
            const data = [...myList, movie]
            setMyList(data)
            localStorage.setItem(`${movie.id}`,JSON.stringify(movie))
            console.log(movie.id)

        }
    }
    console.log(movies)

  return (
    <div className='col'>
      <h2>{title}</h2>
      <div className='col_posters'>
            {
                movies.map((movie) => (
                    <>
                    {(movie.poster_path!=null || movie.backdrop_path !=null) && (<img
                    className={`col_poster ${isLarge &&"col_posterLarge"}`} 
                    src={`${baseURL}${
                        isLarge ? movie.poster_path : movie.backdrop_path || movie.poster_path
                    }`} 
                    alt={movie.name}
                    key={movie.id}
                    onClick={()=>handleClick(movie)}
                    />)}
                    {/* <h3 className='row_movieTitl'>{movie.title}</h3>
                        <button onClick={()=>handleAdd(movie)} className='ad'>+</button>
                        <span class="material-symbols-outlined pla" onClick={()=>handleClick(movie)}>play_arrow</span> */}
                  </>  
                ))

            }
        </div>
        {trailerUrl && <div className='youtube'><Youtube className='video' videoId={trailerUrl} opts={opts} /><button className='vbtn' onClick={handleClick}>Close</button></div>}
    </div>
  )
}

export default Row
