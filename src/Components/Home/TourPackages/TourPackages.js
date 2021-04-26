import React, { useEffect, useState } from 'react';
import SingleTourPackages from './SingleTourPackages';

const TourPackages = () => {
    const [packages,setPackages] = useState([]);

    useEffect(() => {
        fetch("https://still-mountain-18271.herokuapp.com/packages")
        .then( res => res.json())
        .then(data => setPackages(data))
    },[])
    return (
        <>
            <div className="site-section" id="packages">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">

                        {
                         packages.map(service => 
                        <SingleTourPackages
                        key={service._id}
                        name={service.name} image={service.image} price={service.price} />
                            
                        )
                        }
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default TourPackages;