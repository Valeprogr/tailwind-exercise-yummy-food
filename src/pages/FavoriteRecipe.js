import React,{useEffect,useState} from 'react';
import Spinner from '../components/Spinner';

const FavoriteRecipe = () => {
    const [favoriteRecipes, setFavoriteRecipes] = useState();
    useEffect(() => {
        const data = localStorage.getItem('recipe');
        const recipes = JSON.parse(data);
      setFavoriteRecipes(recipes)
    }, []);

    return (
        <div className='text-gray-600 font-body bg-gray-100 flex flex-col max-h-full md:items-center px-3' >
            <div className='mt-8 mb-3 text-5xl font-semibold'>
                <p>Your favorite Recipes</p>
            </div>
            <hr/> 
            <div className='relative'>
            {
                favoriteRecipes  ? 
                    favoriteRecipes.map((ele,index) => (
                        <div key={index} className='flex  mt-12 mb-2 bg-white border h-auto w-auto p-4 rounded shadow'>
                            <img className='absolute  rounded-full h-32 w-32  object-cover ' src={ele.img} alt="food" />    
                            <div className='flex flex-col m-8 ml-36'>
                            <p className='font-bold text-xl'>{ele.name}</p>
                                <p className='font-thin'>{ele.author}</p>
                                <div className='flex font-semibold'>
                                    <p className='font-semibold'>Prep time:</p>
                                    <p className='ml-3 font-thin'>{ele.time}</p>
                                </div>
                            
                            </div>
                        </div>
                    ))
                        :
                        
                        <Spinner />       
                }
                </div>    
        </div>
    );
}

export default FavoriteRecipe;
