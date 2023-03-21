import React from 'react';




const Card = () => {
    return (
        <>
            <div className='card hover:shadow-lg'>
            <img src={"./images/mango-salsa-chicken.jpeg"} alt='recipe' className='w-full h-32 sm:h-48 object-cover'></img>
            <div className='m-4'>
                <span className='font-bold'>Mango Salsa Chicken Bowls</span>
                <span className='block text-gray-500 text-sm'>Recipe by CleanFoodCrush via Pinterest</span>
            </div>
                <div className='badge'>
                <svg className='w-5 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                <span>20 min</span>
            </div>
            </div>
            

            <div className='card hover:shadow-lg'>
            <img src={"./images/cupcakes.jpeg"} alt='recipe' className='w-full h-32 sm:h-48 object-cover'></img>
            <div className='m-4'>
                <span className='font-bold'>Cherry Cupcakes</span>
                <span className='block text-gray-500 text-sm'>Recipe by CupWorld via Pinterest</span>
            </div>
                <div className='badge'>
                <svg className='w-5 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                <span>20 min</span>
            </div>
            </div>
            

            <div className='card hover:shadow-lg'>
            <img src={"./images/falafel.jpeg"} alt='recipe' className='w-full h-32 sm:h-48 object-cover'></img>
            <div className='m-4'>
                <span className='font-bold'>Falafel</span>
                <span className='block text-gray-500 text-sm'>Recipe by LebaniseCusine via Pinterest</span>
            </div>
                <div className='badge'>
                <svg className='w-5 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                <span>20 min</span>
            </div>
        </div>
        </>
    );
}

export default Card;
