import React from 'react';
import '../App.css';
import { Button } from './Button/index';
import './HeroSection.css';


function HeroSection() {
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
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;