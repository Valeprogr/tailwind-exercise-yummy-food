import React from 'react';

const FavoriteRecipe = () => {
    // useEffect(() => {
    //     const data = localStorage.getItem('recipe');
    //     const recipes = JSON.parse(data);
    //     console.log(recipes)
    // }, []);

    return (
        <div className='text-gray-600 font-body bg-gray-100 flex max-h-full justify-center'>
            <div className='mt-8 mb-3 text-5xl font-semibold '>
                <p>Your favorite Recipes</p>
            </div>
            <hr/> 
            <div className='bg-white'>

            </div>
            
        </div>
    );
}

export default FavoriteRecipe;