import React from "react";
import { Input, FormBtn } from "../Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function SearchBar (props) {

  return (
    <form>
      <Container>

   <Row> 
    <Col size="5">
      <label> Search By Keyword (Chinese, pizza, etc)
      <Input
        
        name="nameSearch"
        onChange={props.handleInputChange}
        placeholder="Cuisine"
        />
      </label>
    </Col>
    <Col size="5">
      <label> Search by Ingredient
      <Input
        name="ingredientSearch"
        onChange={props.handleInputChange}
        placeholder="Ingredient"
        />
      </label>
    </Col>
    <Col size="2">
      <label>Do you Dare?</label>
      <Button variant="danger"
        onClick={props.handleRandom}>I dare?</Button>
    </Col>
    </Row>
    <Row>
      <Col>
      <FormBtn
        onClick={props.handleSearchSubmit}
        type="success"
        className="input-lg"
      >
          Search
      </FormBtn>
      </Col>
    </Row>
</Container>
    </form>

  )
}
export default SearchBar;