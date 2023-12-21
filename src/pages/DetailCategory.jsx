import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import bg4 from '../assets/img/bg4.png'
import { IoMdTime } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const easyMeals = [
    {
        category: "Nasi Goreng",
        name: "Nasi Goreng Telur",
        creatorName: "Dapur Amanda",
        rating: "4.7",
        estTime: 20,
        photo: "/src/assets/img/nasi-goreng-telur.png"
    },
    {
        category: "Roti",
        name: "Roti Coklat Panggang",
        creatorName: "Dapur Rere",
        rating: "4.6",
        estTime: 14,
        photo: "/src/assets/img/roti-panggang.png"
    },
    {
        category: "Telur",
        name: "Telur Ceplok Alpukat",
        creatorName: "Dapur Sasa",
        rating: "3.8",
        estTime: 10,
        photo: "/src/assets/img/telur-ceplok-alpukat.png"
    },
    {
        category: "Nasi",
        name: "Nasi Pecel",
        creatorName: "Dapur Ika",
        rating: "4.9",
        estTime: 15,
        photo: "/src/assets/img/nasi-pecel.png"
    },
    {
        category: "Mie",
        name: "Mie Goreng Telur",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 15,
        photo: "/src/assets/img/mie-goreng.png"
    },
    {
        category: "Salad",
        name: "Telur Rebus Tomat",
        creatorName: "Dapur Sasa",
        rating: "4.3",
        estTime: 8,
        photo: "/src/assets/img/telur-rebus-tomat.png"
    },
    {
        category: "Roti",
        name: "Roti Maryam",
        creatorName: "Dapur Rere",
        rating: "4.6",
        estTime: 25,
        photo: "/src/assets/img/roti-maryam.png"
    },
    {
        category: "Sup",
        name: "Sup Ayam Kampung",
        creatorName: "Dapur Ika",
        rating: "4.8",
        estTime: 30,
        photo: "/src/assets/img/sup-ayam.png"
    },
]

const simpleToast = [
    {
        category: "Roti",
        name: "Roti Bakar Coklat Keju",
        creatorName: "Dapur Amanda",
        rating: "4.8",
        estTime: 20,
        photo: "/src/assets/img/roti-bakar-coke.png"
    },
    {
        category: "Roti",
        name: "Roti Bakar Bandung",
        creatorName: "Dapur Rere",
        rating: "4.9",
        estTime: 25,
        photo: "/src/assets/img/bakso-tahu.png"
    },
    {
        category: "Roti",
        name: "Sandwich Coklat Keju",
        creatorName: "Dapur Sasa",
        rating: "4.6",
        estTime: 30,
        photo: "/src/assets/img/roti-panggang.png"
    },
    {
        category: "Roti",
        name: "Roti Canai",
        creatorName: "Dapur Ika",
        rating: "4.6",
        estTime: 25,
        photo: "/src/assets/img/roti-maryam.png"
    },
]

function DetailCategory() {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked((prevIsLiked) => !prevIsLiked);
    }
    return (
        <>
        <section className='body-font font-nunito w-screen h-full'>
            <Navbar />
            <img src={bg4}className='w-screen h-[400px] mb-16'/>
            <p className='text-[52px] text-font font-extrabold text-center'>Sarapan</p>
            <div className='text-[22px] font-medium text-font tracking-wide text-center mt-4 mb-12'>
                <p>Mulai harimu dengan energi positif bersama koleksi resep sarapan. Dari pilihan cepat</p>
                <p>untuk hari-hari sibuk hingga santapan istimewa untuk akhir pekan, temukan variasi</p>
                <p>lezat dan bernutrisi yang akan membuat setiap pagimu istimewa.</p>
            </div>
            <div className='mb-16'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-8 ml-12'>Lezat dan Cepat</p>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                {easyMeals.map((easyMeals) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={easyMeals.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                        <button className={`w-[44px] h-[44px] rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5 ${
                            isLiked ? 'text-red-500' : 'text-font'}`}
                            onClick={handleLikeClick}
                            >
                            {isLiked ? <AiFillHeart fontSize="24px"/> : <AiOutlineHeart fontSize='24px'/>}
                        </button>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{easyMeals.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{easyMeals.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {easyMeals.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{easyMeals.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{easyMeals.rating}</p>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            <div className='mb-16'>
                <p className='text-font font-extrabold text-[48px] mt-16 mb-8 ml-12'>Roti Bakar Simple</p>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                {simpleToast.map((simpleToast) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={simpleToast.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                        <button className={`w-[44px] h-[44px] rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5 ${
                            isLiked ? 'text-red-500' : 'text-font'}`}
                            onClick={handleLikeClick}
                            >
                            {isLiked ? <AiFillHeart fontSize="24px"/> : <AiOutlineHeart fontSize='24px'/>}
                        </button>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{simpleToast.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{simpleToast.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {simpleToast.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{simpleToast.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{simpleToast.rating}</p>
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

export default DetailCategory