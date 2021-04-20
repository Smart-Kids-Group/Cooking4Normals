import React from 'react';
import { withRouter } from "react-router-dom"
import  Buttons from '../Button/Buttons.js';
import './HeroSection.css';





function HeroSection(props) {

  return (
    <div className='hero-container '>
      <video src='/video/video2.mp4' autoPlay loop muted/>
      <h1>Flavor Awaits!</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btn' >
        <Buttons
          className='btn'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => {
            props.history.push("/sign-up");
        }}
        >
          Get Started!
        </Buttons>
      </div>
     
    </div>
  );
}

export default withRouter(HeroSection)