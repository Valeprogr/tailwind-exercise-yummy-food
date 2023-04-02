import React,{useState, useCallback,useEffect} from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import data from '../data/data.json';
const Home = () => {
    const [recipeData, setRecipeData] = useState([]);

    const esempio = () => {
    const data = localStorage.getItem('recipe');
        const result = JSON.parse(data)
        if (result === null) {
            localStorage.setItem("recipe", JSON.stringify(recipeData));
        }
        console.log(localStorage.getItem('recipe'))
       
    }

    // useEffect(() => {
    //     esempio();
    //     console.log(recipeData)
    // },[])


    const updateState = useCallback(recipe => {
        console.log(recipe)
        //setRecipeData(prev => [...prev, recipe]);
        //console.log(recipeData.length)
        const data = localStorage.getItem('recipe');
        const result = JSON.parse(data);
        console.log(result.length)
        if (result.length !==  0) {
        setRecipeData(prev => [...prev, recipe]);
        console.log(recipeData)
        localStorage.setItem("recipe", JSON.stringify(recipeData));
        console.log("add")
        } else {
            localStorage.setItem("recipe", JSON.stringify(recipe));
        }
       
    }, [recipeData])

    return (
        <div className='text-gray-600 font-body grid md:grid-cols-6'>
            <Navbar />
            <main className='px-16 py-6 bg-gray-100 md:col-span-5'>
                <div className='flex justify-center md:justify-end'>
                    <a href='/login' className='text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'>Log in</a>
                    <a href='/signup' className='text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'>Sign up</a>
                </div>
                <header>
                    <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
                    <h3 className='text-2xl font-semibold'>For cuties</h3>
                </header>

                <div>
                    <button onClick={esempio}>check</button>
                    <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
                    <div className='mt-8 grid lg:grid-cols-3 gap-10'>
                        {/**Qua verranno importate  le cards */}
                        {data.recipe.map((ele, index) => <Card props={ele} index={index} clickHandler={updateState} />)}
                        
                    </div>
                    <h4 className='font-bold mt-12 pb-2 border-b border-gray-200 text-center'>List of your favorite Recipe</h4>
                    <div className='mt-8'>
                        {/**Qua verranno importate le cards */}
                    </div>

                    <div className='flex justify-center'>
                        <a href='/favorites'>
                        <div className='bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>Favorite Recipe</div>
                        </a>
                        
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
