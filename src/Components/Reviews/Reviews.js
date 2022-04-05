import React from 'react';
import Reviewers from '../../Hooks/Reviewers';
import Review from '../Review/Review';

const Reviews = () => {
    const[reviewer , setReviewer]=Reviewers()

    return (
        
       <div className='bg-sky-100 m-0'>
           <h1 className='text-4xl  font-mono text-orange-400 bg-black w-fit mx-auto p-2'>Review Section</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto justify-items-center'>
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