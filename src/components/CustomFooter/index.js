import React from "react";
import { Container, Card } from "react-bootstrap";
import "./style.css";

function CustomFooter() {
    return (
        <Container>
            <Card className="p-2 customFooter">
                <div className="inline">
                    <a href="https://www.facebook.com/coletta.mike/" className="fa fa-facebook" target="_blank" rel="noreferrer" aria-hidden="true"> </a>
                    <a href="https://twitter.com/MeColetta" className="fa fa-twitter" target="_blank" rel="noreferrer" aria-hidden="true"> </a>
                    <a href="https://www.instagram.com/mecoletta/" className="fa fa-instagram" target="_blank" rel="noreferrer" aria-hidden="true"> </a>
                    <p className="copyright">© Copyright 2021 Michael Coletta</p>
                </div>
            </Card>
        </Container>
    )
}

export default CustomFooter;