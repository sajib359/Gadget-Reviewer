import React from 'react';
import Reviewers from '../../Hooks/Reviewers';
import Review from '../Review/Review';

const Reviews = () => {
    const[reviewer , setReviewer]=Reviewers()

    return (
        <div className='grid grid-cols-3'>
            {
                reviewer.map(review=><Review
                key={review.id}
                review={review}
                ></Review>)
            }

        </div>
    );
};

export default Reviews;