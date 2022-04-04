import React from 'react';

const Review = (props) => {
    const{name ,img ,rating, comments}=props.review;
    return (
        <div className='border-2'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{comments}</p>
            <small>{rating}</small>
        </div>
    );
};

export default Review;