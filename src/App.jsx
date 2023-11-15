import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'

function App() {

  return (
    <Routes>
      <Route index element={<Register />} /> 
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
  )
}

export default App
