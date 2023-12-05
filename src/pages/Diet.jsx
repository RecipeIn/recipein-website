import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import bg4 from '../assets/img/bg4.png'
import { IoMdTime } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const healthyMeals = [
    {
        category: "Salad",
        name: "Salad Sayur Segar",
        creatorName: "Dapur Amanda",
        rating: "4.7",
        estTime: 12,
        photo: "/src/assets/img/salad-sayur.png"
    },
    {
        category: "Salad",
        name: "Salad Buah Segar",
        creatorName: "Dapur Rere",
        rating: "4.6",
        estTime: 14,
        photo: "/src/assets/img/salad-buah.png"
    },
    {
        category: "Sayur",
        name: "Sayur Bayam",
        creatorName: "Dapur Sasa",
        rating: "4.9",
        estTime: 25,
        photo: "/src/assets/img/sayur-bayam.png"
    },
    {
        category: "Salad",
        name: "Salad Sayur Matang",
        creatorName: "Dapur Ika",
        rating: "4.4",
        estTime: 16,
        photo: "/src/assets/img/salad-sayur2.png"
    },
    {
        category: "Sereal",
        name: "Oatmeal Susu Lowfat",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/oatmeal.png"
    },
    {
        category: "Nasi Diet",
        name: "Nasi Merah Tofu",
        creatorName: "Dapur Sasa",
        rating: "4.3",
        estTime: 25,
        photo: "/src/assets/img/nasi-merah.png"
    },
    {
        category: "Sayur",
        name: "Capcay",
        creatorName: "Dapur Rere",
        rating: "4.6",
        estTime: 35,
        photo: "/src/assets/img/capcay.png"
    },
    {
        category: "Telur",
        name: "Rolade Telur",
        creatorName: "Dapur Ika",
        rating: "4.4",
        estTime: 55,
        photo: "/src/assets/img/rolade.png"
    },
]

const lowCalMeals = [
    {
        category: "Tahu",
        name: "Pepes Tahu",
        creatorName: "Dapur Amanda",
        rating: "4.8",
        estTime: 24,
        photo: "/src/assets/img/pepes-tahu.png"
    },
    {
        category: "Tahu",
        name: "Bakso Tahu",
        creatorName: "Dapur Rere",
        rating: "4.7",
        estTime: 55,
        photo: "/src/assets/img/bakso-tahu.png"
    },
    {
        category: "Daging",
        name: "Sandwich Daging",
        creatorName: "Dapur Sasa",
        rating: "4.3",
        estTime: 30,
        photo: "/src/assets/img/sandwich.png"
    },
    {
        category: "Ikan",
        name: "Salmon Panggang",
        creatorName: "Dapur Ika",
        rating: "4.6",
        estTime: 25,
        photo: "/src/assets/img/salmon-panggang.png"
    },
]

function Diet() {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked((prevIsLiked) => !prevIsLiked);
    }
    return (
        <>
        <section className='body-font font-nunito w-screen h-full'>
            <Navbar />
            <img src={bg4}className='w-screen h-[400px] mb-16'/>
            <p className='text-[52px] text-font font-extrabold text-center'>Diet Sehat</p>
            <div className='text-[22px] font-medium text-font tracking-wide text-center mt-4 mb-12'>
                <p>Sumber utama resep diet sehat! Jelajahi koleksi resep kami yang lezat dan </p>
                <p>mendukung gaya hidup sehat. Temukan hidangan rendah kalori, tinggi nutrisi, dan</p>
                <p>nikmati makanan lezat tanpa kompromi.</p>
            </div>
            <div className='mb-16 ml-12'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-12 ml-4'>Menu Sehat</p>
                <div className='grid grid-cols-4 gap-x-3 gap-y-8'>
                {healthyMeals.map((healthyMeals) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={healthyMeals.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                        <button className={`w-[44px] h-[44px] rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5 ${
                            isLiked ? 'text-red-500' : 'text-font'}`}
                            onClick={handleLikeClick}
                            >
                            {isLiked ? <AiFillHeart fontSize="24px"/> : <AiOutlineHeart fontSize='24px'/>}
                        </button>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{healthyMeals.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{healthyMeals.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {healthyMeals.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{healthyMeals.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{healthyMeals.rating}</p>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            <div className='mb-16 ml-12'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-12 ml-4'>Menu Rendah Kalori</p>
                <div className='grid grid-cols-4 gap-x-3 gap-y-8'>
                {lowCalMeals.map((lowCalMeals) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={lowCalMeals.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                        <button className={`w-[44px] h-[44px] rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5 ${
                            isLiked ? 'text-red-500' : 'text-font'}`}
                            onClick={handleLikeClick}
                            >
                            {isLiked ? <AiFillHeart fontSize="24px"/> : <AiOutlineHeart fontSize='24px'/>}
                        </button>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{lowCalMeals.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{lowCalMeals.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {lowCalMeals.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{lowCalMeals.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{lowCalMeals.rating}</p>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            <Footer />
            </section>
        </>
    )
}

export default Diet