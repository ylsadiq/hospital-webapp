import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import ForgetPassword from './Pages/Login/Login/ForgetPassword/ForgetPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Menu from './Pages/Shared/Menu/Menu';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import Review from './Pages/Dashboard/Review';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/Login/RequireAdmin';


function App() {
  return (
    <div>
      <Suspense fallback="null">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/appointment" element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          } />
          <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
        <Route index element={<MyAppointment />}></Route>
        <Route path='review' element={<Review />}></Route>
        <Route path='users' element={<RequireAdmin> <AllUsers /> </RequireAdmin>}></Route>
      </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes> 
    </Suspense>
    <ToastContainer />   
    </div>
  );
}

export default App;
