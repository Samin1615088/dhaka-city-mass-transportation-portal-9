import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import bikeImg from '../../images/bike_img.png'
import carImg from '../../images/car_img.png'
import busImg from '../../images/bus_img.png'
import trainImg from '../../images/train_img.png'
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center',
  }
  return (
    <Container className="d-flex align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col >
          <Link to="/search/bike" style={linkStyle}>
            <Card className="p-4" style={{ border: "2px solid black" }}>
              <Card.Img variant="top" src={bikeImg} />
              <Card.Body>
                <Card.Title>Bike</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col >
          <Link to="/search/car" style={linkStyle}>
            <Card className="p-4" style={{ border: "2px solid black" }} >
              <Card.Img variant="top" src={carImg} />
              <Card.Body>
                <Card.Title>Car</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col >
          <Link to="/search/bus" style={linkStyle}>
            <Card className="p-4" style={{ border: "2px solid black" }} >
              <Card.Img variant="top" src={busImg} />
              <Card.Body>
                <Card.Title>Bus</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col >
          <Link to="/search/train" style={linkStyle}>
            <Card className="  p-4" style={{ border: "2px solid black" }} >
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