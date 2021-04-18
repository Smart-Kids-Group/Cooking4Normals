import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button"
import MyEditor from '../AvatarEditor'


function ProfileIntro(){

    const updateProfilePic = () => {
        return <MyEditor />
    };

    return(
        <>
        <Row>
        <Col mid={4}>
           <Row>
               <Col><div>
                <h1>My Profile</h1>
                <img alt="userImage" src="http://via.placeholder.com/360x360"></img>
                
            </div>
            </Col> 
            </Row>
            <Button className="small" variant="secondary" onClick={updateProfilePic}>Edit Picture</Button>
            <Row>

            </Row>
        </Col>
        <Col mid={8} >
            <div>
                <h2>
                    User Bio
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta imperdiet magna eget rhoncus. Quisque ligula risus, fringilla sed nisl vel, sagittis elementum lectus. Etiam quis consequat mauris, eget tristique nisl. Nulla imperdiet augue ex, ut venenatis turpis mattis a. Nulla eu elit tincidunt odio consequat pharetra in nec urna. Mauris aliquam consectetur ante, non mollis erat fermentum et. Sed nec pulvinar dolor. Nullam viverra orci mattis, varius tellus in, fermentum massa. Integer eget urna at nibh placerat ornare. Etiam dapibus dignissim elit ac vehicula.

Donec commodo sapien at fringilla fringilla. In rhoncus, lectus nec placerat auctor, augue est ullamcorper ex, quis semper nisi mauris vitae velit. Phasellus fermentum viverra tincidunt. Curabitur iaculis ipsum ut justo semper, et consectetur neque suscipit. Suspendisse faucibus orci viverra, tincidunt ligula quis, scelerisque neque. Quisque nibh mauris, porta sed lacinia eu, varius vel augue. Sed id nunc sed lorem mattis eleifend vel eget lorem. Vestibulum ultrices neque id fringilla faucibus. Pellentesque ut leo aliquet, rutrum arcu et, euismod nisl. Phasellus ac ex vel lorem laoreet suscipit. Donec ut laoreet neque. Sed eu velit consectetur, lobortis nisl ut, condimentum ligula.
                </p>
            </div>
        </Col>
        </Row>
        <Row>
            <Col mid = {4}></Col>
            <Col mid={4}>
                <h3>Favorite cuisines</h3>
                <p>Himilayan, Ethiopian, Mexican</p>
                <h3>Friend's list</h3>
                <p>placeholder</p>
            </Col>
            <Col mid={4}></Col>
        </Row>
        </>
    )
}

export default ProfileIntro