import React from 'react';
import NavBrandLogo from './../../images/Urban Riders.png'
import logo from './../../images/my_website_logo.svg';
import { Nav, Navbar, Button, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';


const Header = () => {
    //USER CONTEXT data receiving using context>
    const [userStatus, setUserStatus] = useContext(UserContext);
    //USER CONTEXT data receiving using context<
    return (
        <div>
            <Navbar variant="light" className="d-flex justify-content-between">
                <Navbar.Brand href=""><NavLink to="/home">
                    <Image src={logo} style={{maxWidth: "400px", color: ''}} className="d-inline-block align-top" alt="logo" />
                </NavLink>
                </Navbar.Brand>

                <Nav className="text-left align-left">
                    <Nav.Link href="" className="mr-5 text_warning"><NavLink to="/home" style={{color: 'white', fontWeight: 'bolder'}}>Home</NavLink></Nav.Link>

                    <Nav.Link href="" className="mr-5"><NavLink to="/search" style={{color: 'white', fontWeight: 'bolder'}}>Destination</NavLink></Nav.Link>

                    <Nav.Link href="" className="mr-5">
                        <NavLink to="/blog" style={{color: 'white', fontWeight: 'bolder'}}>Blog</NavLink>
                    </Nav.Link>
                    <Nav.Link href="#contacts" className="mr-5">
                        <NavLink to="/contacts" style={{color: 'white', fontWeight: 'bolder'}}>Contacts</NavLink>
                    </Nav.Link>
                    <NavLink to="/login">
                        {(userStatus.isLoggedIn === 'false') ?
                            <Button variant="primary" className="mr-5">Login</Button>
                            :
                            <Button variant="primary" className="mr-5">{userStatus.displayName || userStatus.email.split('@')[0]}</Button>
                        }
                    </NavLink>
                </Nav>
            </Navbar>

        </div>
    );
};

export default Header;