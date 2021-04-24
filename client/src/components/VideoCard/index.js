import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button"

const VideoCard = (props) => {
console.log(props)
    return (
        <Col md={12}>
            <Card className="mb-4 w-60 shadow-sm" >
                <Row>   
                <Col md={3}>
                    {
                        (props.data.snippet.thumbnails.default)
                        ? <Card.Text 
                            className="float-left"
                        ><Image 
                        src={props.data.snippet.thumbnails.default.url}
                        alt={props.data.snippet.title}
                        />
                        </Card.Text>
                        : <Card.Text
                            className="float-left"
                        ><Image 
                        src="https://via.placeholder.com/150"
                        alt="placeholder" 
                        />
                        </Card.Text>
                    }
                    </Col>
                    <Col md={9}>
                    <Card.Title 
                        className="text-center"
                    >
                        {props.data.snippet.title}
                    </Card.Title>
                    <br />
                    {
                        (props.data.snippet.description)
                        ? <Card.Text 
                            className="float-left"
                        > {props.data.snippet.description}
                        </Card.Text>
                        : null
                    }

                    
                    <a className="btn-primary float-right" rel="noreferrer noopener" target="_blank" href={props.href}></a>
                    <Button 
                                className="save-btn" 
                                size="sm" 
                                data-videoid={props.data.id.videoId}
                                variant="outline-secondary" 
                                onClick={(event) => props.handleVideoSubmit(event)}
                                >
                                    Play Video
                            </Button>
                    </Col>
                    </Row>
            </Card>
        </Col>
    );
}

export default VideoCard;