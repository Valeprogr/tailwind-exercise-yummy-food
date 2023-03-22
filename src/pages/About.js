import React from 'react';

const About = () => {
    return (
        <div className='text-gray-600 font-body bg-gray-100 h-auto flex flex-col'>
            <div className='flex flex-col items-center pt-12 pb-5 border-b border-gray-200'>
                <p className='text-6xl font-bold'>About Us</p>
                <p className='text-md uppercase'>Healthy cousine Blog</p>
            </div>
            <div className='md:grid grid-cols-2 md:pr-4 md:pl-4 bg-white rounded h-auto '>
                <div className='flex items-center'>
                    <img src='./images/about.jpeg' alt='fresh products' className='object-cover w-screen lg:max-w-auto lg:max-h-[600px]'></img>
                </div>
                <div className='my-24 lg:my-52 mx-7 text-center block w-auto items-center  lg:text-xl'>
                    <p >
                    Welcome to Yummy Food, a blog created to select the best recipes shared on the internet. 
                    Here you will find a large collection of recipes based on the use of fresh, top-quality products.
                        In addition to having your recipe book at your fingertips, you can save your favourite recipes and share them on other social media.
                    <div className='my-6'>
                     <em className='font-bold text-black'>Yummy Food Team</em>         
                    </div>
                      
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
