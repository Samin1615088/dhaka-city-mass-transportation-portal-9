import React from 'react';
import { Card, CardColumns, Col, Container, Row } from 'react-bootstrap';
import bikeImg from '../../images/bike_img.png'
import carImg from '../../images/car_img.png'
import busImg from '../../images/bus_img.png'
import trainImg from '../../images/train_img.png'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/search">
            <Card className="w-50">
              <Card.Img variant="top" src={bikeImg} />
              <Card.Body>
                <Card.Title>Bike</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/search">
            <Card className="w-50">
              <Card.Img variant="top" src={carImg} />
              <Card.Body>
                <Card.Title>Car</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/search">
            <Card className="w-50">
              <Card.Img variant="top" src={busImg} />
              <Card.Body>
                <Card.Title>Bus</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/search">
            <Card className="w-50">
              <Card.Img variant="top" src={trainImg} />
              <Card.Body>
                <Card.Title>Train</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;