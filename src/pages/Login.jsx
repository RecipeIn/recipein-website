import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/img/bg.png"
import logo from "../assets/img/Logo.png"
import axios from "axios";
import Swal from "sweetalert2";
import {
    setPending,
    setFulfilled,
    setRejected,
    resetState,
  } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogined, setLogined] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, isError, isLogin, message } = useSelector(
      (state) => state.auth
    );

    useEffect(() => {
        if (isLogined) {
          navigate('/');
        }
    }, [isLogined, navigate]);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(setPending());
        try {
            if ( !isValidEmail(email)|| !password) {
                setError('Harap isi semua kolom dengan benar.');
                return;
            }
            const response = await axios.post('https://api.recepin.my.id/api/login', {
                email: email,
                password: password,
            });
    
            const { user_id, access_token } = response.data;

            Swal.fire({
            icon: "success",
            title: "Login Berhasil",
            showConfirmButton: false,
            timer: 2100,
        });
        
            setLogined(true);

            setEmail("");
            setPassword("");
            dispatch(setFulfilled(response.data));
        }   catch (error) {
            console.error('Error during login:', error.message);
            dispatch(setRejected("Login Failed"));
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };
    return (
        <>
        <section className="body-font font-nunito w-screen h-screen">

            <div className='grid grid-cols-2'>
                <div className="relative -mr-28">
                    <img src={bg}className="w-[900px] h-screen"/>
                    <p className='text-[42px] font-extrabold absolute top-[300px] text-[#FFFEFE] ml-16'>Temukan, Masak, Nikmati</p>
                    <div className='inline-flex ml-16 absolute top-[355px]'>
                        <p className='text-[42px] font-extrabold text-[#FFFEFE]'>dengan</p>
                        <p className='text-[42px] font-extrabold text-primary ml-4'>RecipeIn</p>
                    </div>
                    <p className='w-[497px] text-[16px] text-putih absolute top-[435px] ml-16'>Ubah dapur Anda menjadi mahakarya kuliner! RecipeIn tujuan utama bagi para penggemar makanan!</p>
                </div>
                <div className='text-font ml-48 mt-4'>
                    <p className='text-[32px] font-extrabold pt-6'>Masuk</p>
                    <p className='text-[18px] tracking-wide'>Masuk untuk melanjutkan</p>
                    <label htmlFor="email" className="block text-lg font-bold justify-center pt-4 pb-2">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="bg-field w-[400px] h-[50px] shadow-lg text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan email" required></input>
                    <label htmlFor="password" className="block text-lg font-bold justify-center pt-4 pb-2">Kata Sandi</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="bg-field w-[400px] h-[50px] shadow-lg text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan kata sandi" required></input>
                    
                    <div className='inline-flex mb-4'>
                    <Link to="/forgotpass" className="mt-3 text-font hover:text-font">Lupa kata sandi?</Link>
                    </div>
                    
                    {error && <p className='text-error font-bold text-lg'>{error}</p>}
                    <button type="submit" onClick={handleLogin} className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-8 px-5 py-3 text-center text-font border-none">Masuk</button>
                    <p className='text-[14px] font-medium pl-32 pt-2'>Belum punya akun? <Link to="/register" className="text-font hover:text-font">Daftar</Link></p>

                    <div className='inline-flex'>
                        <hr className="border-[1px] border-[#808080] mt-6 w-[148px] ml-7" />
                        <p className='text-[14px] tracking-wider text-[#808080] mt-3 ml-4'>atau</p>
                        <hr className="border-[1px] border-[#808080] mt-6 w-[148px] ml-4" />
                    </div>

                    <div className="pl-[85px] justify-center pt-2 dark:bg-gray-800">
                        <button className="text-[14px] font-medium px-4 py-2 border flex gap-2 border-slate-300 shadow-xl dark:border-slate-700 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                        <span>Masuk menggunakan Google</span>
                        </button>
                    </div>
                </div>
            </div>


        </section>
        </>
    )
}

export default Login