import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import bg6 from '../assets/img/bg6.png'
import { IoMdTime } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const result = [
    {
        category: "Salad",
        name: "Salad Sayur Segar",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad4.png"
    },
    {
        category: "Salad",
        name: "Salad Sayur Daging",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad5.png"
    },
    {
        category: "Salad",
        name: "Salad Sayur Telur",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad6.png"
    },
    {
        category: "Salad",
        name: "Salad Sayur Segar",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad3.png"
    },
    {
        category: "Salad",
        name: "Salad Buah",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad7.png"
    },
    {
        category: "Salad",
        name: "Salad Buah",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad2.png"
    },
    {
        category: "Salad",
        name: "Salad Buah Madu",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad8.png"
    },
    {
        category: "Salad",
        name: "Salad Sayur Hijau",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad9.png"
    },
    {
        category: "Salad",
        name: "Salad Buah Hijau",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad10.png"
    },
    {
        category: "Salad",
        name: "Salad Kiwi & Apel",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad11.png"
    },
    {
        category: "Salad",
        name: "Salad Buah",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad12.png"
    },
    {
        category: "Salad",
        name: "Salad Buah Enak",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad13.png"
    },
    {
        category: "Salad",
        name: "Salad Sayur Wortel",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad14.png"
    },
    {
        category: "Salad",
        name: "Salad Sayur Mayo",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad15.png"
    },
    {
        category: "Salad",
        name: "Salad Sayur Daging",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad16.png"
    },
    {
        category: "Salad",
        name: "Salad Sayur Mayo",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/salad17.png"
    },
]

function SearchResult() {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked((prevIsLiked) => !prevIsLiked);
    }
    return (
        <>
        <section className='body-font font-nunito w-screen h-full'>
            <Navbar/>
            <img src={bg6}className='w-screen h-[400px] mb-16'/>

            <div className='mt-8 ml-12 mb-12'>
                <p className='text-[52px] text-font font-bold'>16 Resep Tersedia</p>
                <p className='mt-2 text-[22px] font-medium tracking-wide text-font'><span className='font-bold'>Cari Resep: </span>Salad</p>
            </div>
            <div className='mb-16 ml-12'>
                <div className='grid grid-cols-4 gap-x-3 gap-y-8'>
                {result.map((result) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={result.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                        <button className={`w-[44px] h-[44px] rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5 ${
                            isLiked ? 'text-red-500' : 'text-font'}`}
                            onClick={handleLikeClick}
                            >
                            {isLiked ? <AiFillHeart fontSize="24px"/> : <AiOutlineHeart fontSize='24px'/>}
                        </button>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{result.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{result.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {result.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{result.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{result.rating}</p>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            <Footer/>
        </section>
        </>
    )
}

export default SearchResult