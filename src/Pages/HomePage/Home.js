import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../images/slide/img01.png'
import slide2 from '../../images/slide/img02.png'
import slide3 from '../../images/slide/img03.png'
import UseServices from '../../Shared/UseServices';
import Service from '../Services/Service/Service';

const Home = () => {
    const [services, setServices] = UseServices()
    return (
        <div>
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 text-success "
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Marraige</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Engagement</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Family Tour</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="container">

                <div className=' row text-center mt-5'>
                    <h2 style={{ color: "#006400" }}> Most Popular Services</h2>
                    {
                        services.slice(0, 3).map(service => <Service
                            key={service._id}
                            service={service}>
                        </Service>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;