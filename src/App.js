import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home';


function App() {
  return (
    <div>
      <Suspense fallback="null">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Blog />} />
      </Routes> 
    </Suspense>
          
    </div>
  );
}

export default App;
