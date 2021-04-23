import React from "react";
import { Input, FormBtn } from "./Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import './VideoSearch.css';

function VideoSearch(props) {
  return (
    <form>
      <Container>
        <Row>
          <Col size="6">
            <label>
              {" "}
              Search Cooking Videos
              <Input
                name="videoSearch"
                className="videoSearch"
                onChange={event => props.handleInputChange(event)}
                placeholder="Cuisine"
              />
            </label>
            <FormBtn
              onClick={event => props.handleSearchSubmit(event)}
              type="success"
              className="input-lg"
              id="video-search-button"
            >
              Search
            </FormBtn>
          </Col>
          <Col size="6">
            
          </Col>
        </Row>
      </Container>
    </form>
  );
}

export default VideoSearch;
