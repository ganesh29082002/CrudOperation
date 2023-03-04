import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link } from "react-router-dom";
export default function Navbar1() {
  return (
    <div>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CRUD</Navbar.Brand>
          <Nav className="me-auto">
            
            <Link to="/">All User</Link>
            <Link to="/Add">Add User</Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
