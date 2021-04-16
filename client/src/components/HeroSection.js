import React, { useState } from 'react';
import { withRouter } from "react-router-dom"
import '../App.css';
import { Button } from './Button/index';
import auth from "../utils/auth";
import './HeroSection.css';




function HeroSection(props) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit (event) {
    event.preventDefault();
    auth.login(() => {
       props.history.push("/feed");
      
     })
}

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
          onClick={() => {
            auth.login(() => {
            props.history.push("/feed");
          });
        }}
        >
          WATCH TRAILER
        </Button>
      </div>
      <div className="login-wrapper">
      <h1> Please Log In</h1>
      <form>
        <label>
          <p> User Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" onClick={handleSubmit}> Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default withRouter(HeroSection)