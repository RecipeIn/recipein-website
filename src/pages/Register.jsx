import { useState } from 'react'
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.png"

function Login() {
    return (
        <>
        <section className="body-font font-nunito w-screen h-auto">

            <div className='content flex'>
                <img src={bg} className='w-1/2 h-screen'/>

                <div className='item-body px-[200px] pt-2  text-font'>
                    <p className='text-[42px]  font-bold'>RecipeIn</p>
                    <p className='text-[28px]  font-bold pt-1'>Pendaftaran</p>
                    <p className='text-lg'>Silakan masukkan kredensial Anda</p>
                    <label for="name" className="block text-base font-bold justify-center pt-4 pb-2">Nama Pengguna</label>
                    <input type="text" id="name" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Nama Kamu" required></input>
                    <label for="email" className="block text-base font-bold justify-center pt-4 pb-2">Email</label>
                    <input type="text" id="email" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Email Kamu" required></input>
                    <label for="password" className="block text-base font-bold justify-center pt-4 pb-2">Kata Sandi</label>
                    <input type="password" id="password" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Kata Sandi Kamu" required></input>
                    <label for="cpassword" className="block text-base font-bold justify-center pt-4 pb-2">Konfrimasi Kata Sandi</label>
                    <input type="password" id="cpassword" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Konfrimasi Kata Sandi" required></input>
                    <input id="terms" type="checkbox" className="w-[17px] h-[17px] bg-field border border-font mt-4 " ></input>
                    <label for="terms" className="text-[16px] ml-2">Saya menerima persyaratan perjanjian</label>
                    <button type="submit" className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-2 px-5 py-3 text-center">Daftar</button>
                    <p className='text-[14px] font-medium pl-24 pt-2'>Sudah mempunyai akun? <Link to="/login" className="text-font hover:text-font">Masuk</Link></p>

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

export default Login