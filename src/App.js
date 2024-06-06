import './css/index.css';

import FooterModern from './components/footer-modern'
import Home from './components/Home/home'
import Demotextscale from './components/demotextscale'
import Accounting from './components/Projects/Accounting'
import Digitalmenu from './components/Projects/DigitalMenu'
import Designsystem from './components/Projects/Designsystem'
import Casestudy from './components/Projects/pieces/casestudy'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hourglass from './components/Projects/Hourglass';
import { useEffect } from 'react';
import Whoisthisdude from './components/Projects/Whoisthisdude';
import OtherCasestudy from './components/Projects/pieces/OtherCasestudy'
import ScrollToTop from './Scrolltotop';

function App() {

  useEffect(() => {
    document.title = "Junaid Portfolio";
   
  }, []);

  return (

    <Router>


      <div className='master-wrapper'>
      <ScrollToTop />

        <div className='wrapper' >

          <Routes>
            

            <Route path="/" element={<Home />} />
            <Route path="/textscale" element={<Demotextscale />} />
            <Route path="/hourglass" element={<Hourglass />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/Digitalmenu" element={<Digitalmenu />} />
            <Route path="/Designsystem" element={<Designsystem />} />
            <Route path="/Casestudy" element={<Casestudy />} />
            <Route path="/Whoisthisdude" element={<Whoisthisdude />} />
            <Route path="/Accounting" element={<Accounting />} />
            <Route path="/OtherCasestudy" element={<OtherCasestudy />} />
        

          </Routes>


        </div>

        <FooterModern></FooterModern>

      </div>

    </Router>


  );
}

export default App;
