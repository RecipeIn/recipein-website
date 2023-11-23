import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import profile from '../assets/img/profile.png'
import { IoMdTime } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const collectionRecipe = [
    {
        category: "Ayam",
        name: "Ayam Bakar Kemangi",
        creatorName: "Dapur Amanda",
        rating: "4.3",
        estTime: 55,
        photo: "/src/assets/img/ayam-bakar.png"
    },
    {
        category: "Salad",
        name: "Salad Buah Segar",
        creatorName: "Dapur Amanda",
        rating: "4.2",
        estTime: 20,
        photo: "/src/assets/img/salad2.png"
    },
    {
        category: "Smoothie",
        name: "Smoothie Kiwi",
        creatorName: "Dapur Amanda",
        rating: "4.6",
        estTime: 20,
        photo: "/src/assets/img/smoothie-kiwi.png"
    },
    {
        category: "Sup",
        name: "Sup Ikan Kembung",
        creatorName: "Dapur Amanda",
        rating: "4.6",
        estTime: 45,
        photo: "/src/assets/img/sup-ikan-kembung.png"
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
        category: "Seblak",
        name: "Seblak Ceker",
        creatorName: "Dapur Amanda",
        rating: "4.8",
        estTime: 20,
        photo: "/src/assets/img/seblak-ceker.png"
    },
    {
        category: "Tahu",
        name: "Pepes Tahu",
        creatorName: "Dapur Amanda",
        rating: "4.8",
        estTime: 24,
        photo: "/src/assets/img/pepes-tahu.png"
    },
    {
        category: "Sereal",
        name: "Oatmeal Susu Lowfat",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 30,
        photo: "/src/assets/img/oatmeal.png"
    },
]

function ViewProfile() {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked((prevIsLiked) => !prevIsLiked);
    }
    return (
        <>
        <section className='body-font font-nunito w-screen h-full'>
            <Navbar/>
            <div className='flex justify-center mt-12 mb-12'>
                <div className='bg-[#E6E6E6] w-[1380px] h-[336px] pt-7 inline-flex'>
                    <img src={profile} className='w-[280px] h-[280px] ml-8'/>
                    <div className='flex flex-col'>
                        <p className='text-font text-[52px] font-extrabold ml-6'>Dapur Amanda</p>
                        <p className='w-[918px] text-font text-[20px] tracking-wide ml-6 mt-4'>Salam hangat dari dapur yang penuh aroma dan kehangatan! Saya adalah Amanda, seorang pecinta masakan yang selalu mencari inspirasi baru untuk menghidangkan kreasi kuliner istimewa.</p>
                    </div>
                </div>
            </div>
            <div className='mb-16 ml-12'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-12 ml-4'>Koleksi Resep</p>
                <div className='grid grid-cols-4 gap-x-3 gap-y-8'>
                {collectionRecipe.map((collectionRecipe) => (
                    
                    <div className='rounded-[8px] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={collectionRecipe.photo} className='rounded-[8px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                        <button className={`w-[44px] h-[44px] rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5 ${
                            isLiked ? 'text-red-500' : 'text-font'}`}
                            onClick={handleLikeClick}
                            >
                            {isLiked ? <AiFillHeart fontSize="24px"/> : <AiOutlineHeart fontSize='24px'/>}
                        </button>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{collectionRecipe.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{collectionRecipe.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {collectionRecipe.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{collectionRecipe.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{collectionRecipe.rating}</p>
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

export default ViewProfile