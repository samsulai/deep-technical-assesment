import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import RegisterPage from "scenes/registerPage"
import LoginPage from "scenes/loginPage"

import { useMemo } from "react";
import { useSelector } from "react-redux";



export default function App() {
	
  
  return (
    <div className="app">
      <BrowserRouter>
     
      <Routes>
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/" element={<LoginPage/>} />
      
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

