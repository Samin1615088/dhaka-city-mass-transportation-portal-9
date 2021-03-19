import React from 'react';
import NavBrandLogo from './../../images/Urban Riders.png'
import { Nav, Navbar, Button, Image } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <>
                <Navbar variant="light" className="d-flex justify-content-between">
                    <Navbar.Brand href="#home">
                        <Image src={NavBrandLogo} width="30%" className="d-inline-block align-top" alt="logo" />
                    </Navbar.Brand>
                    <Nav className="text-left align-left">
                        <Nav.Link href="#home" className="mr-5">Home</Nav.Link>

                        <Nav.Link href="#features" className="mr-5">Destinations</Nav.Link>
                        <Nav.Link href="#pricing" className="mr-5">Blog</Nav.Link>
                        <Nav.Link href="#contacts" className="mr-5">Contacts</Nav.Link>
                        <Button variant="outline-primary" className="mr-5">Login</Button>
                    </Nav>
                </Navbar>
            </>
        </div>
    );
};

export default Header;