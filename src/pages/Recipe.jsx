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
    useEffect(() => {
        getRecipe1();
    }, []);
    const [recipes1, setRecipes1] = useState([]);
    useEffect(() => {
        getRecipe2();
    }, []);
    const [recipes2, setRecipes2] = useState([]);
    useEffect(() => {
        getRecipe3();
    }, []);
    const [recipes3, setRecipes3] = useState([]);
    useEffect(() => {
        getRecipe4();
    }, []);
    const [recipes4, setRecipes4] = useState([]);

    const getRecipe = async () => {
        try {
            const response = await axios.get("https://api.recepin.my.id/api/recipe");
            const apiRecipes = response.data.data;
            const recipesArray = Object.values(apiRecipes);
            const filteredRecipes = recipesArray.filter((data) => {
                return data.category_id === 6;
            });
            setRecipes(filteredRecipes);
        } catch (error) {
          console.log(error);
        }
    };
    
    const getRecipe1 = async () => {
        try {
            const response = await axios.get("https://api.recepin.my.id/api/recipe");
            const apiRecipes = response.data.data;
            const recipesArray = Object.values(apiRecipes);
            const filteredRecipes = recipesArray.filter((data) => {
                return data.category_id === 7;
            });
            setRecipes1(filteredRecipes);
        } catch (error) {
          console.log(error);
        }
    };
    const getRecipe2 = async () => {
        try {
            const response = await axios.get("https://api.recepin.my.id/api/recipe");
            const apiRecipes = response.data.data;
            const recipesArray = Object.values(apiRecipes);
            const filteredRecipes = recipesArray.filter((data) => {
                return data.category_id === 15;
            });
            setRecipes2(filteredRecipes);
        } catch (error) {
          console.log(error);
        }
    };
    const getRecipe3 = async () => {
        try {
            const response = await axios.get("https://api.recepin.my.id/api/recipe");
            const apiRecipes = response.data.data;
            const recipesArray = Object.values(apiRecipes);
            const filteredRecipes = recipesArray.filter((data) => {
                return data.category_id === 8;
            });
            setRecipes3(filteredRecipes);
        } catch (error) {
          console.log(error);
        }
    };
    const getRecipe4 = async () => {
        try {
            const response = await axios.get("https://api.recepin.my.id/api/recipe");
            const apiRecipes = response.data.data;
            const recipesArray = Object.values(apiRecipes);
            const filteredRecipes = recipesArray.filter((data) => {
                return data.category_id === 10;
            });
            setRecipes4(filteredRecipes);
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
                <p className='text-font font-extrabold text-[48px] mt-16 mb-8 ml-12'>Resep Terbaru</p>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                    {/* {console.log(recipes2)} */}
                    {recipes2.map((recipe) => (
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
            <div className='mb-16'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-8 ml-12'>Rekomendasi Makanan Mingguan</p>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                    {/* {console.log(recipes)} */}
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
            <div className='mb-16'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-8 ml-12'>Rekomendasi Minuman Mingguan</p>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                    {/* {console.log(recipes1)} */}
                    {recipes1.map((recipe) => (
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
            <div className='mb-16'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-8 ml-12'>Aneka Sup</p>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                    {/* {console.log(recipes3)} */}
                    {recipes3.map((recipe) => (
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
            <div className='mb-16'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-8 ml-12'>Aneka Seblak</p>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                    {/* {console.log(recipes4)} */}
                    {recipes4.map((recipe) => (
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