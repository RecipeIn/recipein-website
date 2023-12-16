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
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [isCheckboxChecked, setCheckboxChecked] = useState(false);

    useEffect(() => {
        if (isRegistered) {
          navigate('/login');
        }
      }, [isRegistered, navigate]);

    const handleRegister = async () => {
        try {
            // Validasi Input
            if (!username || !password || !isValidEmail(email) ) {
                setError('Harap isi semua kolom dengan benar.');
                return;
            }
            if ( password !== confPasword ) {
                setError('Password tidak sama dengan Konfirmasi Password');
                return;
            }
            if ( !isCheckboxChecked ) {
                setError('Anda belum menyetujui ketentuan perjanjian.');
                return;
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
        }   catch (error) {
            console.error('Error during register:', error.message);
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };

    return (
        <>
        <section className="body-font font-nunito w-screen h-auto">

        <div className='grid grid-cols-2'>
                <div className="relative -mr-28">
                    <img src={bg}className="w-[880px] h-screen"/>
                    <p className='text-[42px] font-extrabold absolute top-[300px] text-[#FFFEFE] ml-16'>Temukan, Masak, Nikmati</p>
                    <div className='inline-flex ml-16 absolute top-[355px]'>
                        <p className='text-[42px] font-extrabold text-[#FFFEFE]'>dengan</p>
                        <p className='text-[42px] font-extrabold text-primary ml-4'>RecipeIn</p>
                    </div>
                    <p className='w-[497px] text-[16px] text-putih absolute top-[435px] ml-16'>Ubah dapur Anda menjadi mahakarya kuliner! RecipeIn tujuan utama bagi para penggemar makanan!</p>
                </div>
                <div className='text-font ml-52'>
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
                    {error && <p className='text-error font-bold text-lg mt-4'>{error}</p>}
                    <button type="submit" onClick={handleRegister} className="w-[400px] bg-primary font-bold rounded-[16px] text-[20px] mt-8 px-5 py-3 text-center text-font">Daftar</button>
                    <p className='text-[14px] font-medium pl-32 pt-2'>Sudah punya akun? <Link to="/login" className="text-font hover:text-font">Masuk</Link></p>

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
        </section>
        </>
    )
}

export default Register