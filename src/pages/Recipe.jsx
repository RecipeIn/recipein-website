import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import bg3 from '../assets/img/bg3.png'
import CardRecipe from '../component/CardRecipe';
import axios from 'axios';

function Recipe() {
    useEffect(() => {
        getRecipe();
    }, []);
    const [recipes, setRecipes] = useState([]);

    const getRecipe = async () => {
        try {
            const response = await axios.get("https://api.recepin.my.id/api/recipe");
            const apiRecipes = response.data.data;
            const recipesArray = Object.values(apiRecipes);
            setRecipes(recipesArray);
        } catch (error) {
          console.log(error);
        }
    };

    window.scrollTo(0, 0);
    return (
        <>
        <section className='body-font font-nunito w-screen h-full'>
            <Navbar />
            <img src={bg3}className='w-screen h-[400px] mb-16'/>
            <p className='text-[52px] text-font font-extrabold text-center'>Jadilah Koki Di Dapurmu Sendiri</p>
            <div className='text-[22px] font-medium text-font tracking-wide text-center mt-4 mb-12'>
                <p>Jadilah koki andalan di dapur Anda dengan koleksi resep yang beragam.</p>
                <p>Temukan inspirasi, panduan langkah demi langkah, dan tips berguna untuk menciptakan hidangan lezat.</p>
                <p>Jelajahi rasa baru dan buktikan bahwa setiap orang bisa menjadi chef handal.</p>
                <p>Mulai petualangan kuliner Anda sekarang!</p>
            </div>
            <div className='mb-16'>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
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
            <Footer />
        </section>
        </>
    )
}

export default Recipe