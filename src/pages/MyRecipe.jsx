import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import bg8 from '../assets/img/bg8.png'
import { IoMdTime } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegEdit } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import FolderDialog from '../component/FolderDialog';

const myRecipe = [
    {
        category: "Kue",
        name: "Croissant Coklat",
        creatorName: "Dapur Amanda",
        rating: "4.7",
        estTime: 45,
        photo: "/src/assets/img/croissant.png"
    },
    {
        category: "Kue",
        name: "Pukis Vanilla Menul",
        creatorName: "Dapur Amanda",
        rating: "4.5",
        estTime: 25,
        photo: "/src/assets/img/pukis.png"
    },
    {
        category: "Risol",
        name: "Risol Mayo",
        creatorName: "Dapur Amanda",
        rating: "4.9",
        estTime: 35,
        photo: "/src/assets/img/risol.png"
    },
    {
        category: "Martabak",
        name: "Martabak Telur Mini",
        creatorName: "Dapur Amanda",
        rating: "4.5",
        estTime: 35,
        photo: "/src/assets/img/martabak.png"
    },
    {
        category: "Lumpia",
        name: "Lumpia Rebung",
        creatorName: "Dapur Amanda",
        rating: "4.2",
        estTime: 45,
        photo: "/src/assets/img/lumpia.png"
    },
]

const folderAyam = [
    {
        category: "Ayam",
        name: "Ayam Kecap",
        creatorName: "Dapur Amanda",
        rating: "4.7",
        estTime: 45,
        photo: "/src/assets/img/ayam-kecap.png"
    },
    {
        category: "Ayam",
        name: "Kari Ayam",
        creatorName: "Dapur Amanda",
        rating: "4.5",
        estTime: 45,
        photo: "/src/assets/img/kari-ayam.png"
    },
    {
        category: "Ayam",
        name: "Sup Ayam",
        creatorName: "Dapur Amanda",
        rating: "4.6",
        estTime: 45,
        photo: "/src/assets/img/sop-ayam.png"
    },
    {
        category: "Ayam",
        name: "Soto Ayam",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 45,
        photo: "/src/assets/img/soto.png"
    },
]

const folderKue = [
    {
        category: "Kue",
        name: "Brownis Panggang",
        creatorName: "Dapur Amanda",
        rating: "4.7",
        estTime: 55,
        photo: "/src/assets/img/brownis.png"
    },
    {
        category: "Kue",
        name: "Brownis Gulung",
        creatorName: "Dapur Amanda",
        rating: "4.8",
        estTime: 55,
        photo: "/src/assets/img/brownis2.png"
    },
    {
        category: "Kue",
        name: "Pancake Pisang",
        creatorName: "Dapur Amanda",
        rating: "4.4",
        estTime: 35,
        photo: "/src/assets/img/pancake.png"
    },
    {
        category: "Kue",
        name: "Donat Kentang",
        creatorName: "Dapur Amanda",
        rating: "4.8",
        estTime: 45,
        photo: "/src/assets/img/donat.png"
    },
]

function MyRecipe() {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);
    return (
        <>
        <section className='body-font font-nunito w-screen h-full'>
            <Navbar />
            <img src={bg8}className='w-screen h-[400px] mb-16'/>
            <p className='text-[52px] text-font font-extrabold text-center'>Resep Ku</p>
            <div className='text-[22px] font-medium text-font tracking-wide text-center mt-4 mb-12'>
                <p>Mulailah membangun kumpulan resep unik Anda sendiri, dan hadirkan sentuhan </p>
                <p>pribadi pada pengalaman kuliner Anda.</p>
            </div>

            <div className='flex justify-end mb-12'>
                <div className='flex-inline mr-20'>
                    <Link to='/addrecipe'><button className='bg-primary w-[135px] h-[40px] text-[16px] font-semibold text-font'>Tambah</button></Link>
                    <button onClick={openDialog} className='bg-primary w-[135px] h-[40px] text-[16px] font-semibold text-font ml-8'>Folder</button>
                    <FolderDialog isOpen={isDialogOpen} onClose={closeDialog} />
                </div>
            </div>

            <div className='flex justify-center mb-20'>
                <Link to='/status'>
                <div className='h-[156px] bg-primary rounded-full inline-flex'>
                    <div className='ml-20 mt-7'>
                        <div className='w-[66px] h-[66px] bg-[#E6E6E6] rounded-full'>
                            <p className='text-center pt-4 text-[22px] font-medium text-font'>4</p>
                        </div>
                        <p className='text-center text-[22px] font-semibold tracking-wider text-font mt-2'>Kirim</p>
                    </div>
                    <div className='ml-20 mt-7'>
                        <div className='w-[66px] h-[66px] bg-[#E6E6E6] rounded-full'>
                            <p className='text-center pt-4 text-[22px] font-medium text-font'>2</p>
                        </div>
                        <p className='text-center text-[22px] font-semibold tracking-wider text-font mt-2'>Tinjau</p>
                    </div>
                    <div className='ml-20 mt-7'>
                        <div className='w-[66px] h-[66px] bg-[#E6E6E6] rounded-full'>
                            <p className='text-center pt-4 text-[22px] font-medium text-font'>0</p>
                        </div>
                        <p className='text-center text-[22px] font-semibold tracking-wider text-font mt-2'>Revisi</p>
                    </div>
                    <div className='ml-20 mt-7'>
                        <div className='w-[66px] h-[66px] bg-[#E6E6E6] rounded-full'>
                            <p className='text-center pt-4 text-[22px] font-medium text-font'>20</p>
                        </div>
                        <p className='text-center text-[22px] font-semibold tracking-wider text-font mt-2'>Terbit</p>
                    </div>
                    <div className='ml-20 mr-20 mt-7'>
                        <div className='w-[66px] h-[66px] bg-[#E6E6E6] rounded-full'>
                            <p className='text-center pt-4 text-[22px] font-medium text-font'>0</p>
                        </div>
                        <p className='text-center text-[22px] font-semibold tracking-wider text-font mt-2'>Tolak</p>
                    </div>
                </div>
                </Link>
            </div>

            <div className='mb-16'>
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                {myRecipe.map((myRecipe) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={myRecipe.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                            <div className='w-[44px] h-[44px] hover:text-secondary rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5'>
                                <IoRemoveOutline fontSize="24px" color='red'/>
                            </div>
                        </div>
                        <div className='-mt-[44px] ml-[220px] relative z-20'>
                            <Link to='/editrecipe'>
                            <div className='w-[44px] h-[44px] hover:text-secondary rounded-full cursor-pointer bg-primary items-center py-2.5 px-3'>
                            <FaRegEdit fontSize="24px" color='#3F5D97'/>
                            </div>
                            </Link>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{myRecipe.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{myRecipe.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {myRecipe.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{myRecipe.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{myRecipe.rating}</p>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            <div className='mb-16'>
                
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                {folderAyam.map((folderAyam) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={folderAyam.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                            <div className='w-[44px] h-[44px] hover:text-secondary rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5'>
                                <IoRemoveOutline fontSize="24px" color='red'/>
                            </div>
                        </div>
                        <div className='-mt-[44px] ml-[220px] relative z-20'>
                            <Link to='/editrecipe'>
                            <div className='w-[44px] h-[44px] hover:text-secondary rounded-full cursor-pointer bg-primary items-center py-2.5 px-3'>
                            <FaRegEdit fontSize="24px" color='#3F5D97'/>
                            </div>
                            </Link>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{folderAyam.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{folderAyam.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {folderAyam.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{folderAyam.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{folderAyam.rating}</p>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            <div className='mb-16'>
               
                <div className='grid grid-cols-3 2xl:grid-cols-4 gap-y-8 ml-20'>
                {folderKue.map((folderKue) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={folderKue.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <div className='ml-[268px] -mt-[176px] relative z-20'>
                            <div className='w-[44px] h-[44px] hover:text-secondary rounded-full cursor-pointer bg-primary items-center py-2.5 px-2.5'>
                                <IoRemoveOutline fontSize="24px" color='red'/>
                            </div>
                        </div>
                        <div className='-mt-[44px] ml-[220px] relative z-20'>
                            <Link to='/editrecipe'>
                            <div className='w-[44px] h-[44px] hover:text-secondary rounded-full cursor-pointer bg-primary items-center py-2.5 px-3'>
                            <FaRegEdit fontSize="24px" color='#3F5D97'/>
                            </div>
                            </Link>
                        </div>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-[145px]'>{folderKue.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{folderKue.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {folderKue.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{folderKue.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{folderKue.rating}</p>
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

export default MyRecipe