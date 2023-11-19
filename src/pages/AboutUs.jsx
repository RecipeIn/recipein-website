import { useState } from "react";
import { Link } from "react-router-dom";
import header from "../assets/img/Header.png";
import Footer from "../component/Footer.jsx";
import Navbar from "../component/Navbar.jsx";

function AboutUs() {
  return (
    <>
      <section className="body-font font-nunito w-screen h-auto">
        <Navbar />
        <div className="content">
          ``
          <img src={header} className="w-100% h-auto object fit-cover" alt="" />
          <p className=" pl-[300px] mt-5 ml-2 text-[30px] h-[50px] font-extrabold">Tentang Kami</p>
          <div className="pl-[310px] pr-[260px] top-[130px] left-[200px]">
            <p>
              Selamat datang di RecipeIn, website kuliner yang menginspirasi dan menyatukan para pecinta masakan di seluruh dunia. Kami di RecipeIn berkomitmen untuk menciptakan pengalaman kuliner yang memuaskan, memberikan inspirasi setiap
              kali Anda memasuki dunia kami.
            </p>
          </div>
          <div className="pl-[100px] top-[130px] left-[200px] ">
            <p className="text-2xl font-medium text-black mt-1">Tentang</p>
            <p className="text-2xl font-medium text-black mt-1">Kami</p>
          </div>
          <div className="pl-[310px] pr-[260px] top-[130px] left-[200px]">
            <p>
              RecipeIn lahir dari kolaborasi 12 individu bersemangat untuk mengubah dunia kuliner melalui program MSIB mitra Infinite Learning. Kami merancang Website dengan fokus pada pengalaman pengguna yang melibatkan dan memuaskan,
              membentuk komunitas global pecinta masakan. Sejak peluncurannya, RecipeIn terus berkembang dengan menambahkan fitur baru dan menjalin kemitraan, tetapi intinya tetap: menginspirasi, menghubungkan, dan membuat setiap momen di
              dapur berarti. Sejarah RecipeIn adalah kisah sukses 12 individu yang membawa cinta mereka terhadap masakan ke dunia digital.
            </p>
          </div>
          <div className="pl-[100px] top-[130px] left-[200px] ">
            <p className="text-2xl font-medium text-black mt-1">Sejarah</p>
            <p className="text-2xl font-medium text-black mt-1">Kami</p>
          </div>
          <p className=" text-center mt-5 ml-2 text-[30px] h-[50px] font-extrabold">Mengapa Menggunakan RecipeIn</p>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default AboutUs;
