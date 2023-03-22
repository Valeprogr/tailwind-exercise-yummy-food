import React from 'react';
const Card = ({props}) => {
    
    return (
        <>
            <div className='card hover:shadow-lg cursor-pointer'>
            <img src={props.img} alt='recipe' className='w-full h-32 sm:h-48 object-cover'></img>
            <div className='m-4'>
                    <span className='font-bold'>{ props.name}</span>
                    <span className='block text-gray-500 text-sm'>{ props.author}</span>
            </div>
                <div className='badge flex justify-between'>
                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                    <span className='ml-1'>{ props.time}</span>
            </div>
        </div>
        </>
    );
}

export default Card;
