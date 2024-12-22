import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed Form from react-router-dom
import Home from '../components/Home';
import AboutUs from '../components/about/AboutUs';
import CrimeReports from '../components/CrimeReports';
import CrimeResponces from '../components/CrimeResponces';
import { ReportDetails } from '../components/ReportDetails';
import EditReport from '../components/EditReport';
import AdminPanel from '../components/AdminPanel';
import AfterReport from '../pages/AfterReport';
import Form from '../components/Form'; 
import Signup from '../components/auth/Signup';
import Signin from '../components/auth/Signin';
import AfterRegister from '../pages/AfterRegister';
import AfterLogin from '../pages/AfterLogin';
import Contact from '../components/contact/Contact'
import CrimeCategoryGraph from '../components/CrimeCategoryGraph';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/contact' element={<Contact />} /> */}
      <Route path="/after-report" element={<AfterReport />} />
      <Route path="/after-register" element={<AfterRegister />} />
      <Route path="/after-login" element={<AfterLogin />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/crime-reports' element={<CrimeReports />} />
      <Route path='/crime-responses' element={<CrimeResponces />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/report-details/:id' element={<ReportDetails />} />
      <Route path='/edit-report/:id' element={<EditReport />} />
      <Route path='/admin' element={<AdminPanel />} />
      <Route path='/form' element={<Form />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Signin />} />
      <Route path='/crime-category/:category'element={<CrimeCategoryGraph />}/>
    </Routes>
  );
};

export default AllRoutes;
