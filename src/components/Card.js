import React from 'react';




const Card = () => {
    return (
        <div className='card'>
            <img src={"./images/mango-salsa-chicken.jpeg"} alt='recipe' className='w-full h-32 sm:h-48 object-cover'></img>
            <div className='m-4'>
                <span className='font-bold'>Mango Salsa Chicken Bowls</span>
                <span className='block text-gray-500 text-sm'>Recipe by CleanFoodCrush via Pinterest</span>
            </div>
            <div className='badge'>
                <span>20 min</span>
            </div>
        </div>
    );
}

export default Card;
