import React,{useEffect,useState} from 'react';
import Spinner from '../components/Spinner';
import { useAppContext } from '../context';

const FavoriteRecipe = () => {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const {recipeData, setRecipeData, esempio} = useAppContext();
    //console.log(recipeData)
    


    const removeHandler = (index) => {
        const data =  JSON.parse(localStorage.getItem('recipe'));
        data.splice(index,1)
        console.log(data)
        localStorage.setItem("recipe", JSON.stringify(data));
        window.location.reload(true)

    }

    return (
        <div className='text-gray-600 font-body bg-gray-100 flex flex-col max-h-full md:items-center px-3' >
            <div className='mt-8 mb-3 text-5xl font-semibold'>
                <p>Your favorite Recipes</p>
            </div>
            <hr/> 
            <div className='relative'>
            {
                recipeData ? 
                    recipeData.map((ele,index,) => (
                        <a href={`/recipe/${index}`}>
                        <div key={index} className='flex  mt-12 mb-2 bg-white border h-auto w-auto p-4 rounded shadow'>
                            <img className='absolute  rounded-full h-32 w-32  object-cover ' src={ele.img} alt="food" />    
                            <div className='flex flex-col m-8 ml-36'>
                            <p className='font-bold text-xl'>{ele.name}</p>
                                <p className='font-thin'>{ele.author}</p>
                                <div className='flex font-semibold'>
                                    <p className='font-semibold'>Prep time:</p>
                                    <p className='ml-3 font-thin'>{ele.time}</p>
                                </div>
                                <div className='flex justify-center mt-3'>
                        <button
                            type='button'
                            className='
                            bg-secondary-100 
                            text-secondary-200
                            btn hover:shadow-inner
                            transform hover:scale-125
                            hover:bg-opacity-50 transition
                            ease-out duration-300 w-36
                            text-center'
                           
                            onClick={() => removeHandler(index)}
                        >Remove</button>
                    </div>
                            </div>
                        </div>                            
                        </a>
                    ))
                        :
                        
                        <Spinner />       
                }
                </div>    
        </div>
    );
}

export default FavoriteRecipe;
