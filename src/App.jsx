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
import SearchResult from './pages/SearchResult'
import AdvancedSearchResult from './pages/AdvancedSearchResult'
import MyRecipe from './pages/MyRecipe'
import Favorite from './pages/Favorite'
import Status from './pages/Status'
import AddRecipe from './pages/AddRecipe'
import EditRecipe from './pages/EditRecipe'


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
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/dnutrition" element={<DailyNutrition />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/diet" element={<Diet />} />
      <Route path="/pcategory" element={<PopularCategory />} />
      <Route path="/viewprofile" element={<ViewProfile />} />
      <Route path="/detail" element={<DetailRecipe />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/sresult" element={<SearchResult />} />
      <Route path="/saresult" element={<AdvancedSearchResult />} />
      <Route path="/myrecipe" element={<MyRecipe />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/status" element={<Status />} />
      <Route path="/addrecipe" element={<AddRecipe />} />
      <Route path="/editrecipe" element={<EditRecipe />} />
    </Routes>
  )
}

export default App
