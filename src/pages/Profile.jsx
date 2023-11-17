import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import profile from "../assets/img/profile.jpg"
import { MdNavigateNext } from "react-icons/md";

function EditProfile() {
    return (
        <>
        <section className='body-font font-nunito w-screen h-[1358px]'>
            <Navbar />
            
            <div className='flex justify-between mt-8 mb-[150px]'>
                <div className='w-[383px] h-[520px] bg-[#EDEDED] rounded-[8px] ml-12'>
                    <div className='inline-flex mb-8'>
                        <img className=" w-[90px] h-[90px] rounded-full ml-8 mt-8" src={profile} alt=""/>
                        <p className='text-font font-extrabold text-[24px] mt-14 ml-8'>Hallo, Sabilla</p>
                    </div>
                    <hr class="border-[1px] border-[#979797]" />
                    <div className='flex justify-center text-font text-[16px]'>
                        <ul className="ml-10">
                            <li className='bg-[#DBE2F0] mt-4 rounded-[8px] w-[300px] h-[40px] inline-flex justify-between border-none'>
                                <a href="/resepku" className="ml-4 mt-2 w-[300px] h-[40px] text-font text-[18px] font-bold hover:text-font">Resep Ku</a>
                                <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#4D4D4D'/>
                            </li>
                            <li className='bg-[#DBE2F0] mt-4 rounded-[8px] w-[300px] h-[40px] inline-flex justify-between border-none'>
                                <a href="/favorit" className="ml-4 mt-2 w-[300px] h-[40px] text-font text-[18px] font-bold hover:text-font">Favorite</a>
                                <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#4D4D4D'/>
                            </li>
                            <li className='bg-[#DBE2F0] mt-4 rounded-[8px] w-[300px] h-[40px] inline-flex justify-between border-none'>
                                <a href="/nutrisi" className="ml-4 mt-2 w-[300px] h-[40px] text-font text-[18px] font-bold hover:text-font">Nutrisi Harian</a>
                                <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#4D4D4D'/>
                            </li>
                            <li className='bg-[#DBE2F0] mt-4 rounded-[8px] w-[300px] h-[40px] inline-flex justify-between border-none'>
                                <a href="/edit" className="ml-4 mt-2 w-[300px] h-[40px] text-font text-[18px] font-bold hover:text-font">Sunting Profile</a>
                                <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#4D4D4D'/>
                            </li>
                            <li className='bg-[#DBE2F0] mt-4 rounded-[8px] w-[300px] h-[40px] inline-flex justify-between border-none'>
                                <a href="/newpass" className="ml-4 mt-2 w-[300px] h-[40px] text-font text-[18px] font-bold hover:text-font">Ubah Kata Sandi</a>
                                <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#4D4D4D'/>
                            </li>
                            <li className='bg-[#DBE2F0] mt-4 rounded-[8px] w-[300px] h-[40px] inline-flex justify-between border-none'>
                                <a href="/logout" className="ml-4 mt-2 w-[300px] h-[40px] text-font text-[18px] font-bold hover:text-font">Keluar</a>
                                <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#4D4D4D'/>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-[908px] h-[711px] bg-[#EDEDED] mr-12 rounded-[8px]'>
                    <p className='text-font font-extrabold text-[24px] mt-4 ml-12 mb-4'>Informasi Pribadi</p>
                    <hr class="border-[1px] border-[#979797]" />

                    <div className='ml-8 mt-8 inline-flex'>
                        <div className='flex flex-col'>
                            <label for="fname" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Nama Depan</label>
                            <input type="text" disabled id="fname" className="bg-white w-[400px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black placeholder-black" placeholder="Sabilla" required></input>
                        </div>
                        <div className='flex flex-col ml-8'>
                            <label for="bname" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Nama Belakang</label>
                            <input type="text" disabled id="bname" className="bg-white w-[400px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black placeholder-black" placeholder="Salsabila" required></input>
                        </div>
                    </div>
                    <div className='ml-8 mt-8 inline-flex'>
                        <div className='flex flex-col'>
                            <label for="uname" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Username</label>
                            <input type="text" disabled id="uname" className="bg-white w-[400px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black placeholder-black" placeholder="Sasa" required></input>
                        </div>
                        <div className='flex flex-col-reverse -ml-96 mb-32'>
                            <label for="tgl" className="block text-[18px] font-bold justify-center -ml-4 pb-2 tracking-wider">Tanggal Lahir</label>
                        </div>
                        <div className='flex flex-col ml-[324px]'>
                            <img className=" w-[250px] h-[250px] rounded-none mt-8" src={profile} alt=""/>
                        </div>
                    </div>
                    <div className='ml-8 -mt-32 flex'>
                        <input type="text" disabled min="1" max="31" id="tgl" className="bg-white w-[47px] h-[47px] text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-2.5 text-black placeholder-black" placeholder="16" required></input>
                        <p className='text-[32px] ml-4 mr-4'>/</p>
                        <input type="tex" disabled min="1" max="12" id="tgl" className="bg-white w-[47px] h-[47px] text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-2.5 text-black placeholder-black" placeholder="05" required></input>
                        <p className='text-[32px] ml-4 mr-4'>/</p>
                        <input type="text" disabled min="1975" max="2050" id="tgl" className="bg-white w-[76px] h-[47px] text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-4 text-black placeholder-black" placeholder="1996" required></input>
                    </div>
                    <div className='ml-8 mt-8'>
                        <label for="desc" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Deskripsi</label>
                        <textarea type="text" disabled id="desc" className="bg-white w-[388px] h-[150px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black placeholder-black" placeholder="Salam hangat dari dapur yang penuh aroma dan kehangatan! Saya adalah Amanda, seorang pecinta masakan yang selalu mencari inspirasi baru untuk menghidangkan kreasi kuliner istimewa." required></textarea>
                    </div>

                </div>
            </div>

            <Footer />
        </section>
        </>
    )
}

export default EditProfile