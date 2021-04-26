import React from 'react';



const SingleSevices = ({image, name, description}) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="m-3 d-flex">
                <div className="me-1">
                    <img className="img-fluid w-50" src={image} alt="" />
                </div>
                <div>
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleSevices;