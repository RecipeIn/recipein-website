import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function TNC() {
  return (
    <>
      <section className="body-font font-nunito w-screen h-auto">
        <Navbar />
        <div className="content">
          <p className=" text-center mb-5 mt-12 ml-2 text-[40px] text-font font-extrabold">Syarat dan Ketentuan</p>
          <p className="flex justify-center items-center px-10 mb-12 text-[20px] text-font  tracking-wide text-center">
          Selamat datang di RecipeIn! Harap baca dengan cermat Syarat dan Ketentuan Layanan ini sebelum menggunakan Website kami. Dengan menggunakan Website, Anda menyetujui dan tunduk pada Syarat ini.
          </p>
          <div className='flex justify-between mb-12'>
            <div className='flex flex-col ml-12'>
              <div className='mb-4'>
                <p className="text-[26px] text-font mb-5 font-extrabold ">Penggunaan Layanan</p>
                <p className="text-[20px] w-[600px] text-font mb-5 ">
                  <span className="font-bold">Pendaftaran Akun: </span> Buat akun dengan informasi yang akurat dan jaga keamanannya.
                </p>
                <p className="text-[20px] w-[600px] text-font mb-5">
                  <span className="font-bold">Batas Penggunaan: </span> Jangan gunakan Website untuk tujuan ilegal atau yang melanggar Syarat dan Ketentuan ini.
                </p>
              </div>
              <div className='mb-4'>
                <p className="text-[26px] text-font mb-5 font-extrabold ">Hak Kekayaan Intelektual</p>
                <p className="text-[20px] w-[600px] text-font mb-5 ">
                  <span className="font-bold">Hak Cipta: </span> Hak kekayaan Intelektual tetap milik RecipIn.
                </p>
                <p className="text-[20px] w-[600px] text-font mb-5">
                  <span className="font-bold">Penggunaan Nama Dan Logo: </span> Kami dapat menggunakan nama dan logo pengguna untuk promosi.
                </p>
              </div>
              <div className='mb-4'>
                <p className="text-[26px] text-font mb-5 font-extrabold ">Tanggung Jawab</p>
                <p className="text-[20px] w-[600px] text-font mb-5 ">
                  <span className="font-bold">Tanggung Jawab Pengguna: </span> Pengguna bertanggung jawab atas penggunaan Website.
                </p>
                <p className="text-[20px] w-[600px] text-font mb-5">
                  <span className="font-bold">Tanggung jawab RecipeIn: </span> RecipeIn tidak bertanggung jawab atas kerugian atau kerusakan.
                </p>
              </div>
              <div className='mb-4'>
                <p className="text-[26px] text-font mb-4 font-extrabold ">Hubungi Kami</p>
                <p className="text-[20px] w-[600px] text-font mb-4">
                  <span class="font-bold">Lebih Dekat: </span> Pertanyaan atau kekhawatiran? Kunjungi <Link to='/contact' className="text-font hover:text-primary">Kontak Kami</Link>
                </p>
              </div>
            </div>
            <div className='flex flex-col mr-12'>
              <div className='mb-4'>
                <p className="text-[26px] text-font mb-5 font-extrabold ">Konten Pengguna</p>
                <p className="text-[20px] w-[600px] text-font mb-5 ">
                  <span className="font-bold">Penunggahan Konten: </span> Pastikan anda memiliki hak atau izin untuk konten yang diunggah.
                </p>
                <p className="text-[20px] w-[600px] text-font mb-5">
                  <span className="font-bold">Moderasi Konten: </span> Kami berhak menghapus konten yang melanggar hukum Syarat dan Ketentuan ini.
                </p>
              </div>
              <div className='mb-4'>
                <p className="text-[26px] text-font mb-5 font-extrabold ">Pembatalan dan Penghentian</p>
                <p className="text-[20px] w-[600px] text-font mb-5 ">
                  <span className="font-bold">Pembatalan Akun: </span> Akun dapat dibatalkan jika melanggar Syarat dan Ketentuan.
                </p>
                <p className="text-[20px] w-[600px] text-font mb-5">
                  <span className="font-bold">Penghentian Layanan: </span> Layanan dapat dihentikan atau diubah tanpa pemberitahuan.
                </p>
              </div>
              <div className='mb-4'>
                <p className="text-[26px] text-font mb-5 font-extrabold ">Perubahan Syarat dan Ketentuan</p>
                <p className="text-[20px] w-[600px] text-font mb-5 ">
                  <span className="font-bold">Perubahan: </span> Perubahan Syarat dan Ketentuan efektif setelah diperbarui. Penggunaan setelah perubahan menunjukkan persetujuan.
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

export default TNC;