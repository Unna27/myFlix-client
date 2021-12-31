import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';

export function Menubar() {
  const [username,setUsername] = useState();

  const isAuth = () => {
    if(typeof window == "undefined"){
      return false;
    }
    if (localStorage.getItem('token')){
      const user = JSON.parse(window.localStorage.getItem('user'));
      useEffect(() => {
         setUsername(user.username);
      });
     
      return localStorage.getItem('token');
    } else {
      return false;
    }
  }
  
  return (
    <Navbar className="main-nav" sticky="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="navbar-logo" href="/">myFlixCinema</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {isAuth() && (
              <Nav.Link href={`/users/${username}`} color="blue">{username} Profile</Nav.Link>
            )}
            {isAuth() && (
              <Nav.Link href={'/movies'} color="blue">All Movies</Nav.Link>
            )}
            {isAuth() && (
              <Nav.Link href={'/logout'} color="blue">Logout</Nav.Link>
            )}
            {!isAuth() && (
              <Nav.Link href={'/'}>Login</Nav.Link>
            )}
            {!isAuth() && (
              <Nav.Link href={'/register'}>Register</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}