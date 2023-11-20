import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import profile from "../assets/img/profile.jpg"
import { MdNavigateNext } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";


function DailyNutrition() {
    return (
        <>
        <section className='body-font font-nunito w-screen h-[1358px]'>
            <Navbar />
            
            <div className='flex justify-between mt-8 mb-[150px]'>
                <div className='w-[383px] h-[600px] bg-[#EDEDED] rounded-[8px] ml-12'>
                    <div className='inline-flex mb-8'>
                        <img className=" w-[90px] h-[90px] rounded-full ml-8 mt-8" src={profile} alt=""/>
                        <p className='text-font font-extrabold text-[24px] mt-14 ml-8'>Hallo, Sabilla</p>
                    </div>
                    <hr class="border-[1px] border-[#979797]" />
                    <div className='flex justify-center text-font text-[16px]'>
                        <ul className="ml-10">
                            <li className='bg-[#DBE2F0] mt-4 rounded-[8px] w-[300px] h-[40px] inline-flex justify-between border-none'>
                                <a href="/resepku" className="ml-4 mt-2 w-[300px] h-[40px] text-font text-[18px] font-bold hover:text-font">Resep Ku</a>
                                <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                            </li>
                            <li className='bg-[#DBE2F0] mt-4 rounded-[8px] w-[300px] h-[40px] inline-flex justify-between border-none'>
                                <a href="/favorit" className="ml-4 mt-2 w-[300px] h-[40px] text-font text-[18px] font-bold hover:text-font">Favorite</a>
                                <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                            </li>
                            <li className='bg-[#DBE2F0] mt-4 rounded-[8px] w-[300px] h-[40px] inline-flex justify-between border-none'>
                                <a href="/nutrisi" className="ml-4 mt-2 w-[300px] h-[40px] text-font text-[18px] font-bold hover:text-font">Nutrisi Harian</a>
                                <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                            </li>
                            <li className='bg-[#DBE2F0] mt-4 rounded-[8px] w-[300px] h-[40px] inline-flex justify-between border-none'>
                                <a href="/edit" className="ml-4 mt-2 w-[300px] h-[40px] text-font text-[18px] font-bold hover:text-font">Sunting Profile</a>
                                <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                            </li>
                            <li className='bg-[#DBE2F0] mt-4 rounded-[8px] w-[300px] h-[40px] inline-flex justify-between border-none'>
                                <a href="/newpass" className="ml-4 mt-2 w-[300px] h-[40px] text-font text-[18px] font-bold hover:text-font">Ubah Kata Sandi</a>
                                <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                            </li>
                            <li className='bg-[#DBE2F0] mt-4 rounded-[8px] w-[300px] h-[40px] inline-flex justify-between border-none'>
                                <a href="/logout" className="ml-4 mt-2 w-[300px] h-[40px] text-font text-[18px] font-bold hover:text-font">Keluar</a>
                                <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                            </li>
                        </ul>
                    </div>
                    <button type="submit" className="w-[156px] text-black bg-secondary font-bold rounded-[4px] text-[16px] mt-8 px-1 py-2 text-center ml-28">Simpan Perubahan</button>
                </div>

                <div className='w-[908px] h-[711px] bg-[#EDEDED] mr-12 rounded-[8px]'>
                    <p className='text-font font-extrabold text-[24px] mt-4 ml-12 mb-4'>Nutrisi Harian</p>
                    <hr class="border-[1px] border-[#979797]" />
                    <div className='ml-12 mt-8 inline-flex'>
                        <div className='flex flex-col'>
                            <label for="cal" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Kalori</label>
                            <input type="text" disabled id="cal" className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black placeholder-black" placeholder="0" required></input>
                        </div>
                        <div className='flex flex-col ml-12'>
                            <label for="carb" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Karbo</label>
                            <input type="text" disabled id="carb" className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black placeholder-black" placeholder="0" required></input>
                        </div>
                        <div className='flex flex-col ml-12'>
                            <label for="fiber" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Serat</label>
                            <input type="text" disabled id="fiber" className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black placeholder-black" placeholder="0" required></input>
                        </div>
                    </div>
                    <div className='ml-12 mt-12 inline-flex'>
                        <div className='flex flex-col'>
                            <label for="protein" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Protein</label>
                            <input type="text" disabled id="protein" className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black placeholder-black" placeholder="0" required></input>
                        </div>
                        <div className='flex flex-col ml-12'>
                            <label for="vitamin" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Vitamin</label>
                            <input type="text" disabled id="vitamin" className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black placeholder-black" placeholder="0" required></input>
                        </div>
                        <div className='flex flex-col ml-12'>
                            <label for="fat" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Lemak</label>
                            <input type="text" disabled id="fat" className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black placeholder-black" placeholder="0" required></input>
                        </div>
                    </div>
                    <p className='text-font font-extrabold text-[24px] mt-16 ml-12 mb-4'>Isi Data Anda</p>
                    <hr class="border-[1px] border-[#979797]" />
                    <div className='ml-12 mt-8 inline-flex'>
                        <div className='flex flex-col'>
                            <label for="age" className="block text-[18px] font-bold justify-center pb-2 tracking-wider ">Umur</label>
                            <input type="text" id="age" className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Tahun" required></input>
                        </div>
                        <div className='flex flex-col ml-12'>
                            <label for="height" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Tinggi Badan</label>
                            <input type="text" id="height" className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Cm" required></input>
                        </div>
                        <div className='flex flex-col ml-12'>
                            <label for="weight" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Berat Badan</label>
                            <input type="text" id="weight" className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Kg" required></input>
                        </div>
                    </div>
                    <div className='ml-12 mt-8 inline-flex'>
                        <div className='flex flex-col'>
                            <label for="gender" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Jenis Kelamin</label>
                            <select type="text" id="gender" className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-4 py-3 text-font" required>
                                <option selected>Pilih Jenis Kelamin</option>
                                <option value="m">Laki-laki</option>
                                <option value="f">Perempuan</option>
                            </select>
                        </div>
                        <div className='flex flex-col ml-20'>
                            <label for="activity" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Aktivitas</label>
                            <select type="text" id="activity" className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-4 py-3 text-font" required>
                                <option selected>Pilih Aktivitas</option>
                                <option value="AR">Aktivitas Ringan</option>
                                <option value="AS">Aktivitas Sedang</option>
                                <option value="AB">Aktivitas Berat</option>
                                <option value="ASB">Aktivitas Sangat Berat</option>
                            </select>
                        </div>
                        <div className='mt-11 ml-4'>
                            <IoInformationCircle fontSize="25px"/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
        </>
    )
}

export default DailyNutrition