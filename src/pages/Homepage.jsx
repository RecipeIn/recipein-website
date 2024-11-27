import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import bg2 from '../assets/img/bg2.jpg'
import { MdNavigateNext } from "react-icons/md";
import CardRecipe from '../component/CardRecipe';
import axios from 'axios';
import CardCategory from '../component/CardCategory';

function Homepage() {
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
        getCategory();
    }, []);
    const [category, setCategory] = useState([]);
    
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
    const getCategory = async () => {
        try {
            const response = await axios.get("https://api.recepin.my.id/api/category");
            const apiCategory = response.data.data;
            const categoryArray = Object.values(apiCategory).slice(0,5);
            setCategory(categoryArray);
        } catch (error) {
          console.log(error);
        }
    };
    window.scrollTo(0, 0);
    return (
        <>
        <section className='body-font font-nunito w-screen h-full'>
            <Navbar/>  
            <div className=''>
                <img src={bg2}className='w-screen h-[600px]'/>
                <p className='w-[600px] absolute top-52 ml-12 text-[64px] font-bold text-white tracking-wide'>Jadilah Koki Di Dapurmu Sendiri</p>
                <p className='w-[500px] absolute top-[400px] ml-12 text-[28px] font-medium text-white tracking-wide'>Dari Sarapan hingga Makan Malam, Kami Siap Membantu Anda</p>
                <ul className="absolute top-[510px] ml-12">
                    <li className='bg-primary rounded-[4px] w-[178px] h-[45px] inline-flex justify-between border-none'>
                        <a href="/recipe" className="ml-4 mt-2 text-font text-[18px] font-bold hover:text-secondary">Jelajahi Resep</a>
                        <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color="#1E2C48"/>
                    </li>
                </ul>
            </div>
            <div>
                <p className='text-font font-extrabold text-[48px] mt-8 ml-16 mb-8'>Kategori Populer</p>
                <div className='flex justify-between px-20 mb-8'>
                    {category.map((cat) => (
                        <CardCategory
                            key={cat.id}
                            name={cat.name}
                            image={cat.image}
                        />
                    ))}
                </div>
            </div>
            <div className='mb-16'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-8 ml-12'>Rekomendasi Makanan Mingguan</p>
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
            
            <div className='mb-16'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-8 ml-12'>Rekomendasi Minuman Mingguan</p>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
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
                <p className='text-font font-extrabold text-[48px] mt-16 mb-8 ml-12'>Resep Terbaru</p>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
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

            <div className='flex justify-center'>
            <Link to="/recipe">
            <div className='border border-primary w-[158px] h-[40px] rounded-[4px] mb-20 cursor-pointer'>
                <p className='text-secondary text-[18px] font-bold text-center mt-1'>Lebih Banyak</p>
            </div>
            </Link>
            </div>
            <Footer />
        </section>
        </>
    )
}

export default Homepage