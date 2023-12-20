import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/img/bg.png"
import logo from "../assets/img/Logo.png"
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPasword, setConfPassword] = useState("");
    const [isRegistered, setRegistered] = useState(false);
    const navigate = useNavigate();
    const [isCheckboxChecked, setCheckboxChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isRegistered) {
          navigate('/login');
        }
      }, [isRegistered, navigate]);

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Validasi Input
            if (!username || !password || !isValidEmail(email)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Gagal!',
                    text: 'Harap isi semua kolom dengan benar.',
                    showConfirmButton: true,
                });
                return;
            } else {
                if (password !== confPasword) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Gagal!',
                        text: 'Kata Sandi tidak sama dengan Konfirmasi Kata Sandi',
                        showConfirmButton: true,
                    });
                    return;
                } else {
                    if (!isCheckboxChecked) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Login Gagal!',
                            text: 'Anda belum menyetujui ketentuan perjanjian.',
                            showConfirmButton: true,
                        });
                        return;
                    }
                }
            }            
            const response = await axios.post('https://api.recepin.my.id/api/signup', {
                username: username,
                email: email,
                password: password,
            });
            

            const { status, message, user_id } = response.data;
            
            Swal.fire({
                icon: "success",
                title: "Register Berhasil, Silahkan Login Terlebih Dahulu",
                showConfirmButton: false,
                timer: 2100,
            });
            
            setRegistered(true);

            setUsername("");
            setEmail("");
            setPassword("");
            setConfPassword("");
            setIsLoading(false);
            setIsError(false);
        }   catch (error) {
            console.error('Error during register:', error.message);
            setIsLoading(false);
            setIsError(true);
            Swal.fire({
                icon: 'error',
                title: 'Login Form',
                text: 'Email sudah terpakai.',
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
        <section className="body-font font-nunito w-screen h-auto">
        <div className="h-screen flex items-center justify-center">
                <div className="w-3/5">
                    <img
                        className="object-cover w-full h-full"
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
                    <div className="pt-6 my-2 px-16 text-font">
                        <p className='text-[32px] font-extrabold pt-4'>Daftar</p>
                        <p className='text-lg tracking-wide'>Silakan masukkan data anda</p>
                        <label htmlFor="name" className="block text-lg font-bold justify-center pt-2 pb-1">Nama Pengguna</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="name" className="bg-field w-[400px] h-[40px]  text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan nama pengguna" required></input>
                        <label htmlFor="email" className="block text-lg font-bold justify-center pt-2 pb-1">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="bg-field w-[400px] h-[40px]  text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan email" required></input>
                        <label htmlFor="password" className="block text-lg font-bold justify-center pt-2 pb-1">Kata Sandi</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="bg-field w-[400px] h-[40px]  text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Masukkan kata sandi" required></input>
                        <label htmlFor="cpassword" className="block text-lg font-bold justify-center pt-2 pb-1">Konfirmasi Kata Sandi</label>
                        <input type="password" value={confPasword} onChange={(e) => setConfPassword(e.target.value)} id="cpassword" className="bg-field w-[400px] h-[40px]  text-lg rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font" placeholder="Ulangi kata sandi" required></input>
                        <input id="terms" type="checkbox" checked={isCheckboxChecked} onChange={() => setCheckboxChecked(!isCheckboxChecked)} className="w-[17px] h-[17px] bg-field border border-font mt-4 " ></input>
                        <label htmlFor="terms" className="text-[16px] ml-2">Saya menerima ketentuan perjanjian</label>
                        
                        <button type="submit" onClick={handleRegister} className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-4 px-5 py-3 text-center text-font">Daftar</button>
                        <p className='text-[14px] font-medium pl-32 pt-4'>Sudah punya akun? <Link to="/login" className="text-font hover:text-font">Masuk</Link></p>

                        <div className='inline-flex'>
                            <hr className="border-[1px] border-[#808080] mt-6 w-[148px] ml-7" />
                            <p className='text-[14px] tracking-wider text-[#808080] mt-3 ml-4'>atau</p>
                            <hr className="border-[1px] border-[#808080] mt-6 w-[148px] ml-4" />
                        </div>

                        <div className="pl-[85px] justify-center pt-2 dark:bg-gray-800">
                            <button className="text-[14px] font-medium px-4 py-2 border flex gap-2 border-slate-300 shadow-xl dark:border-slate-700 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                            <span>Daftar menggunakan Google</span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </section>
        </>
    )
}

export default Register