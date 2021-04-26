import React from 'react';
import img from '../../../images/05-london.jpg'

const SingleReview = ({image, name, description, company}) => {
    return (
        <>
            <div>
               <img src={image} alt=""/>
                <div className="myCarousel mt-2">
                    <h3 className="mb-2">{name}</h3>
                    <h4>{company}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
};

export default SingleReview;