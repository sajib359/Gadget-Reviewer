import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl text-blue-600 font-bold bg-orange-500 w-fit mx-auto p-6 mt-12'>Question & Answer Section</h1>
            <div className='flex gap-3 mt-12 justify-center'>
                <div className='w-1/3 shadow-xl'>
                    <img className='w-3/2' src="https://miro.medium.com/max/1266/1*BSZ8vrQ8OXkoclrsg_C3HA.png" alt="" />
                    <h2 className=' mt-12 font-bold text-2xl text-blue-500'>What is Context API ?</h2>
                    <p className='font-serif mt-5'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>

                    <h2 className=' mt-12 font-bold text-2xl text-blue-500'>Purpose Of Context API ?</h2>

                    <p className='font-serif mt-5'>The React Context API was been around as an experimental feature for a while now but finally became safe to use in production last year, solving one major problem React problem — prop drilling. In this article, Toptal Freelance Javascript Developer Boris Yordanov will introduce us to the API and illustrate it with two basic web store apps, one built with the Context API and one without it.</p>
                </div>
                <div className='w-1/3 shadow-xl'>
                    <img className='w-3/2' src="https://clearlydecoded.com/assets/images/posts/2017-10-02-modern-html-semantic-elements/thumbnail-750x400.png" alt="" />

                    <h2 className='mt-12 font-bold text-2xl text-blue-500'>What Is Semantic Tags ?</h2>
                    <p className='font-serif mt-5'>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a  tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

                     On the flip side of this equation, tags such as  and  are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.</p>
                </div>
                <div className='w-1/3 shadow-xl'>
                    <img src="https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2018/02/Difference-Between-Block-and-Inline-Elements-fig-1.png?w=567&ssl=1" alt="" />

                    <h2 className=' mt-12 font-bold text-2xl text-blue-500'>Difference Between Inline Element vs Block Element?</h2>

                    <h3 className=' mt-8 font-bold text-2xl text-blue-500'>Inline Element:</h3>
                    <ul className='font-serif mt-5'>
                        <li>Inline elements can begin within a line of the HTML element, and it never starts a new line for the HTML.</li>
                        <li>Inline elements can break among the lines.</li>
                        <li>Inline elements create small structures and support mostly the files with small structures.</li>
                        <li>Inline elements accept only left and right margins and do not accept top and bottom margins.</li>
                    </ul>

                    <h3 className=' mt-8 font-bold text-2xl text-blue-500'>Block Element: </h3>
                    <ul className='font-serif mt-5'>
                        <li>Blocks cannot begin within a line of the HTML element, and it always starts the new line of the HTML.</li>
                        <li>Block elements cannot break among the lines.</li>
                        <li>Block elements create large structures when compared with inline elements and easily support large files.</li>
                        <li>Block elements accept all the margins, including left, right, top and bottom margins. Hence the elements are created easily with no margin constraints.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;