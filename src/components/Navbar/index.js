import { Link } from "react-router-dom"
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./style.css";

function CustomNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <Link to="/" className="navbar-brand">
                    <h1 className="navbar-name">Mike Coletta</h1>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
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
    )
}

export default CustomNavbar;