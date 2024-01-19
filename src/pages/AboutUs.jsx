import { useState } from "react";
import { Link } from "react-router-dom";
import header from "../assets/img/Header.png";
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
          <img src={header} className="w-screen h-auto object fit-cover" alt="" />
          <p className=" pl-[300px] mb-6 mt-12 ml-4 text-[40px] h-[50px] font-extrabold text-font">Tentang Kami</p>
          <div className="flex mb-5 pr-[200px] top-[130px] left-[200px]">
            <p className="pr-[79px] pl-[142px] flex text-[28px] text-font font-medium">Tentang Kami</p>
            <p className="text-[20px] text-font">
              Selamat datang di RecipeIn, website kuliner yang menginspirasi dan menyatukan para pecinta masakan di seluruh dunia. Kami di RecipeIn berkomitmen untuk menciptakan pengalaman kuliner yang memuaskan, memberikan inspirasi setiap
              kali Anda memasuki dunia kami.
            </p>
          </div>
          <div className="flex pl-[5px] pr-[200px] top-[130px] left-[100px]">
            <p className="pl-[136px] pr-[87px] flex text-[28px] text-font font-medium ">Sejarah Kami</p>
            <p className="text-[20px] text-font">
              RecipeIn lahir dari kolaborasi 12 individu bersemangat untuk mengubah dunia kuliner melalui program MSIB mitra Infinite Learning. Kami merancang Website dengan fokus pada pengalaman pengguna yang melibatkan dan memuaskan,
              membentuk komunitas global pecinta masakan. Sejak peluncurannya, RecipeIn terus berkembang dengan menambahkan fitur baru dan menjalin kemitraan, tetapi intinya tetap: menginspirasi, menghubungkan, dan membuat setiap momen di
              dapur berarti. Sejarah RecipeIn adalah kisah sukses 12 individu yang membawa cinta mereka terhadap masakan ke dunia digital.
            </p>
          </div>
          <p className=" text-center mb-5 mt-12 text-[32px] h-[50px] text-font font-extrabold">Mengapa Menggunakan RecipeIn</p>
          
          <div>
            
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-x-8 px-12 mb-20">
              {/* Card 01 */}
              <div className="bg-primary inline-block w-[394px] rounded-[16px] shadow-lg">
                <img className="w-full" src={card1} alt="Gambar" />

                <div className="px-6 py-4">
                  <div className="mt-3 text-center font-bold text-[24px] mb-2 text-font">Koleksi Resep Beragam</div>
                  <p className="text-[18px] tracking-wide">RecipeIn menawarkan akses ke berbagai resep kuliner, dari makanan sehari-hari hingga kreasi unik.</p>
                </div>
              </div>
              {/* End Card 01 */}

              {/* Card 02 */}
              <div class=" bg-primary inline-block w-[394px] rounded-[16px] shadow-lg">
                <img className="w-full" src={card2} alt="Gambar" />

                <div className="px-6 py-4">
                  <div className="mt-3 text-center font-bold text-[24px] mb-2 text-font">Info Nutrisi Lengkap</div>
                  <p className="text-[18px] tracking-wide ">Setiap resep dilengkapi dengan informasi nutrisi dan gizi, membantu Anda membuat pilihan makanan yang lebih sehat.</p>
                </div>
              </div>
              {/* End Card 02 */}

              {/* Card 03 */}
              <div class="bg-primary inline-block w-[394px] rounded-[16px] shadow-lg">
                <img className="w-full" src={card3} alt="Gambar" />

                <div className="px-6 py-4">
                  <div className="mt-3 text-center font-bold text-[24px] mb-2 text-font">Tambahkan Resep Pribadi</div>
                  <p className="text-[18px] tracking-wide">Bukan hanya tempat mencari resep, RecipeIn memungkinkan Anda berbagi kreasi kuliner pribadi dengan komunitas.</p>
                </div>
              </div>
              {/* End Card 03 */}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default AboutUs;
