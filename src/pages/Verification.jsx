import { useState } from 'react'
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.png"
import logo from "../assets/img/Logo.png"

function Verification() {
    
    return (
        <>
        <section className="body-font font-nunito w-screen h-auto">

              <div className='grid grid-cols-2'>
                <div className="relative -mr-28">
                    <img src={bg}className="w-[880px] h-screen"/>
                    <p className='text-[42px] font-extrabold absolute top-[300px] text-[#FFFEFE] ml-16'>Temukan, Masak, Nikmati</p>
                    <div className='inline-flex ml-16 absolute top-[355px]'>
                        <p className='text-[42px] font-extrabold text-[#FFFEFE]'>dengan</p>
                        <p className='text-[42px] font-extrabold text-primary ml-4'>RecipeIn</p>
                    </div>
                    <p className='w-[497px] text-[16px] text-putih absolute top-[435px] ml-16'>Ubah dapur Anda menjadi mahakarya kuliner! RecipeIn tujuan utama bagi para penggemar makanan!</p>
                </div>
                <div className='text-font ml-48'>
                    <p className='text-[32px] font-extrabold pt-20'>Verifikasi</p>
                    <p className='text-[18px] tracking-wide w-[350px]'>Silahkan masukkan kode verifikasi yang telah dikirimkan ke email anda.</p>
                    <label for="kode" className="block text-lg font-bold justify-center pt-4 pb-2">Kode Verifikasi</label>
                    <input type="text" id="kode" className="bg-field w-[400px] h-[50px]  text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan kode verifikasi" required></input>
                    
                    <Link to='/newpass'><button type="submit" className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-64 px-5 py-3 text-center text-font">Kirim</button></Link>
                </div>


            </div>
        </section>
        </>
    )
}

export default Verification