import React from 'react'
import { useLocation } from 'react-router-dom'
import Movie from './Movie'
import Nav from './Nav'
const Search = () => {
    const location = useLocation()
  return (
    <div style={{minHeight: "100vh"}}>
      <Nav />
      <div style={{paddingTop: "60px"}}>
        <Movie fetchURL={location.state}/>
      </div>
    </div>
  )
}

export default Search