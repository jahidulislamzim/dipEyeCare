import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/banner-01.jpg';
import banner2 from '../../../Images/Banner/banner-02.jpg';
import banner3 from '../../../Images/Banner/banner-03.jpg';

const Banner = () => {
    return (
         <>
            <Carousel >
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block carousel-img "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Top Doctors In Bangladesh</h3>
                        <p>We have top doctors </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block  "
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;