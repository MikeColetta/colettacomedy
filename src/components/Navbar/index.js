import { Link } from "react-router-dom"
import React from "react";
import "./style.css";

function Navbar() {
    return (
<nav className="navbar navbar-dark sticky-top navbar-expand-md">
<div className="container-fluid">
    <Link to="/" className="navbar-brand">
        <h1 className="navbar-name">Mike Coletta</h1>
    </Link>
    <button className="navbar-toggler dropdownButton" type="button" data-toggle="collapse" data-target="#portfolio-navbar"
        aria-controls="portfolio-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon dropdownIcon"></span>
    </button>
    <div className="collapse navbar-collapse" id="portfolio-navbar">
        <ul className="navbar-nav ml-auto">
            <li className="dropdown-item">
                <Link to="/about" className="navlink">About</Link>
            </li>
            <li className="dropdown-item">
                <Link to="/media" className="navlink">Media</Link>
            </li>
            <li className="dropdown-item">
                <Link to="/podcasts" className="navlink">Podcasts</Link>
            </li>
            <li className="dropdown-item">
                <Link to="/contact" className="navlink">Contact</Link>
            </li>
        </ul>
    </div>
</div>
</nav>
    )
}

export default Navbar;