import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import bg12 from '../assets/img/bg12.png'
import { TbCameraPlus } from "react-icons/tb";
import Measure from '../component/Measure';
import { FiPlusCircle } from "react-icons/fi";
import salad from "../assets/img/dsalad.png"
import salad2 from "../assets/img/dsalad2.png"
import salad3 from "../assets/img/dsalad3.png"
import step from "../assets/img/step.png"
import step2 from "../assets/img/step-2.png"
import step3 from "../assets/img/step-3.png"
import step4 from "../assets/img/step-4.png"
import step5 from "../assets/img/step-5.png"
import { IoRemoveOutline } from "react-icons/io5";

function EditRecipe () {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    };
    return (
        <>
        <section className='body-font font-nunito w-screen h-full'>
            <Navbar/>
            <img src={bg12}className='w-screen h-[400px] mb-16'/>
            <p className='text-[52px] text-font font-extrabold text-center'>Sunting Resep</p>
            <div className='text-[22px] font-medium text-font tracking-wide text-center mt-4 mb-20'>
                <p>Sajikan langkah-langkah dan bahan-bahan dengan mudah, dan bagi inspirasi kuliner</p>
                <p>Anda dengan komunitas kami. Jadilah kontributor dalam dunia kuliner dengan </p>
                <p>membagikan keahlian masak Anda.</p>
            </div>

            <div className='flex justify-center'>
                <div className='w-11/12 h-full bg-[#E6E6E6] rounded-[8px] mb-12 pb-10'>
                    <p className='text-font font-extrabold text-[26px] mt-4 ml-12 mb-4'>Informasi Awal</p>
                    <hr className="border-[1px] border-[#979797] mb-4" />

                    <div className='ml-12 mt-8 inline-flex text-font'>
                        <div className='flex flex-col'>
                            <label htmlFor="rname" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Nama Resep</label>
                            <input type="text" id="rname" className="bg-white w-[595px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" value="Salad Buah Segar" required></input>
                        </div>
                        <div className='flex flex-col ml-10'>
                            <label htmlFor="category" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Jenis/Kategori</label>
                            <input type="text"id="category" className="bg-white w-[595px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value="Salad" required></input>
                        </div>
                        <div className='flex flex-col ml-10'>
                            <label htmlFor="portion" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Porsi</label>
                            <input type="number" min="1" id="portion" className="bg-white w-[100px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value="2" required></input>
                        </div>
                    </div>

                   <div className='ml-12 mt-8 inline-flex text-font'>
                        <div className='flex flex-col'>
                            <label htmlFor="timeprep" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Waktu Persiapan</label>
                            <div className='inline-flex'>
                                <input type="text" id="timeprep" className="bg-white w-[220px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" value="15" required></input>
                                <p className='text-[20px] mt-2 ml-2'>Menit</p>
                            </div>
                        </div>
                        <div className='flex flex-col ml-8'>
                            <label htmlFor="timecook" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Waktu Memasak</label>
                            <div className='inline-flex'>
                                <input type="text" id="timecook" className="bg-white w-[220px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" value="12" required></input>
                                <p className='text-[20px] mt-2 ml-2'>Menit</p>
                            </div>
                        </div>
                        <div className='flex flex-col ml-12'>
                            <p className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Foto (maksimal 8)</p>
                            <div className='grid grid-cols-4 gap-x-3 gap-y-6'>
                                <div className=''>
                                    <img src={salad} className='w-[180px] h-[132px] rounded-[8px]'/>
                                </div>
                                <div className=''>
                                    <img src={salad2} className='w-[180px] h-[132px] rounded-[8px]'/>
                                </div>
                                <div className=''>
                                    <img src={salad3} className='w-[180px] h-[132px] rounded-[8px]'/>
                                </div>
                                <div className=''>
                                    <img src={step} className='w-[180px] h-[132px] rounded-[8px]'/>
                                </div>
                                <div className=''>
                                    <img src={step2} className='w-[180px] h-[132px] rounded-[8px]'/>
                                </div>
                                <div className=''>
                                    <img src={step3} className='w-[180px] h-[132px] rounded-[8px]'/>
                                </div>
                                <div className=''>
                                    <img src={step4} className='w-[180px] h-[132px] rounded-[8px]'/>
                                </div>
                                <div className='w-[180px] h-[132px] bg-primary rounded-[8px] flex justify-center py-6'>
                                    <label htmlFor="fileInput" className="cursor-pointer">
                                        <TbCameraPlus size='60px' className='ml-6' color='#1E2C48'/>
                                        <p className='text-[18px] font-semibold text-secondary'>Tambah Foto</p>
                                    </label>
                                    <input id="fileInput" type="file" className="hidden" onChange={handleFileChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-12 -mt-52'>
                        <label htmlFor="desc" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Deskripsi</label>
                        <textarea type="text" id="uname" className="bg-white w-[595px] h-[200px] tracking-wider text-base border resize-none border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" value="Salad buah ini sangat cocok untuk segala acara. Tidak pernah ada sisa! Ini adalah salah satu resep salad buah favorit saya, karena menurut saya saus jeruknya benar-benar cocok. Salad ini akan terasa lebih enak jika anda membiarkannya meresap lebih lama ke dalam sari buahnya. Saya lebih suka 3 hingga 4 jam di lemari es sebelum saya menyajikannya." required></textarea>
                    </div>

                    <p className='text-font font-extrabold text-[26px] mt-12 ml-12 mb-4'>Bahan-bahan</p>
                    <hr className="border-[1px] border-[#979797] mb-12" />
                    <div className='flex justify-end mr-4'>
                        <button className='w-[202px] h-[38px] bg-primary mr-8 text-font font-bold text-[16px] py-1'>Tambah Jenis Bahan</button>
                    </div>

                    <div className='flex justify-between'>
                        <div>
                            <div className='flex flex-col ml-12'>
                                <p className='text-[22px] font-bold tracking-wide text-font'>Saus</p>
                                <div className='inline-flex'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value="Jus jeruk segar" required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='⅔' required></input>
                                    <Measure />
                                </div>
                                <div className='inline-flex mt-2'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value='Jus lemon segar' required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='⅓' required></input>
                                    <Measure/>
                                </div>
                                <div className='inline-flex mt-2'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value='Gula Merah Kemasan' required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='⅓' required></input>
                                    <Measure/>
                                </div>
                                <div className='inline-flex mt-2'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value='Parutan Kulit Jeruk' required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='½' required></input>
                                    <Measure/>
                                </div>
                                <div className='inline-flex mt-2'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value='Parutan Kulit Lemon' required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='½' required></input>
                                    <Measure/>
                                </div>
                                <div className='inline-flex mt-2'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value='Ekstrak Vanilla' required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='1' required></input>
                                    <Measure/>
                                </div>
                                <button className='w-[200px] h-[45px] mt-2 -ml-4 bg-[#E6E6E6] inline-flex text-font border-none hover:border-none focus:outline-none focus-visible:outline-none'><FiPlusCircle size='20px' className='mr-2'/> Tambah bahan</button>
                            </div>
                        </div>
                        <div className='mr-12'>
                            <div className='flex flex-col ml-12'>
                                <p className='text-[22px] font-bold tracking-wide text-font'>Salad</p>
                                <div className='inline-flex'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value='Nanas segar potong dadu' required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='2' required></input>
                                    <Measure/>
                                </div>
                                <div className='inline-flex mt-2'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value='Stroberi kupas dan iris' required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='2' required></input>
                                    <Measure/>
                                </div>
                                <div className='inline-flex mt-2'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value='Kiwi kupas dan iris' required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='3' required></input>
                                    <Measure/>
                                </div>
                                <div className='inline-flex mt-2'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value='Pisang iris' required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='3' required></input>
                                    <Measure/>
                                </div>
                                <div className='inline-flex mt-2'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value='Jeruk kupas dan belah' required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='2' required></input>
                                    <Measure/>
                                </div>
                                <div className='inline-flex mt-2'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value='Anggur tanpa biji' required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='1' required></input>
                                    <Measure/>
                                </div>
                                <div className='inline-flex mt-2'>
                                    <input type="text" className="bg-white w-[373px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3]" value='Blueberry' required></input>
                                    <input type="text" className="bg-white w-[80px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-[#B3B3B3] ml-2" value='2' required></input>
                                    <Measure/>
                                </div>
                                <button className='w-[200px] h-[45px] mt-2 -ml-4 bg-[#E6E6E6] inline-flex text-font border-none hover:border-none focus:outline-none focus-visible:outline-none'><FiPlusCircle size='20px' className='mr-2'/> Tambah bahan</button>
                            </div>
                        </div>
                    </div>

                    <p className='text-font font-extrabold text-[26px] mt-12 ml-12 mb-4'>Langkah-langkah</p>
                    <hr className="border-[1px] border-[#979797] mb-12" />
                    <div className='flex justify-end mr-4'>
                        <button className='w-[202px] h-[38px] bg-primary mr-8 text-font font-bold text-[16px] py-1'>Tambah Jenis Bahan</button>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex flex-col ml-12'>
                            <div className='mb-4'>
                                <p className='text-[18px] font-bold tracking-wide text-font mb-2'>Langkah 1</p>
                                <textarea type="text" id="uname" className="bg-white w-[595px] h-[128px] tracking-wider text-base border resize-none border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-4 py-3 text-font" value="Untuk sausnya: Didihkan jus jeruk, jus lemon, gula merah, kulit jeruk, dan kulit lemon dalam panci dengan api sedang-besar." required></textarea>
                            </div>
                            <div className='mb-4'>
                                <p className='text-[18px] font-bold tracking-wide text-font mb-2'>Langkah 2</p>
                                <textarea type="text" id="uname" className="bg-white w-[595px] h-[128px] tracking-wider text-base border resize-none border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-4 py-3 text-font" value="Kurangi panas menjadi sedang-rendah dan biarkan mendidih hingga agak mengental, sekitar 5 menit." required></textarea>
                            </div>
                            <div className='mb-4'>
                                <p className='text-[18px] font-bold tracking-wide text-font mb-2'>Langkah 3</p>
                                <textarea type="text" id="uname" className="bg-white w-[595px] h-[128px] tracking-wider text-base border resize-none border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-4 py-3 text-font" value="Angkat dari api dan masukkan ekstrak vanila. Sisihkan hingga dingin." required></textarea>
                            </div>
                        </div>
                        <div className='flex flex-col mr-12'>
                            <div className='mb-4'>
                                <p className='text-[18px] font-bold tracking-wide text-font mb-2'>Langkah 4</p>
                                <textarea type="text" id="uname" className="bg-white w-[595px] h-[128px] tracking-wider text-base border resize-none border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-4 py-3 text-font" value="Untuk salad: Lapisi buah-buahan dalam mangkuk kaca bening besar dengan urutan sebagai berikut: nanas, stroberi, buah kiwi, pisang, jeruk, anggur, dan blueberry." required></textarea>
                            </div>
                            <div className='mb-4'>
                                <p className='text-[18px] font-bold tracking-wide text-font mb-2'>Langkah 5</p>
                                <textarea type="text" id="uname" className="bg-white w-[595px] h-[128px] tracking-wider text-base border resize-none border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-4 py-3 text-font" value="Tuangkan saus dingin di atas buah; tutup dan dinginkan selama 3 hingga 4 jam sebelum disajikan." required></textarea>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" id="cb" className='w-5 h-5 ml-12'/>
                        <label htmlFor="cb" className='text-[18px] text-font ml-2'>Konten tidak mengandung sara dan pelanggaran komunitas.</label>
                    </div>

                    <div className='flex justify-center mt-12'>
                        <button className='bg-primary w-[250px] h-[60px] text-[20px] font-bold text-font border-none'>Perbarui</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
        </>
    )
}

export default EditRecipe