import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import { FiShare2 } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TbStarFilled } from "react-icons/tb";
import IconButton from '../component/IconButton';
import profile from "../assets/img/profile.png"
import profile2 from "../assets/img/profile2.png"
import profile3 from "../assets/img/profile3.png"
import { FaStar } from "react-icons/fa6";
import Dropdown from '../component/Dropdown';
import { BiLike, BiSolidLike} from "react-icons/bi";

const ingredients = [
    {
        text: "⅔ cangkir jus jeruk segar",
    },
    {
        text: "⅓ cangkir jus lemon segar",
    },
    {
        text: "½ sendok teh parutan kulit jeruk",
    },
    {
        text: "½ sendok teh parutan kulit lemon"
    },
]

const ingredients2 = [
    {
        text: "2 cangkir nanas segar potong dadu",
    },
    {
        text: "2 cangkir stroberi, kupas dan iris",
    },
    {
        text: "3 buah kiwi, kupas dan iris",
    },
    {
        text: "3 buah pisang, iris",
    },
    {
        text: "2 buah jeruk, kupas dan belah",
    },
    {
        text: "1 cangkir anggur tanpa biji",
    },
    {
        text: "2 cangkir blueberry",
    },
]

const nutritionFacts = [
    {
        kandungan: "Lemak Total",
        takaran: "1g",
        presentase: "1%"
    },
    {
        kandungan: "Lemak Jenuh",
        takaran: "0g",
        presentase: "0%"
    },
    {
        kandungan: "Sodium",
        takaran: "5mg",
        presentase: "0%"
    },
    {
        kandungan: "Karbohidrat",
        takaran: "39g",
        presentase: "14%"
    },
    {
        kandungan: "Serat",
        takaran: "5g",
        presentase: "16%"
    },
    {
        kandungan: "Gula",
        takaran: "29g",
        presentase: ""
    },
    {
        kandungan: "Protein",
        takaran: "2g",
        presentase: ""
    },
    {
        kandungan: "Vitamin C",
        takaran: "94mg",
        presentase: "471%"
    },
    {
        kandungan: "Kalsium",
        takaran: "45mg",
        presentase: "3%"
    },
    {
        kandungan: "Zat Besi",
        takaran: "1mg",
        presentase: "3%"
    },
    {
        kandungan: "Kalium",
        takaran: "451mg",
        presentase: "10%"
    },
]

function DetailRecipe() {
    const [portion, setPortion] = useState(1);

    const handleDecrease = () => {
        if (portion > 1) {
            setPortion(portion - 1);
        }
    };

    const handleIncrease = () => {
        setPortion(portion + 1);
    };
    return (
        <>
        <section className='body-font font-nunito w-screen h-full'>
            <Navbar />
                <div className='inline-flex mt-8 ml-8'>
                    <p className='text-[48px] font-extrabold text-font'>Salad Buah Segar</p>
                    <FiShare2 fontSize="35px" color='#111111' className='mt-5 ml-4'/>
                </div>
                <div className='flex mt-2 ml-8'>
                    <TbStarFilled color='gold' fontSize="25" className=''/>
                    <p className='text-[18px] text-font tracking-wider ml-1'>4.2 (50) | 40 Dilihat | 8 Foto</p>
                </div>
                <div className='flex mt-2 ml-8 mr-8'>
                    <p className='text-[18px] text-font tracking-wide'>Salad buah ini sangat cocok untuk segala acara. Tidak pernah ada sisa! Ini adalah salah satu resep salad buah favorit saya, karena menurut saya saus jeruknya benar-benar cocok. Salad ini akan terasa lebih enak jika anda membiarkannya meresap lebih lama ke dalam sari buahnya. Saya lebih suka 3 hingga 4 jam di lemari es sebelum saya menyajikannya.</p>
                </div>
                <div className='inline-flex mt-2 ml-8'>
                    <p className='text-[18px] text-font tracking-wider'>Resep oleh</p>
                    <Link to='/viewprofile'><p className='text-[18px] text-primary tracking-wider ml-2'>Dapur Amanda</p></Link>
                    <p className='text-[18px] text-font tracking-wider ml-2'>| Diperbarui pada 15 Agustus 2023</p>
                </div>
                <div className='flex mt-8 mb-8 ml-8'>
                    <img src='/src/assets/img/dsalad.png' className='w-[472px] h-[299px] rounded-[8px]'/>
                    <img src='/src/assets/img/dsalad2.png' className='w-[472px] h-[299px] rounded-[8px] ml-12'/>
                    <img src='/src/assets/img/dsalad3.png' className='w-[472px] h-[299px] rounded-[8px] ml-12'/>
                </div>
                <div className='flex mt-2 ml-28 mb-4'>
                    <img src='/src/assets/img/step.png' className='w-[242px] h-[152px] rounded-[8px]'/>
                    <img src='/src/assets/img/step-2.png' className='w-[242px] h-[152px] rounded-[8px] ml-8'/>
                    <img src='/src/assets/img/step-3.png' className='w-[242px] h-[152px] rounded-[8px] ml-8'/>
                    <img src='/src/assets/img/step-4.png' className='w-[242px] h-[152px] rounded-[8px] ml-8'/>
                    <img src='/src/assets/img/step-5.png' className='w-[242px] h-[152px] rounded-[8px] ml-8'/>
                </div>
                <div className='flex justify-center -ml-8'>
                    <div className='bg-[#E6E6E6] w-[1420px] h-[100px] mt-4 mb-4 inline-flex'>
                        <div className='flex flex-col mt-6 ml-40 text-center'>
                            <p className='text-[18px] font-semibold tracking-wider'>Waktu Persiapan</p>
                            <p className='text-[18px] tracking-wider'>&#177; 10 Menit</p>
                        </div>
                        <div className='flex flex-col mt-6 ml-44 text-center'>
                            <p className='text-[18px] font-semibold tracking-wider'>Waktu Memasak</p>
                            <p className='text-[18px] tracking-wider'>&#177; 10 Menit</p>
                        </div>
                        <div className='flex flex-col mt-6 ml-44 text-center'>
                            <p className='text-[18px] font-semibold tracking-wider'>Waktu Total</p>
                            <p className='text-[18px] tracking-wider'>&#177; 20 Menit</p>
                        </div>
                        <div className='flex flex-col mt-6 ml-44 text-center'>
                            <p className='text-[18px] font-semibold tracking-wider'>Porsi</p>
                            <div className="flex items-center justify-center w-54 h-6 mb-8">
                                <IconButton
                                    icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                        className=''
                                    />
                                    }
                                    onClick={handleDecrease}
                                />
                                <span className=" text-lg text-secondary">{portion} Porsi</span>
                                <IconButton
                                    icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                    }
                                    onClick={handleIncrease}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='text-[30px] font-extrabold text-font ml-20'>Bahan-bahan</p>
                    <div className='grid grid-cols-2 ml-20'>
                        <div className='text-font'>
                            <p className='text-[24px] font-extrabold'>Saus:</p>
                            {ingredients.map((ingredients) => (
                            <div className='flex mt-1'>
                                <FaCircleCheck fontSize="22px" color='#FFD32D'/>
                                <p className='text-[18px] font-medium text-font tracking-wider ml-2'>{ingredients.text}</p>
                            </div>
                            ))}
                        </div>
                        <div className='text-font'>
                            <p className='text-[24px] font-extrabold'>Salad:</p>
                            {ingredients2.map((ingredients2) => (
                            <div className='flex mt-1'>
                                <AiOutlinePlusCircle fontSize="22px" color='#111111'/>
                                <p className='text-[18px] font-medium text-font tracking-wider ml-2'>{ingredients2.text}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='text-[30px] font-extrabold text-font ml-20'>Langkah-langkah</p>
                    <div className='grid grid-cols-2 ml-20'>
                        <div className='text-font'>
                            <p className='font-bold text-[24px]'>Langkah 1</p>
                            <p className='text-[18px] font-medium tracking-wide w-[600px]'>Untuk sausnya: Didihkan jus jeruk, jus lemon, gula merah, kulit jeruk, dan kulit lemon dalam panci dengan api sedang-besar.</p>
                            <p className='font-bold text-[24px]'>Langkah 2</p>
                            <p className='text-[18px] font-medium tracking-wide w-[600px]'>Kurangi panas menjadi sedang-rendah dan biarkan mendidih hingga agak mengental, sekitar 5 menit.</p>
                            <p className='font-bold text-[24px]'>Langkah 3</p>
                            <p className='text-[18px] font-medium tracking-wide w-[600px]'>Angkat dari api dan masukkan ekstrak vanila. Sisihkan hingga dingin.</p>
                            
                        </div>
                        <div className='text-font'>
                            <p className='font-bold text-[24px]'>Langkah 4</p>
                            <p className='text-[18px] font-medium tracking-wide w-[600px]'>Untuk salad: Lapisi buah-buahan dalam mangkuk kaca bening besar dengan urutan sebagai berikut: nanas, stroberi, buah kiwi, pisang, jeruk, anggur, dan blueberry.</p>
                            <p className='font-bold text-[24px]'>Langkah 5</p>
                            <p className='text-[18px] font-medium tracking-wide w-[600px]'>Tuangkan saus dingin di atas buah; tutup dan dinginkan selama 3 hingga 4 jam sebelum disajikan.</p>
                        </div>
                    </div>
                </div>
                <p className='text-[30px] font-extrabold text-font mt-8 ml-20'>Langkah-langkah</p>
                <div className='mt-4 flex'>
                    <div className='bg-[#E6E6E6] w-[436px] h-[548px] mb-8 ml-20 pt-4 px-4 text-font'>
                        <p className='text-[18px] tracking-wide'>Porsi Per Resep : 2</p>
                        <p className='text-[18px] tracking-wide'>Kalori : 155%</p>
                        <hr className="border-[1px] border-font mt-4 w-[400px]"/>
                        <p className='text-[18px] tracking-wide text-right'>% Nilai Harian*</p>
                        <hr className="border-[1px] border-font mt-1 mb-1 w-[400px]"/>
                        {nutritionFacts.map((nutritionFacts) => (
                        <div>
                            <div className='flex justify-between'>
                                <p className='text-[18px] tracking-wide'><span className='font-bold'>{nutritionFacts.kandungan} : </span>{nutritionFacts.takaran}</p>
                                <p className='text-[18px] tracking-wide text-right'>{nutritionFacts.presentase}</p>
                            </div>
                            <hr className="border-[1px] border-font mt-1 mb-1 w-[400px]"/>
                        </div>
                        ))}
                    </div>
                    <div className='ml-8 text-font'>
                        <p className='text-[18px] tracking-wide w-[1000px]'><span className='font-bold'>* </span>Persen Nilai Harian didasarkan pada diet 2.000 kalori. Nilai harian Anda mungkin lebih tinggi atau lebih rendah tergantung pada kebutuhan kalori Anda.</p>
                        <p className='text-[18px] tracking-wide w-[1000px] mt-1'><span className='font-bold'>** </span>Informasi nutrisi tidak tersedia untuk semua bahan. Jumlahnya didasarkan pada data nutrisi yang tersedia.</p>
                        <p className='text-[18px] tracking-wide w-[1000px] mt-1'><span className='font-bold'>*** </span>Informasi saat ini tidak tersedia untuk nutrisi ini. Jika Anda mengikuti diet ketat secara medis, silakan berkonsultasi dengan dokter atau ahli diet terdaftar sebelum menyiapkan resep ini untuk konsumsi pribadi.</p>
                    </div>
                </div>
                <p className='text-[30px] font-extrabold text-font mt-8 ml-20'>Ulasan</p>
                <div className='inline-flex'>
                    <div className='bg-primary w-[618px] h-[564px] rounded-[16px] ml-[70px] mt-4 mb-12 p-3.5'>
                        <div className='bg-[#E6E6E6] w-[590px] h-[536px] rounded-[8px] p-4'>
                            <div className='inline-flex'>
                                <img src={profile} className='w-[90px] h-[90px] rounded-full'/>
                                <p className='text-[26px] font-extrabold text-font mt-6 ml-4'>Salad Buah Segar</p>
                            </div>
                            <p className='text-[16px] tracking-wider text-[#B3B3B3]'><span className='text-[18px] font-bold text-font'>Peringkat </span> (utama)</p>
                            <div className='inline-flex mt-2 mb-4'>
                                <FaStar color='#B3B3B3' fontSize='20px'/>
                                <FaStar color='#B3B3B3' fontSize='20px' className='ml-0.5'/>
                                <FaStar color='#B3B3B3' fontSize='20px' className='ml-0.5'/>
                                <FaStar color='#B3B3B3' fontSize='20px' className='ml-0.5'/>
                                <FaStar color='#B3B3B3' fontSize='20px' className='ml-0.5'/>
                            </div>
                            <p className='text-[16px] tracking-wider text-[#B3B3B3]'><span className='text-[18px] font-bold text-font'>Ulasan Anda </span> (opsional)</p>
                            <div className='mt-2  text-font text-[16px]'>
                                <textarea type="text" className="bg-white w-[550px] h-[156px] tracking-wider rounded-[10px] block px-4 py-3 shadow-lg resize-none" placeholder="Masukkan ulasan" required></textarea>
                            </div>
                            <div className='flex justify-end'>
                                <div className='inline-flex text-font mt-[105px] mr-2'>
                                        <button className='border border-primary w-[83px] h-[38px] bg-[#E6E6E6] py-1 px-1 text-[18px] rounded-[4px] shadow-lg'>Batal</button>
                                        <button className='ml-4 w-[83px] h-[38px] bg-primary py-1 px-1 text-[18px] rounded-[4px] shadow-lg'>Kirim</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-20 mt-4'>
                        <hr className="border-[1px] border-font mt-1 mb-1 w-[728px]"/>
                        <div className='flex justify-end'>
                            <div className='inline-flex mr-2'>
                            <p className='text-[16px] font-bold tracking-wider text-font mr-2'>Urutkan:</p>
                            <Dropdown/>
                            </div>
                        </div>
                        <hr className="border-[1px] border-font mt-1 mb-1 w-[728px]"/>
                        <div className=''>
                            <div className='mt-4'>
                                <div className='inline-flex'>
                                    <img src={profile2}/>
                                    <p className='font-bold text-[22px] text-font mt-4 ml-4'>Sabilla</p>
                                </div>
                                <div className='flex mt-4'>
                                    <FaStar color='#FFD32D' fontSize='20px'/>
                                    <FaStar color='#FFD32D' fontSize='20px' className='ml-0.5'/>
                                    <FaStar color='#FFD32D' fontSize='20px' className='ml-0.5'/>
                                    <FaStar color='#FFD32D' fontSize='20px' className='ml-0.5'/>
                                    <FaStar color='#FFD32D' fontSize='20px' className='ml-0.5'/>
                                    <p className='text-[16px] font-semibold text-font tracking-wide ml-2'>23/11/2023</p>
                                </div>
                                <div className='mt-2 text-font text-[18px] tracking-wide w-[730px]'>
                                    <p>Saya sangat merekomendasikan salad buah segar ini, terutama bagi mereka yang mencari camilan yang sehat dan memuaskan. Rasanya begitu alami dan penuh nutrisi, membuatnya menjadi pilihan yang sempurna untuk memulai hari atau sebagai penutup ringan setelah makan.</p>
                                </div>
                                <div className='flex mt-4 mb-2'>
                                    <BiSolidLike color='#FFD32D' fontSize='20px'/>
                                    <p className='text-[14px] font-semibold text-font tracking-wider ml-2'>Membantu (32)</p>
                                </div>
                            </div>
                        </div>
                        <hr className="border-[1px] border-font mt-1 mb-1 w-[728px]"/>
                        <div className=''>
                            <div className='mt-4'>
                                <div className='inline-flex'>
                                    <img src={profile3}/>
                                    <p className='font-bold text-[22px] text-font mt-4 ml-4'>Sabilla</p>
                                </div>
                                <div className='flex mt-4'>
                                    <FaStar color='#FFD32D' fontSize='20px'/>
                                    <FaStar color='#FFD32D' fontSize='20px' className='ml-0.5'/>
                                    <FaStar color='#FFD32D' fontSize='20px' className='ml-0.5'/>
                                    <FaStar color='#FFD32D' fontSize='20px' className='ml-0.5'/>
                                    <p className='text-[16px] font-semibold text-font tracking-wide ml-2'>16/11/2023</p>
                                </div>
                                <div className='mt-2 text-font text-[18px] tracking-wide w-[730px]'>
                                    <p>Tampilan salad ini sendiri sangat menggugah selera makan dengan warna-warna cerah yang memikat.</p>
                                </div>
                                <div className='flex mt-4 mb-2'>
                                    <BiLike color='#FFD32D' fontSize='20px'/>
                                    <p className='text-[14px] font-semibold text-font tracking-wider ml-2'>Membantu (0)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </section>
        </>
    )
}

export default DetailRecipe