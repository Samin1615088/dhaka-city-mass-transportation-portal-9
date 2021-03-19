import React from 'react';
import NavBrandLogo from './../../images/Urban Riders.png'
import { Nav, Navbar, Button, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar variant="light" className="d-flex justify-content-between">
                <Navbar.Brand href=""><NavLink to="/home">
                    <Image src={NavBrandLogo} width="30%" className="d-inline-block align-top" alt="logo" />
                </NavLink>
                </Navbar.Brand>

                <Nav className="text-left align-left">
                    <Nav.Link href="" className="mr-5"><NavLink to="/home">Home</NavLink></Nav.Link>

                    <Nav.Link href="" className="mr-5"><NavLink to="/search">Destination</NavLink></Nav.Link>

                    <Nav.Link href="" className="mr-5">
                        <NavLink to="/blog">Blog</NavLink>
                    </Nav.Link>
                    <Nav.Link href="#contacts" className="mr-5">
                        <NavLink to="/contacts">Contacts</NavLink>
                    </Nav.Link>
                    <NavLink to="/login">
                        <Button variant="outline-primary" className="mr-5">
                            Login
                    </Button>
                    </NavLink>
                </Nav>
            </Navbar>

        </div>
    );
};

export default Header;