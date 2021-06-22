import { Link } from "react-router-dom"
import React from "react";
import { Navbar, Nav, Row, Container, Card, Button } from "react-bootstrap";
import "./style.css";

function CustomNavbar() {
    return (
        <Container>
            <Card className="header">
                <Row className="mt-2 headerRow">
                    <Link to="/" className="navlink">
                        <Button className="navLinkButton">
                            <h1 className="headerName">Home of Comedian Mike Coletta</h1>
                        </Button>
                    </Link>
                </Row>
                <Navbar collapseOnSelect expand="lg" className="customNavbar">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link>
                                <Link to="/about" className="navlink">
                                    <Button className='navLinkButton'>
                                        <h5>About</h5>
                                    </Button>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/media" className="navlink">
                                    <Button className='navLinkButton'>
                                        <h5>Media</h5>
                                    </Button>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/podcasts" className="navlink">
                                    <Button className='navLinkButton'>
                                        <h5>Podcasts</h5>
                                    </Button>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>

                                <Link to="/contact" className="navlink">
                                    <Button className='navLinkButton'>
                                        <h5>Contact</h5>
                                    </Button>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Card>
        </Container>
    )
}

export default CustomNavbar;