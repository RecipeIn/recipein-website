import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import bg10 from '../assets/img/bg10.png'
import { FaLessThan } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";

const menu = [
    {
        category: "Lumpia",
        name: "Lumpia Rebung",
        creatorName: "Dapur Amanda",
        rating: "4.2",
        estTime: 45,
        photo: "/src/assets/img/lumpia.png"
    },
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
        name: "Pukis Vanilla Menul",
        creatorName: "Dapur Amanda",
        rating: "4.5",
        estTime: 25,
        photo: "/src/assets/img/pukis.png"
    },
    {
        category: "Dessert",
        name: "Dessert Alpukat",
        creatorName: "Dapur Amanda",
        rating: "4.5",
        estTime: 25,
        photo: "/src/assets/img/dessert.png"
    },
]

function Status () {
    return (
        <>
        <section className='body-font font-nunito w-screen h-full'>
            <Navbar />
            <img src={bg10}className='w-screen h-[400px] mb-16'/>
            <p className='text-[52px] text-font font-extrabold text-center'>Status Resep Ku</p>
            <div className='text-[22px] font-medium text-font tracking-wide text-center mt-4 mb-12'>
                <p>Jelajahi perkembangan menarik dari setiap langkah perjalanan resep yang telah</p>
                <p>Anda tambahkan dengan mudah.</p>
            </div>
            <Link to='/myrecipe'>
            <div className='flex mt-20 ml-28'>
                <FaLessThan size='32px' color='#1E2C48' className='mt-1.5'/>
                <p className='ml-4 text-[28px] text-secondary font-medium'>Kembali</p>
            </div>
            </Link>
            <div className='flex justify-center mt-4 mb-20'>
                <Link to='/status'>
                <div className='w-[1380px] h-[156px] bg-primary rounded-full inline-flex'>
                    <div className='ml-48 mt-7'>
                        <div className='w-[66px] h-[66px] bg-[#E6E6E6] rounded-full'>
                            <p className='text-center pt-4 text-[22px] font-medium text-font'>4</p>
                        </div>
                        <p className='text-center text-[22px] font-semibold tracking-wider text-font mt-2 underline'>Kirim</p>
                    </div>
                    <div className='ml-40 mt-7'>
                        <div className='w-[66px] h-[66px] bg-[#E6E6E6] rounded-full'>
                            <p className='text-center pt-4 text-[22px] font-medium text-font'>2</p>
                        </div>
                        <p className='text-center text-[22px] font-semibold tracking-wider text-font mt-2'>Tinjau</p>
                    </div>
                    <div className='ml-40 mt-7'>
                        <div className='w-[66px] h-[66px] bg-[#E6E6E6] rounded-full'>
                            <p className='text-center pt-4 text-[22px] font-medium text-font'>0</p>
                        </div>
                        <p className='text-center text-[22px] font-semibold tracking-wider text-font mt-2'>Revisi</p>
                    </div>
                    <div className='ml-40 mt-7'>
                        <div className='w-[66px] h-[66px] bg-[#E6E6E6] rounded-full'>
                            <p className='text-center pt-4 text-[22px] font-medium text-font'>20</p>
                        </div>
                        <p className='text-center text-[22px] font-semibold tracking-wider text-font mt-2'>Terbit</p>
                    </div>
                    <div className='ml-40 mt-7'>
                        <div className='w-[66px] h-[66px] bg-[#E6E6E6] rounded-full'>
                            <p className='text-center pt-4 text-[22px] font-medium text-font'>0</p>
                        </div>
                        <p className='text-center text-[22px] font-semibold tracking-wider text-font mt-2'>Tolak</p>
                    </div>
                </div>
                </Link>
            </div>
            <div className='mb-16 ml-12'>
                <div className='grid grid-cols-4 gap-x-3 gap-y-8'>
                {menu.map((menu) => (
                    
                    <div className='rounded-[8px] border-2 border-[#B3B3B3] bg-white w-[323px] h-[400px] shadow-xl '>
                        <Link to="/detail"><img src={menu.photo} className='rounded-[8px] w-[323px] h-[180px]'/></Link>
                        <Link to="/detail">
                        <p className='text-secondary text-[16px] font-bold ml-5 mt-4'>{menu.category}</p>
                        <p className='text-font text-[26px] font-bold ml-5'>{menu.name}</p>
                        <Link to="/viewprofile"><p className='text-[#4D4D4D] text-[18px] font-light ml-5'>Oleh {menu.creatorName}</p></Link>
                        <div className='inline-flex mt-[74px] ml-4'>
                            <IoMdTime color='#AAAAAA' fontSize="24px" />
                            <p className='text-[18px] font-light text-[#4D4D4D]'>{menu.estTime} mnt</p>
                            <TbStarFilled color='gold' fontSize="24px" className='ml-4'/>
                            <p className='text-[18px] font-light text-[#4D4D4D] ml-1'>{menu.rating}</p>
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

export default Status