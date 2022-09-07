import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products(props) {
  return (
    <Card className="products-container" style={{ width: '18rem', margin: '0.8rem'}}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark"><FontAwesomeIcon icon="fa-light fa-basket-shopping" />Add to Basket</Button>
      </Card.Body>
    </Card>
  );
}

export default Products;