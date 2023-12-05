import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function PP() {
  return (
    <>
      <section className="body-font font-nunito w-screen h-auto">
        <Navbar />
        <div className="content">
          <p className=" text-center mb-5 mt-12 ml-2 text-[40px] h-[100px] text-font font-extrabold">Kebijakan Privasi</p>
          <p className="ml-12 mb-12 text-[28px] text-font w-[1480px] tracking-wide text-center">
            Selamat datang di RecipeIn! Kebijakan Privasi ini menjelaskan pengumpulan, penggunaan, dan pengungkapan data pribadi Anda saat menggunakan Website RecipeIn. Dengan menggunakan Website, Anda menyetujui praktik yang dijelaskan di
            sini.
          </p>
          <div className="flex  ">
            <div className="w-1/2 mt-7 mb-32 ml-4 p-4">
              <p className="text-[33px] text-font ml-5 mb-5 font-extrabold ">Informasi yang Kami Kumpulkan</p>
              <p className="text-[23px] text-font ml-5 mb-5 ">
                <span className="font-bold">Informasi Pribadi: </span> Nama, alamat email, dan informasi profil lainnya saat membuat akun.
              </p>
              <p className="text-[23px] text-font ml-5 mb-5">
                <span className="font-bold">Informasi Pengguna: </span> Data tentang penggunaan Website, seperti resep yang disimpan dan waktu yang dihabiskan.
              </p>
              <p className="text-[23px] text-font ml-5 mb-5">
                <span className="font-bold">Informasi Perangkat: </span> Jenis perangkat, sistem operasi, dan ID perangkat.
              </p>
              <p className="text-[33px] text-font ml-5 mb-5 font-extrabold ">Berbagi Informasi Anda</p>
              <p className="text-[23px] text-font ml-5 mb-5 ">
                <span className="font-bold">Pihak Ketiga: </span> Untuk menyediakan layanan atas nama kami.
              </p>
              <p className="text-[23px] text-font ml-5 mb-12">
                <span class="font-bold">Otoritas Hukum: </span> Jika diwajibkan oleh hukum.
              </p>
              <p className="text-[33px] text-font ml-5 mb-5 font-extrabold ">Perubahan Kebijakan Privasi</p>
              <p className="text-[23px] text-font ml-5 mb-5">
                <span class="font-bold">Pembaruan: </span> Perubahan signifikan akan diumumkan. Periksa secara berkala.
              </p>
            </div>
            <div className="w-1/2 mt-7 p-4">
              <p className="text-[33px] text-font ml-5 mb-5 font-extrabold ">Cara Kami Menggunakan Informasi Anda</p>
              <p className="text-[23px] text-font ml-5 mb-5 ">
                <span className="font-bold">Meningkatkan Layanan: </span> Untuk memahami penggunaan Website dan meningkatkan pengalaman pengguna.
              </p>
              <p className="text-[23px] text-font ml-5 mb-5 ">
                <span className="font-bold">Personalisasi: </span> Menyajikan konten yang dipersonalisasi, termasuk rekomendasi resep.
              </p>
              <p className="text-[23px] text-font ml-5 mb-5">
                <span class="font-bold">Komunikasi: </span> Mengirim pembaruan dan informasi terkait layanan.
              </p>
              <p className="text-[33px] text-font ml-5 mb-5  font-extrabold ">Keamanan</p>
              <p className="text-[23px] text-font ml-5 mb-16">
                <span className="font-bold">Tingkat Keamanan: </span> Kami melindungi informasi anda dengan langkah-langkah kemanan yang wajar.
              </p>
              <p className="text-[33px] text-font ml-5 mb-font-extrabold ">Hubungi Kami</p>
              <p className="text-[23px] text-font ml-5 mb-12 ">
                <span className="font-bold">Lebih Dekat: </span> Pertanyaan atau kekhawatiran? Kunjungi Hubungi kami.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default PP;