import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import CarouselImage1 from '../../assets/images/Carousel1.jpg';
import CarouselImage2 from '../../assets/images/Mike-On-Stage-1.jpg';
import CarouselImage3 from '../../assets/images/GalleryImage2.jpg'

function HomeCarousel() {
    return (
        <Carousel className="mb-2">
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-75 carouselImage"
                    src={CarouselImage3}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-75 carouselImage"
                    src={CarouselImage2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-75 carouselImage"
                    src={CarouselImage1}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeCarousel;