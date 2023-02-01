import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link} from "react-router-dom";

function NavComponent() {
   
  return (
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Shopping Cart</Navbar.Brand>
         
          <Nav className="me-2">
            < Link className="navv-link nav-link " to='/' >Home</Link>
            < Link className="navv-link nav-link" to='cart'>Cart</Link>
         
         
          </Nav>
        </Container>
       </Navbar> 
  )
}

export default NavComponent