import React from 'react' 
import "./Nav.css";
import {  Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Search from './Search';
function Nav() {
const [show , handleShow] = React.useState(false);
const [showItems , setShowItems] = React.useState(false);
const [query , setQuery] = React.useState('');
const [movie , setMovie] = React.useState();

let history = useNavigate()

const transitionNavBar = () =>{
    if(window.scrollY > 100){
        handleShow(true);
    } else {
        handleShow(false);
    }
}


React.useEffect(()=> {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
}, [])
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className={`nav-contents ${showItems && 'black'}`}>
        <div className='logoMyfav'>
          <img 
              onClick={()=> history('/')}
              src='../images/logo.png'
              alt=''
              className='nav-logo'
          />
          <h3 className={`myfavv ${showItems && 'hide'}`} onClick={()=> history('/mylist')}>My Favourites</h3>
        </div>
          
        <div className='searchContainer'>
          <input type='text' onChange={(e)=>setQuery(e.target.value)} className={`sci ${show && "scib"}`}></input>
          
          <button className={`scb ${show && "scbb"}`}><Link to={`/Search`} state={`/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`} className='link'>search</Link></button>
        </div>

        <img
        onClick={()=> history('/profile')}
        src='../images/avatar.png'
        alt='' 
        className={`nav-avatar ${showItems && 'hide'}`}
        />
        {
          !showItems && (
            <span className={`material-symbols-outlined menuIcon ${showItems && 'hide'}`} onClick={()=>setShowItems(true)}>
            menu
            </span>
          )
        }
        {
          showItems && (<span className={`material-symbols-outlined menuIcon ${showItems && 'hide'}`} onClick={()=>setShowItems(false)}>
          close
          </span>)
        }
        
      </div>
    </div>
  )
}

export default Nav