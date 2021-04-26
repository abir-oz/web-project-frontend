import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="col-md-12 banner-image">
            <div className="container">
                <div className="row  d-flex justify-content-center align-items-center">
                    <div className="col-md-12 mt-5 mb-5">
                        <div className="p-5 m-5 text-center text-white">
                                <h1>Never Stop Exploring</h1>
                                <p className="m-5">
                                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                                   <br/>
                                   molestiae quaerat obcaecati quisquam totam dolore recusandae ullam
                                </p>
                                <Link to="/" className="btn btn-danger rounded-0 px-4 mb-5 py-3">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;