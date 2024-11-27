import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import bg7 from '../assets/img/bg7.png'
import axios from 'axios';
import CardRecipe from '../component/CardRecipe';

function AdvancedSearchResult() {
    const [recipes, setRecipes] = useState([]);
    const searchKeyword = localStorage.getItem('keyword2')
    const searchKeyword1 = localStorage.getItem('keyword3')
    const searchKeyword2 = localStorage.getItem('keyword4')
    useEffect(() => {
          getRecipes();
    }, [searchKeyword, searchKeyword1, searchKeyword2]);
    const getRecipes = async () => {
        try {
            const recipeResponse = await axios.get("https://api.recepin.my.id/api/recipe");
            const ingredientResponse = await axios.get("https://api.recepin.my.id/api/recipe-ingredient");

            const apiRecipes = recipeResponse.data.data;
            const apiIngredients = ingredientResponse.data.data;

            const recipesArray = Object.values(apiRecipes);
            const ingredientsArray = Object.values(apiIngredients);

            const includeIngredient = searchKeyword1.split(",").filter(Boolean)
            const excludeIngredient = searchKeyword2.split(",").filter(Boolean)

            const filteredIncludeIngredient = ingredientsArray.filter(ingredient => includeIngredient.includes(ingredient.ingredient_name))
            const filteredExcludeIngredient = ingredientsArray.filter(ingredient => excludeIngredient.includes(ingredient.ingredient_name))

            const filteredRecipes = recipesArray.filter(recipe => recipe.name.toLowerCase().includes(searchKeyword.toLowerCase()))
            const includeFilteredRecipes = includeIngredient.length > 0 ? 
                filteredRecipes.filter(recipe => filteredIncludeIngredient.some(ingredient => ingredient.recipe_id === recipe.id)): filteredRecipes
            const excludeFilteredRecipes = excludeIngredient.length > 0 ? 
                includeFilteredRecipes.filter(recipe => !filteredExcludeIngredient.some(ingredient => ingredient.recipe_id === recipe.id)): includeFilteredRecipes
            setRecipes(excludeFilteredRecipes)
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <>
        <section className='body-font font-nunito w-screen h-full'>
            <Navbar/>
            <img src={bg7}className='w-screen h-[400px] mb-16'/>

            {recipes.length === 0 ? (
                <p className='text-[52px] ml-12 mt-8 mb-40 text-font font-bold'>Tidak ada resep yang ditemukan.</p>
            )   : (
            <div className='mt-8 ml-12 mb-12'>
                <p className='text-[52px] text-font font-bold'>Hasil Pencarian</p>
                {/* <p className='mt-2 text-[22px] font-medium tracking-wide text-font'><span className='font-bold'>Cari Resep: </span>{searchKeyword}</p> */}
            </div>
            )}

            <div className='mb-16'>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                    {console.log(recipes)}
                    {recipes.map((recipe) => (
                        <CardRecipe
                            key={recipe.id}
                            image={recipe.image}
                            category={recipe.category_name}
                            name={recipe.name}
                            creator={recipe.user_username}
                            est={recipe.preparation_time + recipe.cooking_time}
                            rating={recipe.rating}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </section>
        </>
    )
}

export default AdvancedSearchResult