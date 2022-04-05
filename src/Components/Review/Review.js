import React from 'react';

const Review = (props) => {
    const{name ,img ,ratings, comments}=props.review;
    return (
        <div className='border-2 w-96 rounded-md mt-5'>
            <div>
                <img className='mx-auto rounded-lg mt-3' src={img} alt="" />
            </div>
           <div className='text-left mt-5 ml-5'>
                <h2 className='text-xl font-bold'>{name}</h2>
                <p className='text-xl font-bold'> Comments: <span className='text-base text-violet-500'>{comments}</span></p>
                <small className='text-xl font-bold'>Ratings : <span className='text-lg text-red-700 font-semibold'> {ratings}</span> </small>
           </div>
            
        </div>
    );
};

export default Review;