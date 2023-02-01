import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link} from "react-router-dom";
import { useSelector } from 'react-redux';

function NavComponent() {
    const store = useSelector((state) => state);
   
  return (
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Shopping Cart</Navbar.Brand>
         
          <Nav className="me-2">
            < Link className="navv-link nav-link " to='/' >Home</Link>
            < Link className="navv-link nav-link" to='cart'>Cart({store.cart.length})</Link>
         
         
          </Nav>
        </Container>
       </Navbar> 
  )
}

export default NavComponent