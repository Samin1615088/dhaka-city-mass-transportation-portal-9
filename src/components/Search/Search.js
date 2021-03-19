import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import mapImage from './../../images/map.png';
import { useForm } from 'react-hook-form';
import imagePlaceholderIcon from './../../images/bike_img.png'
import passengersIcon from './../../images/peopleicon.png'
import './Search.css';

const Search = () => {
    //react-hook-form>
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    //react-hook-form<


    //custom styling>
    const styleIcon = {
        maxWidth: '30px',
        maxHeight: '30px',
        width: 'auto',
        height: 'auto'
    };
    //custom styling<
    return (
        <div className="">
            <h1>This is Search</h1>
            <Container>
                <Row className="justify-content-center">
                    <Col className="col-md-6 col-sm-12">
                        {
                            (false) ?
                                (<div class="form-container">
                                    <form>
                                        <label>STARTING FROM
                                            <select name="startFrom">
                                                <option value="mothijheel">Mothijheel</option>
                                                <option value="mirpur">Mirpur</option>
                                                <option value="boshundhara">Boshundhara</option>
                                                <option value="audi">Audi TT</option>
                                            </select>
                                        </label>
                                        <br />
                                        <label>DESTINATION
                                            <select name="destination">
                                                <option value="mothijheel">Mothijheel</option>
                                                <option value="mirpur">Mirpur</option>
                                                <option value="boshundhara">Boshundhara</option>
                                                <option value="audi">Audi TT</option>
                                            </select>
                                        </label>
                                        <br />
                                        <label>Date
                    <input type="date" name="date"></input>
                                        </label>
                                        <input type="submit" value="SEARCH" />
                                    </form>
                                </div>
                                ) :
                                (
                                    <div className="container-style">
                                        <h3>From: </h3>
                                        <h3>Destination: </h3>
                                        <div className="subcontainer-style d-flex justify-content-between">
                                            <div className="d-flex justify-content-start">                                            <img src={imagePlaceholderIcon} className="img-thumbnail" alt="..." style={styleIcon} />
                                                <h4 className="ml-3">Car 4</h4>
                                                <img src={passengersIcon} className="ml-3" alt="..." style={styleIcon} /></div>
                                            <h4>$67</h4>
                                        </div>
                                    </div>
                                )
                        }
                    </Col>
                    <Col className="col-md-6  col-sm-12"><Image src={mapImage} fluid /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Search;