import React from 'react';
import { Link } from 'react-router-dom';



const SingleTourPackages = ({ image, name, price }) => {


  return (



    <>
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
        <Link to={`/book/${name}+${price}`}  className="unit-1 text-center">
          <img src={image} alt="" className="img-fluid" />
          <div className="unit-1-text">
            <strong className="text-primary mb-2 d-block">&#2547;{price}</strong>
            <h3 className="unit-1-heading">{name}</h3>
          </div>
        </Link>
      </div>

    </>
  );
};

export default SingleTourPackages;