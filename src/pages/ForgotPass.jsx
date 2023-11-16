import { useState } from 'react'
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.png"
import logo from "../assets/img/Logo.png"

function ForgotPass() {
    
    return (
        <>
        <section className="body-font font-nunito w-screen h-auto">

            <div className='content flex'>
                <img src={bg} className='w-1/2 h-screen'/>

                <div className='item-body px-[200px] pt-28  text-font'>
                    <div className='flex'>
                        <img src={logo} className='w-[75px] h-[75px]'/>
                    <p className='text-[38px] mt-2 ml-2 font-extrabold'>RecipeIn</p>
                    </div>
                    <p className='text-[28px]  font-extrabold pt-8'>Ganti Kata Sandi</p>
                    <p className='text-lg pt-1'>Masukkan email anda untuk mengatur ulang password</p>
                    <label for="email" className="block text-base font-bold justify-center pt-4 pb-2">Email</label>
                    <input type="email" id="email" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Masukkan email" required></input>
                    
                    <button type="submit" className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-28 px-5 py-3 text-center">Kirim</button>
                </div>


            </div>
        </section>
        </>
    )
}

export default ForgotPass