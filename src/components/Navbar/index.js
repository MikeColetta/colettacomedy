import { Link } from "react-router-dom"
import React from "react";
import { Navbar, Nav, Row, Container, Card, Button } from "react-bootstrap";
import "./style.css";

function CustomNavbar() {
    return (
        <Container>
            <Card className="header">
                <Row className="mt-2 headerRow">
                    <Button className="navLinkButton">
                        <Link to="/">
                            <h1 className="headerName">Home of Comedian Mike Coletta</h1>
                        </Link>
                    </Button>
                </Row>
                <Navbar collapseOnSelect expand="lg" className="customNavbar">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#features">
                                <Button className='navLinkButton'>
                                    <Link to="/about" className="navlink">About</Link>
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <Button className='navLinkButton'>
                                    <Link to="/media" className="navlink">Media</Link>
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <Button className='navLinkButton'>
                                    <Link to="/podcasts" className="navlink">Podcasts</Link>
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="#pricing"><Link to="/media" className="navlink">
                                <Button className='navLinkButton'>
                                    <Link to="/contact" className="navlink">Contact</Link>
                                </Button>
                            </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Card>
        </Container>
    )
}

export default CustomNavbar;