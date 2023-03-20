import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className='text-gray-600'>
            <Navbar />
            <main className='px-16 py-6'>
                <div>
                    <a href='#'>Log in</a>
                    <a href='#'>Sign up</a>
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

                    <div>
                        <div>Load more</div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
