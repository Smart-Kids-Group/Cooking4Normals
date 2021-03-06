import React from "react";
import { Input, FormBtn } from "../Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./searchBar.css";

function SearchBar(props) {
  return (
    <form>
      <Container className="searchbar">
        <Row>
          <Col size="4">
            <label
            className="name-search">
              {" "}
              Search By Keyword
              <Input
                name="nameSearch"
                onChange={(e) => props.handleInputChange(e)}
                placeholder="Cuisine"
                id="nameSearch"
              />
            </label>
          </Col>
          <Col size="6">
            <label>
              {" "}
              Search by Ingredient
              <Input
                name="ingredientSearch"
                onChange={(e) => props.handleInputChange(e)}
                placeholder="Ingredient"
                id="ingredientSearch"
              />
            </label>
            <FormBtn
              onClick={(e) => props.handleSearchSubmit(e)}
              type="success"
              className="input-lg"
              id="search-page-button"
            >
              Search
            </FormBtn>
          </Col>
          <Col size="2"
          className="dare-col">
            <label className="dare">Do you Dare?</label>
            <Button
              variant="danger"
              onClick={() => props.handleRandomSearch()}
              id="dare-button"
            >
              I dare!
            </Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
}
export default SearchBar;
