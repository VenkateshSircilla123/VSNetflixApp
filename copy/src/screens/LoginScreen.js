import React from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn] = React.useState(false)
  return (
    <div className='login-screen'>
      <div className='loginScreen-background'>
        <img 
        className='loginScreen-logo'
        src='./images/logo.png' alt='' onClick={()=> setSignIn(false)}></img>
        <button
        className='loginScreen-button'
        onClick={()=> setSignIn(true)}>Sign in</button>
        <div className='loginScreen-gradient' />
      </div>
      <div className='loginScreen-body'>
        {signIn ? (
            <SignUpScreen />
        ) : (
        <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='loginScreen-input'>
                <form>
                    <input type='email'
                    placeholder='Email Address' />
                    <button
                    className='loginScreen-getStarted'
                    onClick={()=> setSignIn(true)}
                    >Get Started</button>
                </form>
            </div>
        </>
        )}
      </div>
      <div className='enjoy-section'>
        <div className='text'>
          <h1>Enjoy on your TV</h1>
          <h4>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
        </div>

        <div className='tv'>
          <img src='./images/tv.png' className='tv-img'></img>
          <video autoPlay loop className='tv-video'>
              <source  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" className='p'/>
          </video>
        </div>
      </div>
      <div className='download-section'>
          <div className='mobile'>
            <img src='./images/mobile.jpg'></img>
            <div className='download-bar'>
              <img src='./images/strangerThings.png' className='st'/>
              <div className='middle'>
                <span>Stranger Things</span>
                <small>Downloading...</small>
              </div>
              <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif' className='download-gif'/>
            </div>
          </div>
          <div className='text'>
            <h1>Download your shows to watch offline</h1>
            <h4>Save your favourites easily and always have something to watch.</h4>
          </div>
      </div>
      <div className='kids-section'>
        <img src='./images/kids.png' />
        <div className='text'>
          <h1>Create profiles for kids</h1>
          <h4>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h4>
        </div>
      </div>

      <footer></footer>
      
      
    </div>
  );
}

export default LoginScreen