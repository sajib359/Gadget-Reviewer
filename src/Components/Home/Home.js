import React from 'react';
import Reviewers from '../../Hooks/Reviewers';
import Review from '../Review/Review';

const Home = () => {
    const[reviewer , setReviewer]=Reviewers();
    return (
        <div>
           <h1 className='text-4xl my-4 font-mono'>GADGET <span className='text-red-800'>REVIEWER</span></h1>

            <div className='flex justify-center mt-8 gap-3 max-h-85'>
                <div className='my-24 w-1/2'>
                    <h1 className='text-2xl font-bold'>Your Next Budget Earphone <span>KBEAR Lark</span></h1>
                    <h2 className='text-xl font-mono font-semibold text-cyan-500'>I Think In 2022 KBEAR Lark is Best Budget Earphone</h2>
                    <p className='text-lg'>KBEAR seems intent on competing for the “best value” award as they’ve been launching great earphones at affordable prices. The KB EAR Lark are among the latest earphones they’ve launched and although they target the lowest area of the market, they actually offer quite a good mix of features. With an almost-neutral signature and more than decent technical ability, the Lark are serious contenders to the throne in their price bracket.</p>
                    <button className='bg-slate-400 px-12 py-3 rounded text-2xl mt-5'>Buy Now</button>
                </div>
                <div>
                    <img className='h-96 w-96' src="https://cdn.head-fi.org/a/11356124.jpg" alt="" />
                </div>
            </div>

            <div>
                <h1 className='text-5xl bg-cyan-600 font-mono font-bold text-lime-300'>Customers Reviews(3)</h1>
            </div>
            <div className='grid grid-cols-3 gap-3 ml-24'>
            {
                reviewer.map(review=><Review
                key={review.id}
                review={review}
                ></Review>)
            }
            </div>
            <button className='text-2xl font-mono font-bold bg-cyan-300 px-16 py-3 mt-5' >See More</button>
        </div>
    );
};

export default Home;