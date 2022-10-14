import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';


function App() {
  return (
    <div>
      <Suspense fallback="null">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
      </Routes> 
    </Suspense>
          
    </div>
  );
}

export default App;
