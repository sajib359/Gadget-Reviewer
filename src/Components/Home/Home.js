import React from 'react';

const Home = () => {
    return (
        <div>
           <h1 className='text-4xl my-4 font-serif'>GADGET <span className='text-red-800'>REVIEWER</span></h1>

            <div className='flex justify-center mt-8'>
                <div className='my-36 w-1/2'>
                    <h1>Your Next Budget Earphone <span>KBEAR Lark</span></h1>
                    <h2>I Think In 2022 KBEAR Lark is Best Budget Earphone</h2>
                    <p cl>KB EAR seems intent on competing for the “best value” award as they’ve been launching great earphones at affordable prices. The KB EAR Lark are among the latest earphones they’ve launched and although they target the lowest area of the market, they actually offer quite a good mix of features. With an almost-neutral signature and more than decent technical ability, the Lark are serious contenders to the throne in their price bracket.</p>
                    <button className='bg-slate-400 p-3 rounded'>Buy Now</button>
                </div>
                <div>
                    <img className='max-h-80 max-w-full' src="https://cdn.head-fi.org/a/11356124.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;