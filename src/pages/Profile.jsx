import { useState, useEffect } from 'react'
import { Link, useNavigate} from "react-router-dom";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'
import user from "../assets/img/user.png"
import { MdNavigateNext } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { resetState } from '../features/authSlice';
import axios from 'axios';
import Swal from 'sweetalert2';

function EditProfile() {
    const { isLogin } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setID] = useState("")
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [avatar, setAvatar] = useState("");
    const token = localStorage.getItem("access_token");
    const [apiProfile, setApiProfile] = useState(null);

    useEffect(() => {
        getProfile();
    }, []);

    useEffect(() => {
        if (!isLogin) {
            Swal.fire({
                icon: "error",
                title: "Anda Belum Login!",
                showConfirmButton: true,
            })
            navigate("/login");
        }
    }, [isLogin, navigate]);

    const handleLogout = async () => {
        navigate("/login");
        dispatch(resetState());
        localStorage.setItem('access_token', "");
    };
    const getProfile = async () => {
        try {
            const response = await axios.get('https://api.recepin.my.id/api/profile', {
                headers: {"Authorization" : `Bearer ${token}`},
            });
            const apiProfile = response.data.user;
            setID(apiProfile.id)
            setUsername(apiProfile.username.charAt(0).toUpperCase() + apiProfile.username.slice(1));
            setFirstname(apiProfile.first_name.charAt(0).toUpperCase() + apiProfile.first_name.slice(1))
            setLastname(apiProfile.last_name.charAt(0).toUpperCase() + apiProfile.last_name.slice(1))
            setAvatar(apiProfile.avatar)
            setApiProfile(response.data.user);
        } catch (error) {
          console.log(error);
        }
    };
    const description = `Salam hangat dari dapur yang penuh aroma dan kehangatan! Saya adalah ${username}, seorang pecinta masakan yang selalu mencari inspirasi baru untuk menghidangkan kreasi kuliner istimewa.`
    
    return (
        <>
        <section className='body-font font-nunito w-screen h-[1358px]'>
            <Navbar />
            
            <div className='flex justify-center items-center'>
                <div className='flex justify-between mt-16 mb-[150px] px-8 space-x-8'>
                    <div className='w-[330px] h-[590px] bg-[#E6E6E6] rounded-[8px]'>
                        <div className='inline-flex mb-6'>
                        {apiProfile && (
                            <div>
                                {apiProfile.avatar ? (
                                    <img src={apiProfile.avatar} className='w-[90px] h-[90px] rounded-full ml-8 mt-8' alt="User Avatar" />
                                ) : (
                                    <img src={user} className='w-[90px] h-[90px] rounded-full ml-8 mt-8' alt="User Avatar" />
                                )}
                            </div>
                        )}
                            <div className=''>
                                <p className='text-font font-extrabold text-[20px] mt-12 ml-4'>Hallo,</p>
                                <p className='text-font font-extrabold text-[20px] ml-4'>{username}</p>
                            </div>
                        </div>
                        <hr className="border-[1px] border-[#979797] mb-4" />
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
                                    <a className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font" onClick={handleLogout}>Keluar</a>
                                    <MdNavigateNext className='mt-2 mr-4' fontSize="26px" color='#111111'/>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='w-[908px] h-[711px] bg-[#E6E6E6] mr-12 rounded-[8px]'>
                        <p className='text-font font-extrabold text-[24px] mt-4 ml-12 mb-4'>Informasi Pribadi</p>
                        <hr className="border-[1px] border-[#979797]" />

                        <div className='ml-8 mt-8 inline-flex text-font'>
                            <div className='flex flex-col'>
                                <label htmlFor="fname" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Nama Depan</label>
                                <input type="text" disabled id="fname" className="bg-white w-[400px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-black" value={firstname} required></input>
                            </div>
                            <div className='flex flex-col ml-8'>
                                <label htmlFor="bname" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Nama Belakang</label>
                                <input type="text" disabled id="bname" className="bg-white w-[400px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-black" value={lastname} required></input>
                            </div>
                        </div>
                        <div className='ml-8 mt-8 inline-flex text-font'>
                            <div className='flex flex-col'>
                                <label htmlFor="uname" className="block text-[18px] font-bold justify-center pb-2 tracking-wider">Username</label>
                                <input type="text" disabled id="uname" className="bg-white w-[400px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-black" value={username} required></input>
                            </div>
                            <div className='flex flex-col-reverse -ml-96 mb-32'>
                                <label htmlFor="desc" className="block text-[18px] font-bold justify-center -ml-4 pb-2 tracking-wider">Deskripsi</label>
                            </div>
                            <div className='flex flex-col ml-[354px]'>
                            {apiProfile && (
                                <div>
                                    {apiProfile.avatar ? (
                                        <img src={apiProfile.avatar} className='w-[250px] h-[250px] rounded-none mt-8' alt="User Avatar" />
                                    ) : (
                                        <div>
                                            &nbsp;
                                        </div>
                                    )}
                                </div>
                            )}
                            </div>
                        </div>
                        <div className='ml-8 -mt-32 flex'>
                        <textarea type="text" disabled id="desc" className="bg-white w-[400px] h-[150px] tracking-wider text-base border border-black rounded-[10px] resize-none focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-black" value={description} required></textarea>
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