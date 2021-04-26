import React, { useEffect, useState } from 'react';
import SingleSevices from './SingleSevices';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(() => {
        fetch("https://still-mountain-18271.herokuapp.com/services")
        .then( res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <>
            <div className="site-section" id="services">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">

                        {
                         services.map(service => 
                        <SingleSevices 
                        key={service._id}
                        name={service.name} image={service.image} description={service.description} />
                            
                        )
                        }
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;