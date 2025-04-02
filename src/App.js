import './css/index.css';
import Home from './components/home'
import Demotextscale from './components/demotextscale'
import Accounting from './components/Accounting'
import Digitalmenu from './components/DigitalMenu'
import Designsystem from './components/Designsystem'
import Casestudy from './piece-components/casestudy'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Whoisthisdude from './components/Whoisthisdude';
import ScrollToTop from './Scrolltotop';
import Du from './components/Du';
import Footer from './components/Footer'
function App() {

  useEffect(() => {
    document.title = "Junaid Portfolio";
    document.documentElement.setAttribute("data-theme", 'light');

  }, []);

  return (

    <Router>


      <div className='master-wrapper'>
        <ScrollToTop />

        <div className='wrapper' >

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/textscale" element={<Demotextscale />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/Digitalmenu" element={<Digitalmenu />} />
            <Route path="/Designsystem" element={<Designsystem />} />
            <Route path="/Casestudy" element={<Casestudy />} />
            <Route path="/Whoisthisdude" element={<Whoisthisdude />} />
            <Route path="/Accounting" element={<Accounting />} />
            <Route path="/Du" element={<Du />} />


          </Routes>


        </div>


        <Footer></Footer>


        {/*  <FooterModern></FooterModern>   */}

      </div>

    </Router>


  );
}

export default App;
