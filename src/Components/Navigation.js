import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
const Navigation = () => {
    return ( 
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>Living Faith Church Worldwide</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#livestream">LiveStream</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
     );
}
 
export default Navigation;