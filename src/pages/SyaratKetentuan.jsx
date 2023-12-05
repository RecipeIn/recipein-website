import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function SyaratKetentuan() {
  return (
    <>
      <section className="body-font font-nunito w-screen h-auto">
        <Navbar />
        <div className="content">
          <p className=" text-center mb-5 mt-12 ml-2 text-[40px] h-[100px] text-font font-extrabold">Kebijakan Privasi</p>
          <p className="ml-12 mb-12 text-[28px] text-font">
            Selamat datang di RecipeIn! Harap baca dengan cermat Syarat dan Ketentuan Layanan ini sebelum menggunakan Website kami. Dengan menggunakan Website, Anda menyetujui dan tunduk pada Syarat ini.
          </p>
          <div className="flex  ">
            <div className="w-1/2 mt-7 mb-32 ml-4 p-4">
              <p className="text-[33px] text-font ml-5 mb-5 text-font font-extrabold ">Penggunaan Layanan</p>
              <p className="text-[23px] text-font ml-5 mb-5  text-[23px]">
                <span class="font-bold">Pendaftaran Akun: </span> Buat akun dengan informasi yang akurat dan jaga keamanannya.
              </p>
              <p className="text-[23px] text-font ml-5 mb-5 text-[23px]">
                <span class="font-bold">Batas Penggunaan: </span> Jangan gunakan Website untuk tujuan ilegal atau yang melanggar Syarat dan Ketentuan ini.
              </p>
              <p className="text-[33px] text-font ml-5 mb-5 text-font font-extrabold ">Hak Kekayaan Intelektual</p>
              <p className="text-[23px] text-font ml-5 mb-5  text-[23px]">
                <span class="font-bold">Hak Cipta: </span> Hak kekayaan Intelektual tetap milik RecipIn.
              </p>
              <p className="text-[23px] text-font ml-5 mb-12 text-[23px]">
                <span class="font-bold">Penggunaan Nama Dan Logo: </span> Kami dapat menggunakan nama dan logo pengguna untuk promosi.
              </p>
              <p className="text-[33px] text-font ml-5 mb-5 text-font font-extrabold ">Tanggung Jawab</p>
              <p className="text-[23px] text-font ml-5 mb-5  text-[23px]">
                <span class="font-bold">Tanggung Jawab Pengguna: </span> Pengguna bertanggung jawab atas penggunaan Website.
              </p>
              <p className="text-[23px] text-font ml-5 mb-5 text-[23px]">
                <span class="font-bold">Tanggung jawab RecipeIn: </span> RecipeIn tidak bertanggung jawab atas kerugian atau kerusakan.
              </p>
              <p className="text-[33px] text-font ml-5 mb-5 text-font font-extrabold ">Hubungi Kami</p>
              <p className="text-[23px] text-font ml-5 mb-12  text-[23px]">
                <span class="font-bold">Lebih Dekat: </span> Pertanyaan atau kekhawatiran? Kunjungi Hubungi kami.
              </p>
            </div>
            <div className="w-1/2 mt-7 p-4">
              <p className="text-[33px] text-font ml-5 mb-5 text-font font-extrabold ">Konten Pengguna</p>
              <p className="text-[23px] text-font ml-5 mb-5  text-[23px]">
                <span class="font-bold">Penunggahan Konten: </span> Pastikan anda memiliki hak atau izin untuk konten yang diunggah.
              </p>
              <p className="text-[23px] text-font ml-5 mb-5 text-[23px]">
                <span class="font-bold">Moderasi Konten: </span> Kami berhak menghapus konten yang melanggar hukum Syarat dan Ketentuan ini.
              </p>
              <p className="text-[33px] text-font ml-5 mb-5 text-font font-extrabold ">Pembatalan dan Penghentian</p>
              <p className="text-[23px] text-font ml-5 mb-5  text-[23px]">
                <span class="font-bold">Pembatalan Akun: </span> Akun dapat dibatalkan jika melanggar Syarat dan Ketentuan.
              </p>
              <p className="text-[23px] text-font ml-5 mb-12 text-[23px]">
                <span class="font-bold">Penghentian Layanan: </span> Layanan dapat dihentikan atau diubah tanpa pemberitahuan.
              </p>
              <p className="text-[33px] text-font ml-5 mb-5 text-font font-extrabold ">Perubahan Syarat dan Ketentuan</p>
              <p className="text-[23px] text-font ml-5 mb-5  text-[23px]">
                <span class="font-bold">Perubahan: </span> Perubahan Syarat dan Ketentuan efektif setelah diperbarui. Penggunaan setelah perubahan menunjukkan persetujuan.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default SyaratKetentuan;
