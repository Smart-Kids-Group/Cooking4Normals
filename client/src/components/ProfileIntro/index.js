import React, { useContext,useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import API from "../../utils/API"
import Button from "react-bootstrap/Button"
import UserContext from "../../utils/UserContext"
import './ProfileIntro.css';


function ProfileIntro(){

    const { userProfile, setUserProfile } = useContext(UserContext)
    
    useEffect(() => {
        loadProfile(userProfile.email)
        console.log(userProfile)
    }, [])
    
    const loadProfile = (email) => {
        API.getUser(email).then( data =>
            setUserProfile({
                email: data.email,
                favoriteCuisine: data.favoriteCuisine,
                imageURL: data.imageURL,
                profileDescription: data.profileDescription,
                screenName: data.screenName,
                fullName: data.fullName
            })

        )
    }

    const widget = window.cloudinary.createUploadWidget({
        cloudname: "smart-kids-group",
        uploadPreset: "y0okbc7l"},
        (error, result) => {checkUploadResult(result)})
        
    const showWidget = (widget) => {
        widget.open()
    }

   const checkUploadResult = (resultEvent) => {
       if (resultEvent.event === "success") {
           setUserProfile ({...userProfile, imageURL: resultEvent.info.secure_url})
           console.log(userProfile)
       }
   }

    return(
        <>
        <Row>
        <Col mid={2}>
           <Row>
               <Col>
               {userProfile.fullName
               ? <div>
                <h1 className ="picHeader">{userProfile.fullName}'s Profile</h1>
                {userProfile.image
                ?<img className="proPic" alt="userImage" src={userProfile.image}></img>
                :<img className="proPic" src="https://via.placeholder.com/360"
                alt="placeholder" ></img>}
               </div>: <div>
                <h1 className ="picHeader">My Profile</h1>
                <img className="proPic" src="https://via.placeholder.com/360"
                        alt="placeholder" ></img>
               </div>  }
            </Col> 
            </Row>
            <Button className="small" variant="secondary" onClick={()=>showWidget(widget)}>Upload Picture</Button>
            
        </Col>
        <Col mid={10} >
            <div className = "BioDiv">
                <h3 className="bioHeader">
                    About Me
                </h3>
                {userProfile.profileDescription
                ? <div>
                <p className ="userInfo">
                {userProfile.profileDescription}
                </p>
                </div> : 
                    <p className ="userInfo">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>}
                
            </div>
        </Col>
        </Row>
        <Row>
            <Col mid = {4}></Col>
            <Col mid={4} className="end">
                <h3>Favorite cuisines</h3>
                <p>{userProfile.favoriteCuisines}</p>
                {/* {userProfile.friends[0]
                ?
                <h3>Friend's list</h3>
                :null}
               <ul>
               {userProfile.friends
                ? userProfile.friends.map((friend, i) => (
                    <li>{friend}</li>
                ))
                : null} 
                </ul> */}
            </Col>
            <Col mid={4}></Col>
        </Row>
        </>
    )
}

export default ProfileIntro