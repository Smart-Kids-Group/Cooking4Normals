import React from 'react';
import { Input, FormBtn } from "../Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function VideoSearch(props) {



return (
  <form>
<Container>

<Row> 
<Col size="8">
<label> Search By Keyword (Chinese, pizza, etc)
<Input
  
  name="videoSearch"
  onChange={props.handleInputChange}
  placeholder="Cuisine"
  />
</label>
</Col>
<Col size="4">
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

          
          export default VideoSearch;