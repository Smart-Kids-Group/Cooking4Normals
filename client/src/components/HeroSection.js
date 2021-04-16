import React from 'react';
import { withRouter } from "react-router-dom"
import '../App.css';
import { Button } from './Button/index';
import './HeroSection.css';




function HeroSection(props) {

  return (
    <div className='hero-container'>
      <video src='/video/video2.mp4' autoPlay loop muted fixed/>
      <h1>Flavor Awaits!</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => {
            props.history.push("/auth");
        }}
        >
          GET STARTED!
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => {
            props.history.push("/auth");
        }}
        >
          Log In
        </Button>
      </div>
     
    </div>
  );
}

export default withRouter(HeroSection)