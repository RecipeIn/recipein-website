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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, isError, isLogin, message } = useSelector(
      (state) => state.auth
    );
    const saveTokenToLocalstorage = (token) => {
        localStorage.setItem('access_token', token);
    };

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
                Swal.fire({
                    icon: 'error',
                    title: 'Login Gagal!',
                    text: 'Harap isi semua kolom dengan benar.',
                    showConfirmButton: true,
                });
                return;
            }
            const response = await fetch('https://api.recepin.my.id/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                throw new Error('Gagal login');
            }
            const data = await response.json();
            const { access_token } = data;
            saveTokenToLocalstorage(access_token);

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
            Swal.fire({
                icon: 'error',
                title: 'Login Form',
                text: 'Email atau Kata Sandi tidak valid',
                showConfirmButton: true,
            });
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };
    return (
        <>
        <section className="body-font font-nunito w-screen h-screen">
           <div className="h-screen flex items-center justify-center">
                <div className="w-3/5">
                    <img
                        className="object-cover w-full h-screen"
                        src={bg}
                        alt="Login Background"
                    />
                    <div className='absolute top-[300px]'>
                        <p className='text-[42px] font-extrabold text-putih ml-16'>Temukan, Masak, Nikmati</p>
                        <div className='inline-flex -mt-4 ml-16'>
                            <p className='text-[42px] font-extrabold text-putih'>dengan</p>
                            <p className='text-[42px] font-extrabold text-primary ml-4'>RecipeIn</p>
                        </div>
                        <p className='w-[497px] text-[16px] text-putih ml-16'>Ubah dapur Anda menjadi mahakarya kuliner! RecipeIn tujuan utama bagi para penggemar makanan!</p>
                    </div>
                </div>
                <div className="w-2/5 px-2">
                    <div className="pt-6 pb-4 my-4 px-16 text-font">
                        <p className='text-[32px] font-extrabold pt-6'>Masuk</p>
                        <p className='text-[18px] tracking-wide'>Masuk untuk melanjutkan</p>
                        <label htmlFor="email" className="block text-lg font-bold justify-center pt-4 pb-2">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="bg-field w-[400px] h-[50px] shadow-lg text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan email" required></input>
                        <label htmlFor="password" className="block text-lg font-bold justify-center pt-4 pb-2">Kata Sandi</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="bg-field w-[400px] h-[50px] shadow-lg text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan kata sandi" required></input>
                        
                        <div className='inline-flex mb-4'>
                        <Link to="/forgotpass" className="mt-3 text-font hover:text-font">Lupa kata sandi?</Link>
                        </div>
                        
                        <button type="submit" onClick={handleLogin} className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-8 px-5 py-3 text-center text-font border-none">Masuk</button>
                        <p className='text-[14px] font-medium pl-32 pt-4'>Belum punya akun? <Link to="/register" className="text-font hover:text-font">Daftar</Link></p>

                        <div className='inline-flex'>
                            <hr className="border-[1px] border-[#808080] mt-6 w-[148px] ml-7" />
                            <p className='text-[14px] tracking-wider text-[#808080] mt-3 ml-4'>atau</p>
                            <hr className="border-[1px] border-[#808080] mt-6 w-[148px] ml-4" />
                        </div>

                        <div className="pl-[85px] justify-center pt-2">
                            <button className="text-[14px] font-medium px-4 py-2 border flex gap-2 border-slate-300 shadow-xl rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                            <span>Masuk menggunakan Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Login