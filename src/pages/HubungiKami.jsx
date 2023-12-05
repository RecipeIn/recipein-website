import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import map from "../assets/img/map.png";

function HubungiKami() {
  return (
    <>
      <section className="body-font font-nunito w-screen h-auto">
        <Navbar />
        <div className="content">
          <p className="text-center mt-16 text-[40px] h-[50px] font-extrabold text-font">Kontak</p>
          <div class="flex justify-center items-center h-screen">
            <div class="bg-primary shadow-lg rounded-lg p-6 mb-36">
              <img className="w-full" src={map} alt="Gambar" />
              <p className="text-font font-extrabold">Digital Park</p>
              <p className="text-font font-extrabold">Sambau Kacamatan</p>
              <div className="flex">
                <p className="text-font font-extrabold">Nongsa, Kota Batam,</p>
                <p className="text-font font-extrabold ml-40 text-font">+62831432XXXX</p>
                <p className="text-font font-extrabold ml-48">support@recipein.com</p>
              </div>
              <p className="text-font font-extrabold">Kepulauan Riau</p>
              <p className="text-font font-extrabold mb-0">29466</p>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default HubungiKami;
