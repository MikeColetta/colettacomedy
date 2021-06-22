import React from "react";
import "./style.css";

function Footer() {
    return (
    <footer className="footer footer-style">
        <div className="inline">
            <a href="https://www.facebook.com/coletta.mike/" className="fa fa-facebook" target="_blank" rel="noreferrer" aria-hidden="true"> </a>
            <a href="https://twitter.com/MeColetta" className="fa fa-twitter" target="_blank" rel="noreferrer" aria-hidden="true"> </a>
            <a href="https://www.instagram.com/mecoletta/" className="fa fa-instagram" target="_blank" rel="noreferrer" aria-hidden="true"> </a>
            <p className="copyright">© Copyright 2021 Michael Coletta</p>
        </div>
    </footer>
    )
}

export default Footer;