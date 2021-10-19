import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hoocks/useAuth';
import logo from '../../../Images/eye-logo.png';
import './Header.css';


const Header = () => {

  const { user, logOut } = useAuth();
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


              <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>


              {
                user?.email &&
                <h6>{user.displayName}</h6>

              }



              {
                user?.email ?

                  <Nav.Link as={Link} className='header-button' to='/' onClick={logOut}><Button variant="dark">Log Out</Button></Nav.Link>
                  :
                  <Nav.Link as={Link} className='header-button' to="/login"><Button variant="dark">Log In</Button></Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>


  );
};

export default Header;