import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import bg9 from '../assets/img/bg9.png'
import { IoMdTime } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const favorite = [
    {
        category: "Roti",
        name: "Roti Canai",
        creatorName: "Dapur Ika",
        rating: "4.6",
        estTime: 25,
        photo: "/src/assets/img/roti-maryam.png"
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
        category: "Nasi Goreng",
        name: "Nasi Goreng Telur",
        creatorName: "Dapur Amanda",
        rating: "4.7",
        estTime: 20,
        photo: "/src/assets/img/nasi-goreng-telur.png"
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
        category: "Seblak",
        name: "Seblak Seafood",
        creatorName: "Dapur Ika",
        rating: "4.7",
        estTime: 20,
        photo: "/src/assets/img/seblak-seafood.png"
    },
    {
        category: "Ayam",
        name: "Ayam Bakar Kemangi",
        creatorName: "Dapur Amanda",
        rating: "4.3",
        estTime: 55,
        photo: "/src/assets/img/ayam-bakar.png"
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

function Favorite () {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);
    return (
        <>
        <section className='body-font font-nunito w-screen h-full'>
            <Navbar />
            <img src={bg9}className='w-screen h-[400px] mb-16'/>
            <p className='text-[52px] text-font font-extrabold text-center'>Resep Favorit</p>
            <div className='text-[22px] font-medium text-font tracking-wide text-center mt-4 mb-12'>
                <p>Tandai resep favorit, simpan ide-ide inspiratif, dan akses cepat tanpa repot. Nikmati</p>
                <p>pengalaman memasak yang lebih terorganisir dan menyenangkan.</p>
            </div>
            <div className='mb-16'>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                {favorite.map((favorite) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={favorite.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                            <div className='w-[44px] h-[44px] text-red-500 rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5'>
                                <AiFillHeart fontSize="24px"/>
                            </div>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{favorite.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{favorite.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {favorite.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{favorite.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{favorite.rating}</p>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            <div className='mb-16'>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                {variousSoup.map((variousSoup) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={variousSoup.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                            <div className='w-[44px] h-[44px] text-red-500 rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5'>
                                <AiFillHeart fontSize="24px"/>
                            </div>
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
            <div className='mb-16'>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                {weeklyDrinks.map((weeklyDrinks) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={weeklyDrinks.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                            <div className='w-[44px] h-[44px] text-red-500 rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5'>
                                <AiFillHeart fontSize="24px"/>
                            </div>
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
            <Footer/>
        </section>
        </>
    )
}

export default Favorite