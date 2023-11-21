import { useState } from "react";
import { Link } from "react-router-dom";
import header from "../assets/img/header.png";
import Footer from "../component/Footer.jsx";
import Navbar from "../component/Navbar.jsx";
import card1 from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";

function AboutUs() {
  return (
    <>
      <section className="body-font font-nunito w-screen h-auto">
        <Navbar />
        <div className="content">
          <img src={header} className="w-100% h-auto object fit-cover" alt="" />
          <p className=" pl-[300px] mb-3 mt-12 ml-2 text-[30px] h-[50px] font-extrabold">Tentang Kami</p>
          <div className="flex mb-5 pr-[200px] top-[130px] left-[200px]">
            <p className="pr-[79px] pl-[142px] flex text-2xl font-medium text-black font-extrabold">Tentang Kami</p>
            <p>
              Selamat datang di RecipeIn, website kuliner yang menginspirasi dan menyatukan para pecinta masakan di seluruh dunia. Kami di RecipeIn berkomitmen untuk menciptakan pengalaman kuliner yang memuaskan, memberikan inspirasi setiap
              kali Anda memasuki dunia kami.
            </p>
          </div>
          <div className="flex pl-[5px] pr-[200px] top-[130px] left-[100px]">
            <p className="pl-[136px] pr-[87px] flex text-2xl font-medium text-black font-extrabold ">Sejarah Kami</p>
            <p>
              RecipeIn lahir dari kolaborasi 12 individu bersemangat untuk mengubah dunia kuliner melalui program MSIB mitra Infinite Learning. Kami merancang Website dengan fokus pada pengalaman pengguna yang melibatkan dan memuaskan,
              membentuk komunitas global pecinta masakan. Sejak peluncurannya, RecipeIn terus berkembang dengan menambahkan fitur baru dan menjalin kemitraan, tetapi intinya tetap: menginspirasi, menghubungkan, dan membuat setiap momen di
              dapur berarti. Sejarah RecipeIn adalah kisah sukses 12 individu yang membawa cinta mereka terhadap masakan ke dunia digital.
            </p>
          </div>
          <p className=" text-center mb-5 mt-12 ml-2 text-[30px] h-[50px] font-extrabold">Mengapa Menggunakan RecipeIn</p>

          {/* Card 01 */}
          <div className="bg-primary ml-5 mr-5 inline-block max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={card1} alt="Gambar" />

            <div className="px-6 py-4">
              <div className="font-extrabold mt-3 text-center font-bold text-xl mb-2">Koleksi Resep Beragam</div>
              <p className="font-bold text-gray-700 text-base">RecipeIn menawarkan akses ke berbagai resep kuliner, dari makanan sehari-hari hingga kreasi unik.</p>
            </div>
          </div>
          {/* End Card 01 */}

          {/* Card 02 */}
          <div class=" bg-primary ml-10 mr-10 inline-block max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={card2} alt="Gambar" />

            <div className="px-6 py-4">
              <div className="font-extrabold mt-3 text-center font-bold text-xl mb-2">Info Nutrisi Lengkap</div>
              <p className="font-bold text-gray-700 text-base">Setiap resep dilengkapi dengan informasi nutrisi dan gizi, membantu Anda membuat pilihan makanan yang lebih sehat.</p>
            </div>
          </div>
          {/* End Card 02 */}

          {/* Card 03 */}
          <div class="bg-primary ml-10 mr-10 inline-block max-w-sm rounded-xl overflow-hidden shadow-lg">
            <img className="w-full" src={card3} alt="Gambar" />

            <div className="px-6 py-4">
              <div className="font-extrabold mt-3 text-center font-bold text-xl mb-2">Tambahkan Resep Pribadi</div>
              <p className="font-bold text-gray-700 text-base">Bukan hanya tempat mencari resep, RecipeIn memungkinkan Anda berbagi kreasi kuliner pribadi dengan komunitas.</p>
            </div>
          </div>
          {/* End Card 03 */}
        </div>

        <Footer />
      </section>
    </>
  );
}

export default AboutUs;
