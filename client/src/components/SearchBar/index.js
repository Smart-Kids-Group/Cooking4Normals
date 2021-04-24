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
            <label>
              {" "}
              Search By Keyword (Chinese, pizza, etc)
              <Input
                name="nameSearch"
                onChange={props.handleInputChange}
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
                onChange={props.handleInputChange}
                placeholder="Ingredient"
                id="ingredientSearch"
              />
            </label>
            <FormBtn
              onClick={props.handleSearchSubmit}
              type="success"
              className="input-lg"
              id="search-page-button"
            >
              Search
            </FormBtn>
          </Col>
          <Col size="2">
            <label class="dare">Do you Dare?</label>
            <Button
              variant="danger"
              onClick={props.handleRandomSearch}
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
