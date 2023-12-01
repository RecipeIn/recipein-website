import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import bg3 from '../assets/img/bg3.png'
import { IoMdTime } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const newRecipe = [
    {
        category: "Ayam",
        name: "Ayam Bakar Kemangi",
        creatorName: "Dapur Amanda",
        rating: "4.3",
        estTime: 55,
        photo: "/src/assets/img/ayam-bakar.png"
    },
    {
        category: "Ayam",
        name: "Ayam Kecap",
        creatorName: "Dapur Rere",
        rating: "3.9",
        estTime: 70,
        photo: "/src/assets/img/ayam-kecap.png"
    },
    {
        category: "Ayam",
        name: "Kari Ayam",
        creatorName: "Dapur Sasa",
        rating: "4.6",
        estTime: 65,
        photo: "/src/assets/img/kari-ayam.png"
    },
    {
        category: "Sop",
        name: "Sop Ayam",
        creatorName: "Dapur Ika",
        rating: "4.7",
        estTime: 45,
        photo: "/src/assets/img/sop-ayam.png"
    },
    {
        category: "Mie",
        name: "Bakmie Goreng Jawa",
        creatorName: "Dapur Amanda",
        rating: "4.3",
        estTime: 40,
        photo: "/src/assets/img/bakmie-jawa.png"
    },
    {
        category: "Mie",
        name: "Mie Level",
        creatorName: "Dapur Sasa",
        rating: "4.1",
        estTime: 35,
        photo: "/src/assets/img/mie-level.png"
    },
    {
        category: "Bakso",
        name: "Bakso Tusuk Pedas",
        creatorName: "Dapur Rere",
        rating: "4.8",
        estTime: 35,
        photo: "/src/assets/img/bakso-tusuk.png"
    },
    {
        category: "Daging",
        name: "Sate Daging Kambing",
        creatorName: "Dapur Ika",
        rating: "4.4",
        estTime: 80,
        photo: "/src/assets/img/sate-kambing.png"
    },
]

const weeklyMeals = [
    {
        category: "Salad",
        name: "Salad Buah Segar",
        creatorName: "Dapur Amanda",
        rating: "4.2",
        estTime: 20,
        photo: "/src/assets/img/salad2.png"
    },
    {
        category: "Nasi Goreng",
        name: "Nasi Goreng Udang",
        creatorName: "Dapur Sasa",
        rating: "4.7",
        estTime: 30,
        photo: "/src/assets/img/nasi-goreng-udang.png"
    },
    {
        category: "Soto Daging",
        name: "Soto Betawi",
        creatorName: "Dapur Ika",
        rating: "4.8",
        estTime: 45,
        photo: "/src/assets/img/soto-betawi.png"
    },
    {
        category: "Bakso",
        name: "Bakso Daging Sapi",
        creatorName: "Dapur Rere",
        rating: "4.6",
        estTime: 75,
        photo: "/src/assets/img/bakso.png"
    },
]

const weeklyDrinks = [
    {
        category: "Smoothie",
        name: "Smoothie Kiwi",
        creatorName: "Dapur Amanda",
        rating: "4.6",
        estTime: 20,
        photo: "/src/assets/img/smoothie-kiwi.png"
    },
    {
        category: "Kopi",
        name: "Kopi Frappe Coklat",
        creatorName: "Dapur Ika",
        rating: "4.7",
        estTime: 26,
        photo: "/src/assets/img/frappe-kopi.png"
    },
    {
        category: "Coklat",
        name: "Coklat Panas",
        creatorName: "Dapur Sasa",
        rating: "4.3",
        estTime: 8,
        photo: "/src/assets/img/coklat-panas.png"
    },
    {
        category: "Es Teh",
        name: "Es Teh Persik",
        creatorName: "Dapur Rere",
        rating: "4.8",
        estTime: 15,
        photo: "/src/assets/img/es-teh.png"
    },
]
const variousSoup = [
    {
        category: "Sup",
        name: "Sup Ikan Kembung",
        creatorName: "Dapur Amanda",
        rating: "4.6",
        estTime: 45,
        photo: "/src/assets/img/sup-ikan-kembung.png"
    },
    {
        category: "Sup",
        name: "Sup Daging",
        creatorName: "Dapur Ika",
        rating: "4.7",
        estTime: 60,
        photo: "/src/assets/img/sup-daging.png"
    },
    {
        category: "Sup",
        name: "Sup Kepala Kakap",
        creatorName: "Dapur Sasa",
        rating: "4.6",
        estTime: 70,
        photo: "/src/assets/img/sup-kepala-kakap.png"
    },
    {
        category: "Sup",
        name: "Sup Daging Kentang",
        creatorName: "Dapur Rere",
        rating: "4.8",
        estTime: 75,
        photo: "/src/assets/img/sup-daging-kentang.png"
    },
]

const variousSeblak = [
    {
        category: "Seblak",
        name: "Seblak Ceker",
        creatorName: "Dapur Amanda",
        rating: "4.8",
        estTime: 20,
        photo: "/src/assets/img/seblak-ceker.png"
    },
    {
        category: "Seblak",
        name: "Seblak Seafood",
        creatorName: "Dapur Ika",
        rating: "4.7",
        estTime: 20,
        photo: "/src/assets/img/seblak-seafood.png"
    },
    {
        category: "Seblak",
        name: "Seblak Cuanki Lidah",
        creatorName: "Dapur Sasa",
        rating: "4.0",
        estTime: 15,
        photo: "/src/assets/img/seblak-cuanki.png"
    },
    {
        category: "Seblak",
        name: "Seblak Rafael",
        creatorName: "Dapur Rere",
        rating: "4.8",
        estTime: 20,
        photo: "/src/assets/img/seblak-rafael.png"
    },
]

function Recipe() {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked((prevIsLiked) => !prevIsLiked);
    }
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
            <div className='mb-16 ml-12'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-12 ml-4'>Resep Terbaru</p>
                <div className='grid grid-cols-4 gap-x-3 gap-y-8'>
                {newRecipe.map((newRecipe) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={newRecipe.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                        <button className={`w-[44px] h-[44px] rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5 ${
                            isLiked ? 'text-red-500' : 'text-font'}`}
                            onClick={handleLikeClick}
                            >
                            {isLiked ? <AiFillHeart fontSize="24px"/> : <AiOutlineHeart fontSize='24px'/>}
                        </button>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{newRecipe.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{newRecipe.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {newRecipe.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{newRecipe.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{newRecipe.rating}</p>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            <div className='mb-16 ml-12'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-12 ml-4'>Rekomendasi Makanan Mingguan</p>
                <div className='grid grid-cols-4 gap-x-3 gap-y-8'>
                {weeklyMeals.map((weeklyMeals) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={weeklyMeals.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                        <button className={`w-[44px] h-[44px] rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5 ${
                            isLiked ? 'text-red-500' : 'text-font'}`}
                            onClick={handleLikeClick}
                            >
                            {isLiked ? <AiFillHeart fontSize="24px"/> : <AiOutlineHeart fontSize='24px'/>}
                        </button>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{weeklyMeals.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{weeklyMeals.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {weeklyMeals.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{weeklyMeals.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{weeklyMeals.rating}</p>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            <div className='mb-16 ml-12'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-12 ml-4'>Rekomendasi Minuman Mingguan</p>
                <div className='grid grid-cols-4 gap-x-3 gap-y-8'>
                {weeklyDrinks.map((weeklyDrinks) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={weeklyDrinks.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                        <button className={`w-[44px] h-[44px] rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5 ${
                            isLiked ? 'text-red-500' : 'text-font'}`}
                            onClick={handleLikeClick}
                            >
                            {isLiked ? <AiFillHeart fontSize="24px"/> : <AiOutlineHeart fontSize='24px'/>}
                        </button>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{weeklyDrinks.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{weeklyDrinks.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {weeklyDrinks.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{weeklyDrinks.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{weeklyDrinks.rating}</p>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            <div className='mb-16 ml-12'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-12 ml-4'>Aneka Sup</p>
                <div className='grid grid-cols-4 gap-x-3 gap-y-8'>
                {variousSoup.map((variousSoup) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={variousSoup.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                        <button className={`w-[44px] h-[44px] rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5 ${
                            isLiked ? 'text-red-500' : 'text-font'}`}
                            onClick={handleLikeClick}
                            >
                            {isLiked ? <AiFillHeart fontSize="24px"/> : <AiOutlineHeart fontSize='24px'/>}
                        </button>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{variousSoup.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{variousSoup.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {variousSoup.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{variousSoup.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{variousSoup.rating}</p>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            <div className='mb-16 ml-12'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-12 ml-4'>Aneka Seblak</p>
                <div className='grid grid-cols-4 gap-x-3 gap-y-8'>
                {variousSeblak.map((variousSeblak) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={variousSeblak.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                        <button className={`w-[44px] h-[44px] rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5 ${
                            isLiked ? 'text-red-500' : 'text-font'}`}
                            onClick={handleLikeClick}
                            >
                            {isLiked ? <AiFillHeart fontSize="24px"/> : <AiOutlineHeart fontSize='24px'/>}
                        </button>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{variousSeblak.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{variousSeblak.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {variousSeblak.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{variousSeblak.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{variousSeblak.rating}</p>
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

export default Recipe