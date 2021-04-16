import React from "react";
import { auth } from "../utils/firebase";

function Feed(props) {
  const logOut = () => {
    auth.signOut().then(res => {
        props.history.push('/auth');
        //do something else with res
    }).catch(err => {
        //do something else with err
    })
}

  return (
    <div className='main'>
    <h1>Hey there, you're logged in!</h1>
    <button onClick={logOut}>Log out</button>
</div>
  )
  
}
export default Feed;