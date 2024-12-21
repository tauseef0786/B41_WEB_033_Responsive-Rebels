import React from 'react'
import {Routes,Route, Form} from 'react-router-dom';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import CrimeReports from '../components/CrimeReports';
import CrimeResponces from '../components/CrimeResponces';
import ContactUs from '../components/ContactUs';
import { ReportDetails } from '../components/ReportDetails';
import EditReport from '../components/EditReport';
import AdminPanel from '../components/AdminPanel';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/crime-reports' element={<CrimeReports/>}/>
      <Route path='/crime-responses' element={<CrimeResponces/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/report-details/:id' element={<ReportDetails/>}/>
      <Route path='/edit-report/:id' element={<EditReport />} />
      <Route path='/admin' element={<AdminPanel/>} />
      {/* Logoin and signup routes */}
      <Route path='/' element={<Home/>}/>
      
    </Routes>
  )
}

export default AllRoutes
