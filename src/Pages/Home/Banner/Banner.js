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

                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block"
                        src={banner2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block  "
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;