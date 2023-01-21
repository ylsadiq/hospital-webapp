import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import ForgetPassword from './Pages/Login/Login/ForgetPassword/ForgetPassword';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import Review from './Pages/Dashboard/Review';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/Login/RequireAdmin';
import AllTreatment from './Pages/AllTreatment/AllTreatment';
import Services from './Pages/Appointment/Services/Services';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor/ManageDoctor';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Doctors from './Pages/Doctors/Doctors';
import Menu from './Pages/Shared/Menu/Menu';
import Navbar from './Pages/Shared/Navbar';
import FooterCopyRight from './Pages/Shared/Footer/FooterCopyRight/FooterCopyRight';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Menu />
      <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bookingmodal" element={<AllTreatment />} />
          <Route path="/doctors" element={
            <RequireAuth>
              <Doctors />
            </RequireAuth>
          } />
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
        <Route path='addDoctors' element={<RequireAdmin> <AddDoctor /> </RequireAdmin>}></Route>
        <Route path='manageDoctors' element={<RequireAdmin> <ManageDoctor /> </RequireAdmin>}></Route>
      </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
      <FooterCopyRight />
      </BrowserRouter> 
    <ToastContainer />   
    </>
  );
}

export default App;