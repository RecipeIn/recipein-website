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
          <p className=" text-center mb-8 mt-12 text-[40px] text-font font-extrabold">Kebijakan Privasi</p>
          <p className="flex justify-center items-center px-6 mb-12 text-[20px] text-font  tracking-wide text-center">
            Selamat datang di RecipeIn! Kebijakan Privasi ini menjelaskan pengumpulan, penggunaan, dan pengungkapan data pribadi Anda saat menggunakan Website RecipeIn. Dengan menggunakan Website, Anda menyetujui praktik yang dijelaskan di
            sini.
          </p>
          <div className='flex justify-between mb-12'>
            <div className='flex flex-col ml-12'>
              <div className='mb-4'>
                <p className="text-[26px] text-font mb-4 font-extrabold ">Informasi yang Kami Kumpulkan</p>
                <p className="text-[20px] w-[600px] text-font mb-4 ">
                  <span className="font-bold">Informasi Pribadi: </span> Nama, alamat email, dan informasi profil lainnya saat membuat akun.
                </p>
                <p className="text-[20px] w-[600px] text-font mb-4">
                  <span className="font-bold">Informasi Pengguna: </span> Data tentang penggunaan Website, seperti resep yang disimpan dan waktu yang dihabiskan.
                </p>
                <p className="text-[20px] w-[600px] text-font mb-4">
                  <span className="font-bold">Informasi Perangkat: </span> Jenis perangkat, sistem operasi, dan ID perangkat.
                </p>
              </div>
              <div className='mb-4'>
                <p className="text-[26px] text-font mb-4 font-extrabold ">Berbagi Informasi Anda</p>
                <p className="text-[20px] w-[600px] text-font mb-4 ">
                  <span className="font-bold">Pihak Ketiga: </span> Untuk menyediakan layanan atas nama kami.
                </p>
                <p className="text-[20px] w-[600px] text-font mb-4">
                  <span class="font-bold">Otoritas Hukum: </span> Jika diwajibkan oleh hukum.
                </p>
              </div>
              <div className='mb-4'>
                <p className="text-[26px] text-font mb-4 font-extrabold ">Perubahan Kebijakan Privasi</p>
                <p className="text-[20px] w-[600px] text-font mb-4">
                  <span class="font-bold">Pembaruan: </span> Perubahan signifikan akan diumumkan. Periksa secara berkala.
                </p>
              </div>
            </div>
            <div className='flex flex-col mr-12'>
              <div className='mb-4'>
                <p className="text-[26px] text-font mb-4 font-extrabold ">Cara Kami Menggunakan Informasi Anda</p>
                <p className="text-[20px] w-[600px] text-font mb-4 ">
                <span className="font-bold">Meningkatkan Layanan: </span> Untuk memahami penggunaan Website dan meningkatkan pengalaman pengguna.
                </p>
                <p className="text-[20px] w-[600px] text-font mb-4 ">
                  <span className="font-bold">Personalisasi: </span> Menyajikan konten yang dipersonalisasi, termasuk rekomendasi resep.
                </p>
                <p className="text-[20px] w-[600px] text-font mb-4">
                  <span class="font-bold">Komunikasi: </span> Mengirim pembaruan dan informasi terkait layanan.
                </p>
              </div>
              <div className='mb-4'>
                <br/>
                <p className="text-[26px] text-font mb-4  font-extrabold ">Keamanan</p>
                <p className="text-[20px] w-[600px] text-font mb-8">
                  <span className="font-bold">Tingkat Keamanan: </span> Kami melindungi informasi anda dengan langkah-langkah kemanan yang wajar.
                </p>
              </div>
              <div className='mb-4'>
                <p className="text-[26px] text-font mb-4 font-extrabold ">Hubungi Kami</p>
                <p className="text-[20px] w-[600px] text-font mb-4">
                  <span class="font-bold">Lebih Dekat: </span> Pertanyaan atau kekhawatiran? Kunjungi <Link to='/contact' className="text-font hover:text-primary">Kontak Kami</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </section>
    </>
  );
}

export default PP;