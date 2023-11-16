import { useState } from 'react'
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.png"
import logo from "../assets/img/Logo.png"

function Login() {
    
    return (
        <>
        <section className="body-font font-nunito w-screen h-auto">

            <div className='content flex'>
                <img src={bg} className='w-1/2 h-screen'/>

                <div className='item-body px-[200px] pt-20  text-font'>
                    <div className='flex'>
                        <img src={logo} className='w-[75px] h-[75px]'/>
                    <p className='text-[38px] mt-2 ml-2 font-extrabold'>RecipeIn</p>
                    </div>
                    <p className='text-[28px]  font-extrabold pt-8'>Masuk</p>
                    <p className='text-lg'>Masuk untuk melanjutkan</p>
                    <label for="email" className="block text-base font-bold justify-center pt-4 pb-2">Email</label>
                    <input type="email" id="email" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Masukkan email" required></input>
                    <label for="password" className="block text-base font-bold justify-center pt-4 pb-2">Kata Sandi</label>
                    <input type="password" id="password" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Masukkan kata sandi" required></input>
                    
                    <div className='inline-flex'>
                    <input id="terms" type="checkbox" className="w-[17px] h-[17px] bg-field border border-font mt-4 " ></input>
                    <label for="terms" className="text-[16px] ml-2 mt-3">Ingat saya</label>
                    <Link to="/forgotpass" className="mt-3 ml-44 text-font hover:text-font">Lupa kata sandi?</Link>
                    </div>
                    
                    <button type="submit" className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-12 px-5 py-3 text-center">Masuk</button>
                    <p className='text-[14px] font-medium pl-24 pt-2'>Belum punya akun? <Link to="/register" className="text-font hover:text-font">Gabung sekarang</Link></p>

                    <div class="pl-20 justify-center pt-2 dark:bg-gray-800">
                        <button class="text-[14px] font-medium px-4 py-2 border flex gap-2 border-slate-300 shadow-xl dark:border-slate-700 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                        <span>Masuk menggunakan Google</span>
                        </button>
                    </div>
                </div>


            </div>
        </section>
        </>
    )
}

export default Login