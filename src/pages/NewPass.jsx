import { useState } from 'react'
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.png"
import logo from "../assets/img/Logo.png"

function NewPass() {
    
    return (
        <>
        <section className="body-font font-nunito w-screen h-auto">

            <div className='grid grid-cols-2'>
                <div className="relative -mr-28">
                    <img src={bg}className="w-[880px] h-screen opacity-100"/>
                    <div className="absolute top-0 left-0 w-[880px] h-screen bg-black opacity-70"></div>
                    <p className='text-[42px] font-extrabold absolute top-[300px] text-[#FFFEFE] ml-16'>Temukan, Masak, Nikmati</p>
                    <div className='inline-flex ml-16 absolute top-[355px]'>
                        <p className='text-[42px] font-extrabold text-[#FFFEFE]'>dengan</p>
                        <p className='text-[42px] font-extrabold text-primary ml-4'>RecipeIn</p>
                    </div>
                    <p className='w-[497px] text-[16px] text-putih absolute top-[435px] ml-16'>Ubah dapur Anda menjadi mahakarya kuliner! RecipeIn tujuan utama bagi para penggemar makanan!</p>
                </div>
                <div className='text-font ml-60 mt-4'>
                    <p className='text-[32px] font-extrabold pt-24'>Buat Kata Sandi Baru</p>
                    <p className='text-lg tracking-wide w-[330px]'>Masukkan kode verifikasi dan buat kata sandi baru</p>
                    <label for="password" className="block text-base font-bold justify-center pt-4 pb-2">Kata Sandi Baru</label>
                    <input type="password" id="password" className="bg-field w-[400px] h-[50px] mb-4 text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan kata sandi baru" required></input>
                    <label for="kode" className="block text-base font-bold justify-center pt-4 pb-2">Konfirmasi Kata Sandi</label>
                    <input type="kode" id="text" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Ulangi kata sandi" required></input>

                    
                    <button type="submit" className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-56 px-5 py-3 text-center">Kirim</button>
                </div>


            </div>
        </section>
        </>
    )
}

export default NewPass