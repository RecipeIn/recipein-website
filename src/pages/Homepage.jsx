import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import bg2 from '../assets/img/bg2.jpg'
import { MdNavigateNext } from "react-icons/md";
import sarapan from "../assets/img/breakfast.png"
import lunch from "../assets/img/lunch.png"
import dinner from "../assets/img/dinner.png"
import juice from "../assets/img/juices.png"
import sambal from "../assets/img/sambal.png"
import seblak from "../assets/img/seblak.png"
import sop from "../assets/img/sop.png"
import { IoMdTime } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';


// const popularCategory =[
//     {
//         name: "SARAPAN",
//         icon: "../assets/img/breakfast.png"
//     }
// ]
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

const collection = [
    {
        name: "KUMPULAN RESEP SALAD SEGAR",
        by: "Dapur Amanda",
        total: 15,
        photo: "/src/assets/img/salad.png"
    },
    {
        name: "KUMPULAN RESEP SOTO DAGING",
        by: "Dapur Amanda",
        total: 63,
        photo: "/src/assets/img/soto.png"
    },
    {
        name: "KUMPULAN RESEP NASI GORENG",
        by: "Dapur Amanda",
        total: 240,
        photo: "/src/assets/img/nasi-goreng.png"
    },
    {
        name: "KUMPULAN RESEP BAKSO DAGING",
        by: "Dapur Amanda",
        total: 106,
        photo: "/src/assets/img/bakso2.png"
    },
]

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

function Homepage() {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked((prevIsLiked) => !prevIsLiked);
    }
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
                        <a href="/recipe" className="ml-4 mt-2 text-secondary text-[18px] font-bold hover:text-secondary">Jelajahi Resep</a>
                        <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color="#1E2C48"/>
                    </li>
                </ul>
            </div>
            <div>
                <p className='text-font font-extrabold text-[48px] mt-8 ml-16 mb-8'>Kategori Populer</p>
                <div className='inline-flex'>
                    <div className='flex flex-col ml-[70px]'>
                        <Link to="/pcategory">
                        <div className='w-[154px] h-[154px] rounded-full bg-white shadow-2xl'>
                            <img src={sarapan} className='mt-6 ml-3'/>
                        </div>
                        <div>
                        <p className='text-[20px] font-medium text-font mt-8 ml-8 mb-4'>SARAPAN</p>
                        </div>
                        </Link>
                    </div>
                    <div className='flex flex-col ml-16'>
                        <div className='w-[154px] h-[154px] rounded-full bg-white shadow-2xl'>
                            <img src={lunch} className='mt-8 ml-8 w-[89px]'/>
                        </div>
                        <div>
                        <p className='text-[20px] font-medium text-font mt-8 ml-[6px] mb-4'>MAKAN SIANG</p>
                        </div>
                    </div>
                    <div className='flex flex-col ml-16'>
                        <div className='w-[154px] h-[154px] rounded-full bg-white shadow-2xl'>
                            <img src={dinner} className='mt-6 ml-7 w-[99px]'/>
                        </div>
                        <div>
                        <p className='text-[20px] font-medium text-font mt-8 ml-[6px] mb-4'>MAKAN MALAM</p>
                        </div>
                    </div>
                    <div className='flex flex-col ml-16'>
                        <div className='w-[154px] h-[154px] rounded-full bg-white shadow-2xl'>
                            <img src={juice} className='mt-8 ml-8 w-[89px]'/>
                        </div>
                        <div>
                        <p className='text-[20px] font-medium text-font mt-8 ml-8 mb-4'>JUS BUAH</p>
                        </div>
                    </div>
                    <div className='flex flex-col ml-16'>
                        <div className='w-[154px] h-[154px] rounded-full bg-white shadow-2xl'>
                            <img src={sambal} className='mt-6 ml-6 w-[109px]'/>
                        </div>
                        <div>
                        <p className='text-[20px] font-medium text-font mt-8 ml-[42px] mb-4'>SAMBAL</p>
                        </div>
                    </div>
                    <div className='flex flex-col ml-16'>
                        <div className='w-[154px] h-[154px] rounded-full bg-white shadow-2xl'>
                            <img src={seblak} className='mt-7 ml-6 w-[109px]'/> 
                        </div>
                        <div>
                        <p className='text-[20px] font-medium text-font mt-8 ml-[44px] mb-4'>SEBLAK</p>
                        </div>
                    </div>
                    <div className='flex flex-col ml-16'>
                        <div className='w-[154px] h-[154px] rounded-full bg-white shadow-2xl'>
                            <img src={sop} className='mt-8 ml-8 w-[89px]'/>
                        </div>
                        <div>
                        <p className='text-[20px] font-medium text-font mt-8 ml-[62px] mb-4'>SUP</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-16 ml-12'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-12 ml-4'>Rekomendasi Makanan Mingguan</p>
                <div className='grid grid-cols-4 gap-x-3 gap-y-8'>
                {weeklyMeals.map((weeklyMeals) => (
                    
                    <div className='rounded-[8px] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={weeklyMeals.photo} className='rounded-[8px]'/></Link>
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
                    
                    <div className='rounded-[8px] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={weeklyDrinks.photo} className='rounded-[8px]'/></Link>
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

            <div className='mb-24 ml-16'>
                <p className='text-font font-extrabold text-[48px] mb-4'>Koleksi Resep</p>
                <div className='grid grid-cols-2 gap-8 ml-6'>
                    {collection.map((collection) => (
                    <div className='rounded-[8px] bg-primary w-[646px] h-[470px] shadow-2xl mt-8'>
                        <img src={collection.photo} className='rounded-[8px]'/>
                        <p className='text-font text-[30px] w-[428px] font-bold mt-4 ml-5'>{collection.name}</p>
                        <div className='inline-flex'>
                            <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[20px] ml-5 mt-8'>Oleh {collection.by}</p></Link>
                            <div className='border border-[#3F5D97] w-[123px] h-[40px] rounded-[4px] mt-7 ml-72'>
                            <p className='text-[#3F5D97] text-[16px] font-bold text-center mt-2'>{collection.total} Resep</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className='mb-16 ml-12'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-12 ml-4'>Resep Terbaru</p>
                <div className='grid grid-cols-4 gap-x-3 gap-y-8'>
                {newRecipe.map((newRecipe) => (
                    
                    <div className='rounded-[8px] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={newRecipe.photo} className='rounded-[8px]'/></Link>
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

            <div className='flex ml-[730px]'>
            <Link to="/recipe">
            <div className='justify-center border border-primary w-[158px] h-[40px] rounded-[4px] mb-20 cursor-pointer'>
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