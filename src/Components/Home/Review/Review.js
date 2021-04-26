import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://still-mountain-18271.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}

            >
                {reviews.map((review) =>

                    <SingleReview
                    
                    key={review._id}

                    name={review.name}
                    company={review.company}
                    description={review.description}
                    image= {review.image}

                    
                    />

                )}

            </Carousel>

        </>
    );
};

export default Review;