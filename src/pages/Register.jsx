import { useState } from 'react'
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.png"
import logo from "../assets/img/Logo.png"

function Register() {
    
    return (
        <>
        <section className="body-font font-nunito w-screen h-auto">

            <div className='content flex'>
                <img src={bg} className='w-1/2 h-screen'/>

                <div className='item-body px-[200px] pt-2  text-font'>
                    <div className='flex'>
                    <img src={logo} className='w-[75px] h-[75px]'/>
                    <p className='text-[38px] mt-2 ml-2 font-bold'>RecipeIn</p>
                    </div>
                    <p className='text-[28px]  font-bold pt-8'>Daftar</p>
                    <p className='text-lg'>Silakan masukkan data anda</p>
                    <label for="name" className="block text-base font-bold justify-center pt-2 pb-1">Nama Pengguna</label>
                    <input type="text" id="name" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Masukkan nama pengguna" required></input>
                    <label for="email" className="block text-base font-bold justify-center pt-2 pb-1">Email</label>
                    <input type="text" id="email" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Masukkan email" required></input>
                    <label for="password" className="block text-base font-bold justify-center pt-2 pb-1">Kata Sandi</label>
                    <input type="password" id="password" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Masukkan kata sandi" required></input>
                    <label for="cpassword" className="block text-base font-bold justify-center pt-2 pb-1">Konfirmasi Kata Sandi</label>
                    <input type="password" id="cpassword" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Ulangi kata sandi" required></input>
                    <input id="terms" type="checkbox" className="w-[17px] h-[17px] bg-field border border-font mt-4 " ></input>
                    <label for="terms" className="text-[16px] ml-2">Saya menerima ketentuan perjanjian</label>
                    <button type="submit" className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-2 px-5 py-3 text-center">Daftar</button>
                    <p className='text-[14px] font-medium pl-28 pt-2'>Sudah punya akun? <Link to="/login" className="text-font hover:text-font">Masuk</Link></p>

                    <div class="pl-20 justify-center pt-2 dark:bg-gray-800">
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