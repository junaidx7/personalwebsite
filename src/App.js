import './css/index.css';

import FooterModern from './components/footer-modern'
import Home from './components/Home/home'

import Demotextscale from './components/demotextscale'
import Accounting from './components/Projects/Accounting'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {



  return (

    <Router>


      <div className='master-wrapper'>

       

        <div className='wrapper' >

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/textscale" element={<Demotextscale />} />
            <Route path="/accounting" element={<Accounting />} />
          </Routes>


        </div>

        <FooterModern></FooterModern>

      </div>

    </Router>


  );
}

export default App;
