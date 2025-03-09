import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Topnav from './components/Topnav';
import Herosection from './components/Herosection';
import Trust from './components/Trust';
import Explore from './components/Explore';
import Aboutregister from './components/Aboutregister';
import Chooseregister from './components/Chooseregister';
import Ourvideo from './components/Ourvideo';
import Make from './components/Make';
import Ourblog from './components/Ourblog';
import Faq from './components/Faq';
import Manageservice from './components/Manageservice';
import Number from './components/Number';
import Email from './components/Email';
import Logo from './components/Logo';
import Footer from './components/Footer';
import Clients from './components/Clients';
// import TestimonialCarousel from './components/TestimonialCarousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Topnav/>
  <Navbar/>
  <Herosection/>
  <Trust/>
  <Explore/>
  <Aboutregister/>
  <Chooseregister/>
  <Ourvideo/>
  <Clients/>
  <Make/>
  <Ourblog/>
  <Faq/>
  <Manageservice/>
  <Number/>
  <Email/>
  <Logo/>
  <Footer/>
  {/* <TestimonialCarousel/> */}
  </>
 
);


reportWebVitals();
