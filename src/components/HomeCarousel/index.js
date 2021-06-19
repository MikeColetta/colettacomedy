import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import CarouselImage1 from '../../assets/images/Headshot.jpg';
import CarouselImage2 from '../../assets/images/Mike-On-Stage-1.jpg';

function HomeCarousel() {
    return (
        <div>
            <Carousel className="homeCarousel" interval={5000} indicators={false}>
                <Carousel.Item >
                    <img src={CarouselImage1} className="carouselImage" alt="Mike Headshot"></img>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={CarouselImage2} className="carouselImage" alt="Mike on stage."></img>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeCarousel;