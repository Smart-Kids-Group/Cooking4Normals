import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button"
import UserContext from "../../utils/UserContext"
import './ProfileIntro.css';


function ProfileIntro(){

    const { userProfile, setUserProfile } = useContext(UserContext)

    const updateProfilePic = () => {
         return "Profile pic stuff"
    };

    return(
        <>
        <Row>
        <Col mid={2}>
           <Row>
               <Col><div>
                <h1 className ="picHeader">{userProfile.fullName}'s Profile</h1>
                <img className="proPic" alt="userImage" src="http://via.placeholder.com/360x360"></img>
                
            </div>
            </Col> 
            </Row>
            <Button className="small" variant="secondary" onClick={updateProfilePic}>Edit Picture</Button>
            
        </Col>
        <Col mid={10} >
            <div className = "BioDiv">
                <h3 className="bioHeader">
                    About Me
                </h3>
                <p className ="userInfo">
                {userProfile.profileDescription}
                </p>
            </div>
        </Col>
        </Row>
        <Row>
            <Col mid = {4}></Col>
            <Col mid={4} className="end">
                <h3>Favorite cuisines</h3>
                <p>{userProfile.favoriteCuisines}</p>
                <h3>Friend's list</h3>
               <ul>
               {userProfile.friends
                ? userProfile.friends.map((friend, i) => (
                    <li>{friend}</li>
                ))
                : null} 
                </ul>
            </Col>
            <Col mid={4}></Col>
        </Row>
        </>
    )
}

export default ProfileIntro