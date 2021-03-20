import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import mapImage from './../../images/map.png';
import { useForm } from 'react-hook-form';
import passengersIcon from './../../images/peopleicon.png'
import './Search.css';
import fakeData from '../../Data/fakeData';
import { useParams } from 'react-router';
import GoogleMaps from "simple-react-google-maps"

const Search = () => {
    //destination userState>
    const [startToEndLocation, setStartToEndLocation] = useState({});
    //destination userState<
    //toggler userState>
    const [toggler, setToggler] = useState(true);
    //toggler userState<

    //react-hook-form>
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const location = startToEndLocation;
        location.startFrom = data.startFrom;
        location.destination = data.destination;
        setStartToEndLocation(location);
        setToggler(false); //setting toggler
    }
    //react-hook-form<


    //accessing dynamic router key>
    const transport = useParams().transport || 'car';
    //accessing dynamic router key< 

    //fake-data-access>
    const data = fakeData;
    console.log(data[transport]);
    //fake-data-access<


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
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col className="col-lg-6 col-12">
                        {
                            (toggler) ?
                                (<div class="form-container  mt-5">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div>
                                            <label>STARTING FROM:
                                            <select name="startFrom" ref={register}>
                                                    <option value="Motijheel">Mothijheel</option>
                                                    <option value="Mirpur">Mirpur</option>
                                                    <option value="Boshundhara">Boshundhara</option>
                                                </select>
                                            </label>
                                            <br />
                                            <label>DESTINATION:
                                            <select name="destination" ref={register}>
                                                    <option value="Mirpur">Mirpur</option>
                                                    <option value="Motijheel">Mothijheel</option>
                                                    <option value="Boshundhara">Boshundhara</option>
                                                </select>
                                            </label>
                                        </div>
                                        <br />
                                        <label>Date
                    <input type="date" name="date" ref={register}></input>
                                        </label>
                                        <input type="submit" value="SEARCH" />
                                    </form>
                                </div>
                                ) :
                                (
                                    <div className="container-style  mt-5">
                                        <div className="bg-primary" style={{ padding: '40px 20px', borderRadius: '10px', color: 'white' }}>
                                            <h3>FROM: {startToEndLocation.startFrom}</h3>
                                            <br />
                                            <h3>DESTINATION: {startToEndLocation.destination} </h3>
                                        </div>

                                        {

                                            data !== null && data[transport].map(vehicle => {
                                                return <>
                                                    <div className="subcontainer-style d-flex justify-content-between mt-4">
                                                        <div className="d-flex justify-content-start">
                                                            <img src={vehicle.image} className="img-thumbnail" alt="..." style={styleIcon} />
                                                            <h4 className="ml-3">{transport} {vehicle.capacity}</h4>
                                                            <img src={passengersIcon} className="ml-3" alt="..." style={styleIcon} /></div>
                                                        <h4>{vehicle.rent}</h4>
                                                    </div>
                                                </>
                                            })
                                        }
                                    </div>
                                )
                        }
                    </Col>
                    <Col className="col-lg-6  col-12 mt-5">
                        <GoogleMaps
                            apiKey={"AIzaSyA6vv_eLh94RSVA5wc5PsdZKeiKRM3o4aI"}
                            style={{ height: "400px", width: "100%" }}
                            zoom={6}
                            center={{ lat: 23.796990295865207, lng: 90.41497479090646 }}
                            markers={{ lat: 23.796990295865207, lng: 90.41497479090646 }} //optional
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Search;