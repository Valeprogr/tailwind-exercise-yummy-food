import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className='text-gray-600 font-body'>
            <Navbar />
            <main className='px-16 py-6'>
                <div className='flex justify-end'>
                    <a href='#' className='text-primary'>Log in</a>
                    <a href='#' className='text-primary ml-6'>Sign up</a>
                </div>
                <header>
                    <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
                    <h3 className='text-2xl font-semibold'>For cuties</h3>
                </header>

                <div>
                    <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
                    <div className='mt-8'>
                        {/**Qua verranno importate  le cards */}
                        <Card />
                    </div>
                    <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>
                    <div className='mt-8'>
                        {/**Qua verranno importate le cards */}
                    </div>

                    <div className='flex justify-center'>
                        <div className='bg-secondary-100 text-secondary-200'>Load more</div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
