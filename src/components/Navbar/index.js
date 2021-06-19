import { Link } from "react-router-dom"
import React from "react";
import { Navbar, Nav, Row, Container, Card} from "react-bootstrap";
import "./style.css";

function CustomNavbar() {
    return (
        <Container>
        <Card className="header">
            <Row className="headerRow">
                <Link to="/">
                    <h1 className="navbar-name">Home of Comedian Mike Coletta</h1>
                </Link>
            </Row>
            <Navbar collapseOnSelect expand="lg" className="customNavbar">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#features">
                                <Link to="/about" className="navlink">About</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <Link to="/media" className="navlink">Media</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <Link to="/podcasts" className="navlink">Podcasts</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing"><Link to="/media" className="navlink">
                                <Link to="/contact" className="navlink">Contact</Link>
                            </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </Card>
        </Container>
    )
}

export default CustomNavbar;