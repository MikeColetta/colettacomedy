import React from 'react';
import mikeImage from "../../assets/images/Mike.jpg";


function About() {
    return (
        <div className="container my-2" id="about-me">
            <div className="card cardStyle">
                <div className="card-header">
                    <h2>About</h2>
                </div>
                <div className="card-body">
                    <img src={mikeImage} className="card-img-top about-me-img" alt="Mike in San Diego."></img>
                    <p className="card-text about-me-text">Full stack web developer and educationally motivated paraeducator. 
                    Received certificate in full stack web development from the University of Washington Coding Boot Camp. 
                    Collaborative, industrious team member with a knack for problem solving. 
                    Personal interests in video and table-top gaming, performance, and other creative enterprises. </p>
                    <p>Technologies I've used recently include:</p>
                </div>
            </div>
        </div>
    )
}

export default About;