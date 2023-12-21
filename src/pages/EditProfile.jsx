import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import profile from "../assets/img/profile.png"
import { MdNavigateNext } from "react-icons/md";
import { RiImageEditLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { resetState } from '../features/authSlice';
import Swal from "sweetalert2";

function EditProfile() {
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch = useDispatch();
    const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    };

    const handleLogout = async () => {
        navigate("/login");
        dispatch(resetState());
        localStorage.setItem('access_token', "");
    };

    return (
        <>
        <section className='body-font font-nunito w-screen h-[1358px]'>
            <Navbar />
            
            <div className='flex justify-center items-center'>
                <div className='flex justify-between mt-16 mb-[150px] px-8 space-x-8'>
                    <div className='w-[330px] h-[590px] bg-[#E6E6E6] rounded-[8px]'>
                        <div className='inline-flex mb-6'>
                            <img className=" w-[90px] h-[90px] rounded-full ml-8 mt-8" src={profile} alt=""/>
                            <div className=''>
                                <p className='text-font font-extrabold text-[20px] mt-12 ml-4'>Hallo,</p>
                                <p className='text-font font-extrabold text-[20px] ml-4'>Dapur Amanda</p>
                            </div>
                        </div>
                        <hr class="border-[1px] border-[#979797] mb-4" />
                        <div className='flex justify-center text-font text-[16px]'>
                            <ul className="ml-10">
                                <li className='bg-putih mt-4 rounded-[8px] shadow-lg w-[250px] h-[40px] inline-flex justify-between border-none'>
                                    <a href="/myrecipe" className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font">Resep Ku</a>
                                    <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                                </li>
                                <li className='bg-putih mt-4 rounded-[8px] shadow-lg w-[250px] h-[40px] inline-flex justify-between border-none'>
                                    <a href="/favorite" className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font">Favorite</a>
                                    <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                                </li>
                                <li className='bg-putih mt-4 rounded-[8px] shadow-lg w-[250px] h-[40px] inline-flex justify-between border-none'>
                                    <a href="/dnutrition" className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font">Nutrisi Harian</a>
                                    <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                                </li>
                                <li className='bg-putih mt-4 rounded-[8px] shadow-lg w-[250px] h-[40px] inline-flex justify-between border-none'>
                                    <a href="/editprofile" className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font">Sunting Profile</a>
                                    <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                                </li>
                                <li className='bg-putih mt-4 rounded-[8px] shadow-lg w-[250px] h-[40px] inline-flex justify-between border-none'>
                                    <a href="/newpass" className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font">Ubah Kata Sandi</a>
                                    <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                                </li>
                                <li className='bg-[#CE272C] mt-4 rounded-[8px] shadow-lg w-[250px] h-[40px] inline-flex justify-between border-none'>
                                    <a href="/login" className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font" onClick={handleLogout}>Keluar</a>
                                    <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                                </li>
                                <button type="submit" onClick={updateProfile} className="w-[156px] text-font bg-primary font-bold rounded-[4px] text-[16px] mt-6 px-1 py-2 text-center mx-12">Simpan Perubahan</button>
                            </ul>
                        </div>
                    </div>

                <div className='w-[908px] h-[711px] bg-[#EDEDED] mr-12 rounded-[8px]'>
                    <p className='text-font font-extrabold text-[24px] mt-4 ml-12 mb-4'>Sunting Profil</p>
                    <hr class="border-[1px] border-[#979797]" />

                    <div className='ml-8 mt-8 inline-flex text-font'>
                        <div className='flex flex-col'>
                            <label for="fname" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Nama Depan</label>
                            <input type="text" id="fname" className="bg-white w-[400px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan nama depan" required></input>
                        </div>
                        <div className='flex flex-col ml-8'>
                            <label for="bname" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Nama Belakang</label>
                            <input type="text" id="bname" className="bg-white w-[400px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan nama belakang" required></input>
                        </div>
                    </div>
                    <div className='ml-8 mt-8 inline-flex text-font'>
                        <div className='flex flex-col'>
                            <label for="uname" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Username</label>
                            <input type="text" id="uname" className="bg-white w-[400px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan username" required></input>
                        </div>
                        <div className='flex flex-col-reverse -ml-96 mb-32'>
                            <label for="desc" className="block text-[18px] font-bold justify-center -ml-4 pb-2 tracking-wider">Deskripsi</label>
                        </div>
                        <div className='flex flex-col ml-[354px]'>
                            <img className=" w-[250px] h-[250px] rounded-none mt-8" src={profile} alt=""/>
                        </div>
                        <div className='bg-[#D9D9D9] w-[44px] h-[44px] rounded-full -ml-14 mt-10'>
                            <label htmlFor="fileInput" className="cursor-pointer text-white py-2 px-4 rounded-md">
                            <RiImageEditLine color='#111111' fontSize="45px" className='py-2 px-2 -mt-6'/>
                            </label>
                            <input
                            id="fileInput"
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    <div className='ml-8 -mt-32 flex'>
                    <textarea type="text" id="desc" className="bg-white w-[400px] h-[150px] tracking-wider text-base border resize-none border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan deskripsi" required></textarea>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </section>
    </>
    )
}

export default EditProfile