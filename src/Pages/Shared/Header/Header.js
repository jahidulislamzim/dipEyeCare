import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hoocks/useAuth';
import logo from '../../../Images/eye-logo.png';
import './Header.css';


const Header = () => {

  const {user, logOut} = useAuth();
    return (

    <>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand className="nav-logo" href="#home"><img src={logo} alt="" /><span>Dip Eye Care</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto text-center">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
                
                  
                    <Nav.Link as={Link}  to='/profile'>Profile</Nav.Link>
                {
                  user?.email ?
                
                    <Nav.Link as={Link}  to="/" onClick={logOut} >Log Out</Nav.Link>
                    :
                    <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
                }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>


    );
};

export default Header;