import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import user from "../assets/img/user.png";
import { MdNavigateNext } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { resetState } from "../features/authSlice";
import axios from "axios";
import Swal from "sweetalert2";

function DailyNutrition() {
  useEffect(() => {
    getProfile();
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [umur, setUmur] = useState("");
  const [tb, setTB] = useState("");
  const [bb, setBB] = useState("");
  const [gender, setGender] = useState("");
  const [activity, setActivity] = useState("");
  const [avatar, setAvatar] = useState("");
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbohydrate, setCarbohydrate] = useState(0);
  const [fat, setFat] = useState(0);
  const [fiber, setFiber] = useState(0);
  const token = localStorage.getItem("access_token");
  const [apiProfile, setApiProfile] = useState(null);

  const handleLogout = async () => {
    navigate("/login");
    dispatch(resetState());
    localStorage.setItem("access_token", "");
  };
  const getProfile = async () => {
    try {
      const response = await axios.get(
        "https://api-recipein.xyzuan.my.id/api/profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const apiProfile = response.data.user;
      setId(apiProfile.id);
      setEmail(apiProfile.email);
      setUsername(
        apiProfile.username.charAt(0).toUpperCase() +
          apiProfile.username.slice(1)
      );
      setFirstname(apiProfile.first_name);
      setLastname(apiProfile.last_name);
      setUmur(apiProfile.age);
      setTB(apiProfile.height);
      setBB(apiProfile.weight);
      setGender(apiProfile.gender);
      setActivity(apiProfile.activity);
      setAvatar(apiProfile.avatar);
      setApiProfile(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (apiProfile) {
      const bmr =
        apiProfile.gender === "MALE"
          ? 66.5 +
            13.75 * apiProfile.weight +
            5.003 * apiProfile.height -
            6.75 * apiProfile.age
          : 665.1 +
            9.563 * apiProfile.weight +
            1.85 * apiProfile.height -
            4.676 * apiProfile.age;

      let calories;

      switch (apiProfile.activity) {
        case "LOW":
          calories = Math.round(bmr * 1.375);
          break;
        case "MEDIUM":
          calories = Math.round(bmr * 1.55);
          break;
        case "HIGH":
          calories = Math.round(bmr * 1.725);
          break;
        case "VERY_HIGH":
          calories = Math.round(bmr * 1.9);
          break;
        default:
          calories = 0;
      }

      const setProteinValue = Math.round(((15.0 / 100) * calories) / 4);
      const setCarbohydrateValue = Math.round(((65.0 / 100) * calories) / 4);
      const setFatValue = Math.round(((20.0 / 100) * calories) / 4);
      const setFiberValue = Math.round((calories / 1000) * 14);

      // Update state with the calculated values
      setCalories(calories);
      setProtein(setProteinValue);
      setCarbohydrate(setCarbohydrateValue);
      setFat(setFatValue);
      setFiber(setFiberValue);
    }
  }, [apiProfile]);

  const updateProfile = async () => {
    if (gender === "default") {
      Swal.fire({
        icon: "error",
        title: "Gagal Memperbarui Profile!",
        text: "Jenis kelamin yang anda pilih tidak valid",
        showConfirmButton: true,
      });
      return;
    } else {
      if (activity === "default") {
        Swal.fire({
          icon: "error",
          title: "Gagal Memperbarui Profile!",
          text: "Aktivitas yang anda pilih tidak valid.",
          showConfirmButton: true,
        });
        return;
      }
    }
    try {
      const response = await axios.put(
        "https://api-recipein.xyzuan.my.id/api/update-profile",
        {
          username: username,
          email: email,
          first_name: firstname,
          last_name: lastname,
          gender: gender,
          age: umur,
          height: tb,
          weight: bb,
          activity: activity,
          avatar: avatar,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      Swal.fire({
        icon: "success",
        title: "Berhasil Memperbarui Profile!",
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const postProfile = async () => {
    try {
      const response = await axios.post(
        "https://api-recipein.xyzuan.my.id/api/user-nutrition",
        {
          user_id: id,
          calories: calories,
          protein: protein,
          carbohydrate: carbohydrate,
          vitamin: 0,
          fiber: fiber,
          fat: fat,
        }
      );
      const profile = await axios.put(
        "https://api-recipein.xyzuan.my.id/api/update-profile",
        {
          username: username,
          email: email,
          first_name: firstname,
          last_name: lastname,
          gender: gender,
          age: umur,
          height: tb,
          weight: bb,
          activity: activity,
          avatar: avatar,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="body-font font-nunito w-screen h-full">
        <Navbar />
        <div className="flex justify-center items-center">
          <div className="flex justify-between mt-16 mb-[150px] px-8 space-x-8">
            <div className="w-[330px] h-[590px] bg-[#E6E6E6] rounded-[8px]">
              <div className="inline-flex mb-6">
                {apiProfile && (
                  <div>
                    {apiProfile.avatar ? (
                      <img
                        src={apiProfile.avatar}
                        className="w-[90px] h-[90px] rounded-full ml-8 mt-8"
                        alt="User Avatar"
                      />
                    ) : (
                      <img
                        src={user}
                        className="w-[90px] h-[90px] rounded-full ml-8 mt-8"
                        alt="User Avatar"
                      />
                    )}
                  </div>
                )}
                <div className="">
                  <p className="text-font font-extrabold text-[20px] mt-12 ml-4">
                    Hallo,
                  </p>
                  <p className="text-font font-extrabold text-[20px] ml-4">
                    {username}
                  </p>
                </div>
              </div>
              <hr className="border-[1px] border-[#979797] mb-4" />
              <div className="flex justify-center text-font text-[16px]">
                <ul className="ml-10">
                  <li className="bg-putih mt-4 rounded-[8px] shadow-lg w-[250px] h-[40px] inline-flex justify-between border-none">
                    <a
                      href="/myrecipe"
                      className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font"
                    >
                      Resep Ku
                    </a>
                    <MdNavigateNext
                      className="mt-2 mr-4"
                      fontSize="26px"
                      color="#111111"
                    />
                  </li>
                  <li className="bg-putih mt-4 rounded-[8px] shadow-lg w-[250px] h-[40px] inline-flex justify-between border-none">
                    <a
                      href="/favorite"
                      className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font"
                    >
                      Favorite
                    </a>
                    <MdNavigateNext
                      className="mt-2 mr-4"
                      fontSize="26px"
                      color="#111111"
                    />
                  </li>
                  <li className="bg-putih mt-4 rounded-[8px] shadow-lg w-[250px] h-[40px] inline-flex justify-between border-none">
                    <a
                      href="/dnutrition"
                      className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font"
                    >
                      Nutrisi Harian
                    </a>
                    <MdNavigateNext
                      className="mt-2 mr-4"
                      fontSize="26px"
                      color="#111111"
                    />
                  </li>
                  <li className="bg-putih mt-4 rounded-[8px] shadow-lg w-[250px] h-[40px] inline-flex justify-between border-none">
                    <a
                      href="/editprofile"
                      className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font"
                    >
                      Sunting Profile
                    </a>
                    <MdNavigateNext
                      className="mt-2 mr-4"
                      fontSize="26px"
                      color="#111111"
                    />
                  </li>
                  <li className="bg-putih mt-4 rounded-[8px] shadow-lg w-[250px] h-[40px] inline-flex justify-between border-none">
                    <a
                      href="/newpass"
                      className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font"
                    >
                      Ubah Kata Sandi
                    </a>
                    <MdNavigateNext
                      className="mt-2 mr-4"
                      fontSize="26px"
                      color="#111111"
                    />
                  </li>
                  <li className="bg-[#CE272C] mt-4 rounded-[8px] shadow-lg w-[250px] h-[40px] inline-flex justify-between border-none">
                    <a
                      href="/login"
                      className="ml-4 mt-2 w-[250px] h-[40px] text-font text-[18px] font-bold hover:text-font"
                      onClick={handleLogout}
                    >
                      Keluar
                    </a>
                    <MdNavigateNext
                      className="mt-2 mr-4"
                      fontSize="26px"
                      color="#111111"
                    />
                  </li>
                  <button
                    type="submit"
                    onClick={postProfile}
                    className="w-[156px] text-font bg-primary font-bold rounded-[4px] text-[16px] mt-6 px-1 py-2 text-center mx-12"
                  >
                    Simpan Perubahan
                  </button>
                </ul>
              </div>
            </div>

            <div className="w-[908px] h-[711px] bg-[#E6E6E6] mr-12 rounded-[8px]">
              <p className="text-font font-extrabold text-[24px] mt-4 ml-12 mb-4">
                Nutrisi Harian
              </p>
              <hr className="border-[1px] border-[#979797]" />
              <div className="ml-12 mt-8 inline-flex text-font">
                <div className="flex flex-col">
                  <label
                    htmlFor="cal"
                    className="block text-[18px] font-bold justify-center pb-2 tracking-wider"
                  >
                    Kalori
                  </label>
                  <input
                    type="text"
                    disabled
                    id="cal"
                    className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-black"
                    value={calories}
                    placeholder="0"
                    required
                  ></input>
                </div>
                <div className="flex flex-col ml-12">
                  <label
                    htmlFor="carb"
                    className="block text-[18px] font-bold justify-center pb-2 tracking-wider"
                  >
                    Karbo
                  </label>
                  <input
                    type="text"
                    disabled
                    id="carb"
                    className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-black"
                    value={carbohydrate}
                    placeholder="0"
                    required
                  ></input>
                </div>
                <div className="flex flex-col ml-12">
                  <label
                    htmlFor="fiber"
                    className="block text-[18px] font-bold justify-center pb-2 tracking-wider"
                  >
                    Serat
                  </label>
                  <input
                    type="text"
                    disabled
                    id="fiber"
                    className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-black"
                    value={fiber}
                    placeholder="0"
                    required
                  ></input>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <div className="flex flex-col">
                  <label
                    htmlFor="protein"
                    className="block text-[18px] font-bold justify-center pb-2 tracking-wider"
                  >
                    Protein
                  </label>
                  <input
                    type="text"
                    disabled
                    id="protein"
                    className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-black"
                    value={protein}
                    placeholder="0"
                    required
                  ></input>
                </div>
                <div className="flex flex-col ml-12">
                  <label
                    htmlFor="fat"
                    className="block text-[18px] font-bold justify-center pb-2 tracking-wider"
                  >
                    Lemak
                  </label>
                  <input
                    type="text"
                    disabled
                    id="fat"
                    className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font placeholder-black"
                    value={fat}
                    placeholder="0"
                    required
                  ></input>
                </div>
              </div>
              <p className="text-font font-extrabold text-[24px] mt-16 ml-12 mb-4">
                Isi Data Anda
              </p>
              <hr className="border-[1px] border-[#979797]" />
              <div className="ml-12 mt-8 inline-flex text-font">
                <div className="flex flex-col">
                  <label
                    htmlFor="age"
                    className="block text-[18px] font-bold justify-center pb-2 tracking-wider "
                  >
                    Umur
                  </label>
                  <input
                    type="text"
                    id="age"
                    className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font"
                    value={umur}
                    onChange={(e) => setUmur(e.target.value)}
                    placeholder="Tahun"
                    required
                  ></input>
                </div>
                <div className="flex flex-col ml-12">
                  <label
                    htmlFor="height"
                    className="block text-[18px] font-bold justify-center pb-2 tracking-wider"
                  >
                    Tinggi Badan
                  </label>
                  <input
                    type="text"
                    id="height"
                    className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font"
                    value={tb}
                    onChange={(e) => setTB(e.target.value)}
                    placeholder="Cm"
                    required
                  ></input>
                </div>
                <div className="flex flex-col ml-12">
                  <label
                    htmlFor="weight"
                    className="block text-[18px] font-bold justify-center pb-2 tracking-wider"
                  >
                    Berat Badan
                  </label>
                  <input
                    type="text"
                    id="weight"
                    className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-6 py-3 text-font"
                    value={bb}
                    onChange={(e) => setBB(e.target.value)}
                    placeholder="Kg"
                    required
                  ></input>
                </div>
              </div>
              <div className="ml-12 mt-8 inline-flex">
                <div className="flex flex-col">
                  <label
                    htmlFor="gender"
                    className="block text-[18px] font-bold justify-center pb-2 tracking-wider"
                  >
                    Jenis Kelamin
                  </label>
                  <select
                    type="text"
                    id="gender"
                    defaultValue="default"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-4 py-3 text-font"
                    required
                  >
                    <option value="default">Pilih Jenis Kelamin</option>
                    <option value="MALE">Laki-laki</option>
                    <option value="FEMALE">Perempuan</option>
                  </select>
                </div>
                <div className="flex flex-col ml-20">
                  <label
                    htmlFor="activity"
                    className="block text-[18px] font-bold justify-center pb-2 tracking-wider"
                  >
                    Aktivitas
                  </label>
                  <select
                    type="text"
                    id="activity"
                    defaultValue="default"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="bg-white w-[250] h-[47px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-4 py-3 text-font"
                    required
                  >
                    <option value="default">Pilih Aktivitas</option>
                    <option value="LOW">Aktivitas Ringan</option>
                    <option value="MEDIUM">Aktivitas Sedang</option>
                    <option value="HIGH">Aktivitas Berat</option>
                    <option value="VERY HIGH">Aktivitas Sangat Berat</option>
                  </select>
                </div>
                <div className="mt-11 ml-4">
                  <IoInformationCircle fontSize="25px" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default DailyNutrition;
