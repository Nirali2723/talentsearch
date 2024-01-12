import React from 'react'
import Home from './Home';
import "./App.css"
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Hireartist from './Hireartist';
import Login from './Login';
import Service from './Service';
// import Log from './Log'
import Tailwind from './Tailwind';
import About from './About';
import Signup from './Signup';
import Signup1 from "./Signup1";
import Signin from './Signin';
import Navbar1 from './Navbar1';
import "./Navbar.css";
import Logout1 from './Logout1';
import Contact from './Contact';
import Footer from './Footer';
import Stepper from "./Stepper";
import Swipper from './Swipper';
import Testimonial from './Testimonial';
import ArtistDashboard from './ArtistDashboard';
import ViewpostsA from './ViewpostsA';
// import ProgressBar from './Progressbar';
import Fixeddash from './Fixeddash';
import Fixeddash1 from './Fixeddash1';
import Admincont from './Admincont';

import Talentagency from './Talentagency';

import TAdialog from "./TAdialog";
import RecruiterDashboard from './RecruiterDashboard';
import RecruiterDash2 from './RecruiterDash2';
// import RecruiterDashp2 from './RecruiterDashp2';
import Recruiterpost1 from './Recruiterpost1';
// import "./ArtistDashboard";
import { PrivateRouteForArtist } from "./PrivateRouteForArtist";
import { PrivateRouteForRecruiter } from "./PrivateRouteForRecruiter";
import Rc1 from "./Rc1";
import Rc3 from "./Rc3";
import Ar2 from "./Ar2";
import ReappliedA from './ReappliedA';


import Folk2 from "./Hired/Folk2";
import Folk3 from "./Hired/Folk3";
import Folk4 from "./Hired/Folk4";
import Folk5 from "./Hired/Folk5";
import Folk6 from "./Hired/Folk6";
import Folk7 from "./Hired/Folk7";
import Folk8 from "./Hired/Folk8";

import Jazz1 from "./Hired/Jazz1";
import Jazz2 from "./Hired/Jazz2";
import Jazz3 from "./Hired/Jazz3";
import Jazz4 from "./Hired/Jazz4";
import Jazz5 from "./Hired/Jazz5";
import Jazz6 from "./Hired/Jazz6";
import Jazz7 from "./Hired/Jazz7";

import Sufi1 from "./Hired/Sufi1";
// import Sufi2 from "./Hired/Sufi2";
import Sufi3 from "./Hired/Sufi3";
import Sufi4 from "./Hired/Sufi4";
import Sufi5 from "./Hired/Sufi5";
import Sufi6 from "./Hired/Sufi6";
import Sufi7 from "./Hired/Sufi7";
import Sufi8 from "./Hired/Sufi8";

import Rock1 from "./Hired/Rock1";
import Rock2 from "./Hired/Rock2";
import Rock3 from "./Hired/Rock3";
import Rock4 from "./Hired/Rock4";
import Rock5 from "./Hired/Rock5";
import Rock6 from "./Hired/Rock6";
import Rock7 from "./Hired/Rock7";

import Rap1 from "./Hired/Rap1";
import Rap2 from "./Hired/Rap2";
import Rap3 from "./Hired/Rap3";
import Rap4 from "./Hired/Rap4";
import Rap5 from "./Hired/Rap5";
import Rap6 from "./Hired/Rap6";
import Rap7 from "./Hired/Rap7";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
     <Route path='/' element={<Home/>}></Route>    
       <Route path='/Hireartist' element={<Hireartist/>}> </Route>
      <Route path='/Login' element={<Login/>}> </Route>
      <Route path='/Service' element={<Service/>}> </Route>
      <Route path='/Signup' element={<Signup/>}></Route>            
      <Route path='/Tailwind' element={<Tailwind/>}></Route>
      <Route path='/About' element={<About/>}> </Route>
      <Route path='/Signin' element={<Signin/>}> </Route>
      <Route path='/Navbar1' element={<Navbar1/>}> </Route>
      <Route path='/Logout1' element={<Logout1/>}> </Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Footer' element={<Footer/>}></Route>
      <Route path='/Stepper' element={<Stepper/>}></Route>
      <Route path='/Swipper' element={<Swipper/>}></Route>
      <Route path='/Testimonial' element={<Testimonial/>}></Route>

      <Route path='/ViewpostsA' element={<ViewpostsA/>}></Route>
      <Route path='/Admincont' element={<Admincont/>}></Route>
      <Route path='/Talentagency' element={<Talentagency/>}></Route>
      <Route path='/ReappliedA' element={<ReappliedA/>}></Route>
     
    
      <Route path='/TAdialog' element={<TAdialog/>}></Route>

      <Route path='/Fixeddash' element={<Fixeddash/>}></Route>
      <Route path='/Fixeddash1' element={<Fixeddash1/>}></Route>
      <Route path='/RecruiterDashboard' element={<RecruiterDashboard/>}></Route>
      <Route path='/RecruiterDash2' element={<RecruiterDash2/>}></Route>
      {/* <Route path='/RecruiterDashp2' element={<RecruiterDashp2/>}></Route> */}
      <Route path='/Recruiterpost1' element={<Recruiterpost1/>}></Route>
      <Route path='/ArtistDashboard' element={<ArtistDashboard/>}></Route>
      <Route path='/Rc1' element={<Rc1/>}></Route>
      <Route path='/Rc3' element={<Rc3/>}></Route>
      <Route path='/Ar2' element={<Ar2/>}></Route>


      <Route
            path="/recruiter_dashboard"
            element={
              <PrivateRouteForRecruiter>
                <RecruiterDashboard />
              </PrivateRouteForRecruiter>
            }
          />
          <Route
            path="/artist_dashboard"
            element={
              <PrivateRouteForArtist>
                <ArtistDashboard />
              </PrivateRouteForArtist>
            }
          />


      <Route path='/Signup1' element={<Signup1/>}></Route>

      <Route path="/Folk2" element={<Folk2 />}></Route>
          <Route path="/Folk3" element={<Folk3 />}></Route>
          <Route path="/Folk4" element={<Folk4 />}></Route>
          <Route path="/Folk5" element={<Folk5 />}></Route>
          <Route path="/Folk6" element={<Folk6 />}></Route>
          <Route path="/Folk7" element={<Folk7 />}></Route>
          <Route path="/Folk8" element={<Folk8 />}></Route>

          <Route path="/Jazz1" element={<Jazz1 />}></Route>
          <Route path="/Jazz2" element={<Jazz2 />}></Route>
          <Route path="/Jazz3" element={<Jazz3 />}></Route>
          <Route path="/Jazz4" element={<Jazz4 />}></Route>
          <Route path="/Jazz5" element={<Jazz5 />}></Route>
          <Route path="/Jazz6" element={<Jazz6 />}></Route>
          <Route path="/Jazz7" element={<Jazz7 />}></Route>

          <Route path="/Sufi1" element={<Sufi1 />}></Route>
          {/* <Route path="/Sufi2" element={<Sufi2 />}></Route> */}
          <Route path="/Sufi3" element={<Sufi3 />}></Route>
          <Route path="/Sufi4" element={<Sufi4 />}></Route>
          <Route path="/Sufi5" element={<Sufi5 />}></Route>
          <Route path="/Sufi6" element={<Sufi6 />}></Route>
          <Route path="/Sufi7" element={<Sufi7 />}></Route>
          <Route path="/Sufi8" element={<Sufi8 />}></Route>

          <Route path="/Rock1" element={<Rock1 />}></Route>
          <Route path="/Rock2" element={<Rock2 />}></Route>
          <Route path="/Rock3" element={<Rock3 />}></Route>
          <Route path="/Rock4" element={<Rock4 />}></Route>
          <Route path="/Rock5" element={<Rock5 />}></Route>
          <Route path="/Rock6" element={<Rock6 />}></Route>
          <Route path="/Rock7" element={<Rock7 />}></Route>

          <Route path="/Rap1" element={<Rap1 />}></Route>
          <Route path="/Rap2" element={<Rap2 />}></Route>
          <Route path="/Rap3" element={<Rap3 />}></Route>
          <Route path="/Rap4" element={<Rap4 />}></Route>
          <Route path="/Rap5" element={<Rap5 />}></Route>
          <Route path="/Rap6" element={<Rap6 />}></Route>
          <Route path="/Rap7" element={<Rap7 />}></Route>

      {/* <Route path='/Progressbar' element={<ProgressBar/>}></Route> */}
      </Routes>
      </BrowserRouter>

     
    </div>
  )
}

export default App;
