import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import faqimg from "../assets/img/faqimg.png";

import { Disclosure } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

const dropdownfaq = [
  {
    title: "Bagaimana cara menambahkan resep pribadi ke RecipeIn?",
    answer: "",
  },
  {
    title: "Dapatkah saya melihat ulasan atau komentar dari pengguna lain?",
    answer: "",
  },
  {
    title: "Adakah fitur rekomendasi resep berdasarkan preferensi saya?",
    answer: "",
  },
  {
    title: "Bisakah saya berbagi resep saya dengan komunitas RecipeIn?",
    answer: "",
  },
  {
    title: "Apakah RecipeIn menyediakan informasi nutrisi untuk setiap resep?",
    answer: "Ya, setiap resep di RecipeIn dilengkapi dengan informasi nutrisi dan nilai gizi untuk membantu Anda membuat pilihan makanan yang lebih sehat.",
  },
  {
    title: "Adakah fitur rekomendasi resep berdasarkan preferensi saya?",
    answer: "Jika Anda membutuhkan bantuan tambahan, hubungi tim dukungan pelanggan kami melalui email di support@recipein.com atau kunjungi halaman Hubungi Kami.",
  },
];

function FAQ() {
  return (
    <>
      <section className="body-font font-nunito w-screen h-auto">
        <Navbar />
        <div className="content">
          <div className="flex  ">
            <div className="pl-12 w-1/2 mt-7 mb-32 pt-12 p-4">
              <p className="text-[33px] text-font ml-32 MB-0 font-extrabold ">FAQ</p>
              <p className="text-[25px] text-font ml-32 ">
                Selamat datang di halaman FAQ kami! Di sini, kami menyajikan jawaban untuk pertanyaan yang sering diajukan agar Anda dapat dengan mudah menemukan informasi yang Anda cari. Kami mengerti bahwa setiap pengalaman pengguna unik,
                dan FAQ kami dirancang untuk memberikan panduan cepat dan jelas. Temukan jawaban untuk pertanyaan umum atau dapatkan bantuan lebih lanjut melalui saluran dukungan Hubungi Kami.
              </p>
            </div>
            <div className=" w-1/2 mt-7 pt-12 pl-32 p-4">
              <img src={faqimg} className=" h-auto object fit-cover" alt="" />
            </div>
          </div>
          <div>
            <div className="w-full px-60 pt-0 pb-32">
              <div className=" w-full pt-4">
                {dropdownfaq.map((dropdownfaq) => (
                  <div className="mx-0 w-full rounded-2xl bg-white py-2">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-xl font-medium text-black-900 hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-black-500 focus-visible:ring-opacity-75">
                            <span>{dropdownfaq.title}</span>
                            <BiChevronDown className={`${open ? "rotate-180 transform" : ""} h-8 w-10 text-black-500`} />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-black-500">{dropdownfaq.answer}</Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default FAQ;