import { useState } from 'react'
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.png"
import logo from "../assets/img/Logo.png"

function NewPass() {
    
    return (
        <>
        <section className="body-font font-nunito w-screen h-auto">

            <div className='content flex'>
                <img src={bg} className='w-1/2 h-screen'/>

                <div className='item-body px-[200px] pt-24  text-font'>
                    <div className='flex'>
                        <img src={logo} className='w-[75px] h-[75px]'/>
                    <p className='text-[38px] mt-2 ml-2 font-extrabold'>RecipeIn</p>
                    </div>
                    <p className='text-[28px]  font-extrabold pt-8'>Buat Kata Sandi Baru</p>
                    <p className='text-lg pt-1'>Masukkan kode verifikasi dan buat kata sandi baru</p>
                    <label for="password" className="block text-base font-bold justify-center pt-4 pb-2">Kata Sandi Baru</label>
                    <input type="password" id="password" className="bg-field w-[400px] h-[50px] mb-4 text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Masukkan kata sandi baru" required></input>
                    <label for="kode" className="block text-base font-bold justify-center pt-4 pb-2">Konfirmasi Kata Sandi</label>
                    <input type="kode" id="text" className="bg-field w-[400px] h-[50px]  text-base rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-black" placeholder="Ulangi kata sandi" required></input>

                    
                    <button type="submit" className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-20 px-5 py-3 text-center">Kirim</button>
                </div>


            </div>
        </section>
        </>
    )
}

export default NewPass