import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import Verification from './pages/Verification'
import NewPass from './pages/NewPass'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import DailyNutrition from './pages/DailyNutrition'
import Homepage from './pages/Homepage'
import Recipe from './pages/Recipe'
import Diet from './pages/Diet'
import PopularCategory from './pages/PopularCategory'
import ViewProfile from './pages/ViewProfile'
import DetailRecipe from './pages/DetailRecipe'
import AboutUs from './pages/AboutUs'


function App() {

  return (
    <Routes>
      <Route index element={<Homepage />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
      <Route path="/verif" element={<Verification />} />
      <Route path="/newpass" element={<NewPass />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit" element={<EditProfile />} />
      <Route path="/dnutrition" element={<DailyNutrition />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/diet" element={<Diet />} />
      <Route path="/pcategory" element={<PopularCategory />} />
      <Route path="/viewprofile" element={<ViewProfile />} />
      <Route path="/detail" element={<DetailRecipe />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  )
}

export default App
