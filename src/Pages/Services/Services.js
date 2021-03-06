import React from 'react';
import UseServices from '../../Shared/UseServices';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = UseServices()
    return (
        <div style={{ color: "#006400" }} className='container  text-center mt-5'>
            <h2 className="d-flex justify-content-center fw-bolder pb-5 mt-5">
                Popular Services</h2>
            <p>To make your Busy life,little bit easy <span><b>HAPPENING HAPPINESS</b></span> is here. In my 10 years Event planning career I always try to ensure the best use of client's time, money and enargy. Here's the Services I provide.   </p>
            <div className='row'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}>
                    </Service>)
                }

            </div>
        </div>
    );
};

export default Services;