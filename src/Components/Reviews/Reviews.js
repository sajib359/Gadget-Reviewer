import React from 'react';
import Reviewers from '../../Hooks/Reviewers';
import Review from '../Review/Review';

const Reviews = () => {
    const[reviewer , setReviewer]=Reviewers()

    return (
        
       <div>
           <h1 className='text-4xl my-4 font-mono text-orange-400 bg-black w-fit mx-auto p-4'>Review Section</h1>
            <div className='grid grid-cols-3 gap-3 mx-auto'>
            {
                reviewer.map(review=><Review
                key={review.id}
                review={review}
                ></Review>)
            }

        </div>
       </div>
    );
};

export default Reviews;