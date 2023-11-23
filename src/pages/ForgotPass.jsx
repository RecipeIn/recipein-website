import { useState } from 'react'
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.png"
import logo from "../assets/img/Logo.png"

function ForgotPass() {
    
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
                    <p className='text-[32px] font-extrabold pt-24'>Ganti Kata Sandi</p>
                    <p className='text-[18px] tracking-wide w-[350px]'>Masukkan email anda untuk mengatur ulang password</p>
                    <label for="email" className="block text-lg font-bold justify-center pt-4 pb-2">Email</label>
                    <input type="email" id="email" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Masukkan email" required></input>
                    
                    <button type="submit" className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-72 px-5 py-3 text-center">Kirim</button>
                </div>


            </div>
        </section>
        </>
    )
}

export default ForgotPass