import { useState, useEffect, useContext, createContext } from "react";


export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);


export const AppProvider = ({ children }) => {
    const [recipeData, setRecipeData] = useState([]);

    const esempio = () => {
        const data = localStorage.getItem('recipe');
        const result = JSON.parse(data);
        //console.log(result)
        if (result === null) {
           localStorage.setItem("recipe", JSON.stringify(recipeData));
        } else {
            setRecipeData(result)
        }
    }
    
    useEffect(() => {
        esempio();
    }, [])

    const updateState = (recipe) => {
        const data =  JSON.parse(localStorage.getItem('recipe'));
         data.push(recipe)
         //console.log(data)
        localStorage.setItem("recipe", JSON.stringify(data)); 
    }

    
    return (
        <AppContext.Provider value={{
            recipeData,
            setRecipeData,
            esempio,
            updateState
        }}>
            {children}
        </AppContext.Provider>
    );
};
