import React from 'react'
import Nav from '../Nav'
import Banner from '../Banner.js'
import requests from '../Request'
import Row from '../Row'
import './homeScreen.css'
import Movie from '../Movie'
function Homescreen() {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [selected, setSelected] = React.useState('');
  const [movie, setMovie] = React.useState()


  const handleOptionChange = (event)=> {
    const selectedValue = event.target.options[event.target.selectedIndex];
    setSelectedOption(selectedValue)
    setSelected(selectedValue.value)
  }

  const value = selectedOption.value
  const name = selectedOption.text

  console.log(name, value)
  

  return (
    <><div>
      <Nav />
      <Banner />

      {
        <select id='j' onChange={handleOptionChange}>
          <option value=''>All</option>
          <option value={requests.actionMovies}>Action</option>
          <option value={requests.romanceMovies}>Romance</option>
          <option value={requests.cundefinedomedyMovies}>Comedy</option>
          <option value={requests.topRated}>Top Rated</option>
          <option value={requests.trending}>Trending</option>
        </select>
      }

      {
        selected == '' ? (<>
          <Row title="Netflix Originals" fetchURL={requests.trending} isLarge />
          <Row title="Trending" fetchURL={requests.topRated} />
          <Row title="Action Movies" fetchURL={requests.actionMovies} />
          <Row title="Comedy Movies" fetchURL={requests.comedyMovies} />
          <Row title="Romance movies" fetchURL={requests.romanceMovies} />
        </>) : (<Movie title={name} fetchURL={value}/>)
      }
      </div>
      {/* {url && <div className='trailer'><Youtube className='video' videoId={url} opts={opts} /></div>} */}
    </>
  )
}
export default Homescreen
