import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import DoctorRegPage from './Pages/DoctorRegPage';
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';
import About from './Components/HomePage/About';
import NurseRegpage from './Pages/NurseRegpage';
import PatientRegPage from './Pages/PatientRegPage';
import NurseHome from './Pages/Nurse/NurseHome';
import DoctorHome from './Pages/Doctor/DoctorHome';
import StaffRegPage from './Pages/StaffRegPage';
import StaffHome from './Pages/Staff/StaffHome';
import PatientView from './Pages/Doctor/PatientView';
import CheckUpdate from './Pages/Doctor/CheckUpdate';
import PatientExamine from './Pages/Nurse/PatientExamine';
import MedicalPage from './Pages/Staff/MedicalPage';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/view-register'  element={<Register/>}/>
      <Route path='/register/doctor' element={<DoctorRegPage/>}/>
      <Route path='/register/nurse' element={<NurseRegpage/>}/>
      <Route path='/register/patient' element={<PatientRegPage/>}/>
      <Route path='/register/staff' element={<StaffRegPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/nurse-home' element={<NurseHome/>}/>
      <Route path='/doctor-home' element={<DoctorHome/>}/>
      <Route path='/view-Patient' element={<PatientView/>}/>
      <Route path='/checkupdate' element={<CheckUpdate/>}/>
      <Route path='/patient-check' element={<PatientExamine/>}/>
      <Route path='/staff-home' element={<StaffHome/>}/>
      <Route path='/medical-equipment' element={<MedicalPage/>}/>
      


    </Routes>
    </BrowserRouter>
    </>
        
  );
}

export default App;
