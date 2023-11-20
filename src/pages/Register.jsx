import { useState } from 'react'
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.png"
import logo from "../assets/img/Logo.png"

function Register() {
    
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
                    <p className='text-[32px] font-extrabold pt-8'>Daftar</p>
                    <p className='text-lg tracking-wide'>Silakan masukkan data anda</p>
                    <label for="name" className="block text-lg font-bold justify-center pt-2 pb-1">Nama Pengguna</label>
                    <input type="text" id="name" className="bg-field w-[400px] h-[50px]  text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Masukkan nama pengguna" required></input>
                    <label for="email" className="block text-lg font-bold justify-center pt-2 pb-1">Email</label>
                    <input type="email" id="email" className="bg-field w-[400px] h-[50px]  text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Masukkan email" required></input>
                    <label for="password" className="block text-lg font-bold justify-center pt-2 pb-1">Kata Sandi</label>
                    <input type="password" id="password" className="bg-field w-[400px] h-[50px]  text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Masukkan kata sandi" required></input>
                    <label for="cpassword" className="block text-lg font-bold justify-center pt-2 pb-1">Konfirmasi Kata Sandi</label>
                    <input type="password" id="cpassword" className="bg-field w-[400px] h-[50px]  text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Ulangi kata sandi" required></input>
                    <input id="terms" type="checkbox" className="w-[17px] h-[17px] bg-field border border-font mt-4 " ></input>
                    <label for="terms" className="text-[16px] ml-2">Saya menerima ketentuan perjanjian</label>
                    <button type="submit" className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-12 px-5 py-3 text-center">Daftar</button>
                    <p className='text-[14px] font-medium pl-32 pt-2'>Sudah punya akun? <Link to="/login" className="text-font hover:text-font">Masuk</Link></p>

                    <div className='inline-flex'>
                        <hr className="border-[1px] border-[#808080] mt-6 w-[148px] ml-7" />
                        <p className='text-[14px] tracking-wider text-[#808080] mt-3 ml-4'>atau</p>
                        <hr className="border-[1px] border-[#808080] mt-6 w-[148px] ml-4" />
                    </div>

                    <div class="pl-[85px] justify-center pt-2 dark:bg-gray-800">
                        <button class="text-[14px] font-medium px-4 py-2 border flex gap-2 border-slate-300 shadow-xl dark:border-slate-700 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                        <span>Daftar menggunakan Google</span>
                        </button>
                    </div>
                </div>


            </div>
        </section>
        </>
    )
}

export default Register