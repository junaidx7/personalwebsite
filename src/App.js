// React and Routing
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './Components/Pages/Home/Home';
import Demotextscale from './Components/Pages/TextScale/demotextscale';
import Accounting from './Components/Pages/Accounting/Accounting';
import Digitalmenu from './Components/Pages/DigitalMenu/DigitalMenu';
import Designsystem from './Components/Pages/N1/Designsystem';
import Whoisthisdude from './Components/Pages/Home/Aboutme/Whoisthisdude';
import Du from './Components/Pages/Du/Du';

// Components
import Footer from './Components/UI/Footer/Footer';

// Utilities
import ScrollToTop from './Scrolltotop';


// Styles
import './css/index.css';
function App() {

  useEffect(() => {


    window.addEventListener('scroll', handleScroll);









  }, []);

  function handleScroll() {
    const wrapper = document.querySelector(".wrapper");
    if (window.scrollY + window.innerHeight > wrapper.offsetHeight) {
      wrapper.classList.add("tight");
    }

    else {
      wrapper.classList.remove("tight");
    }


    // BACK TO PRESENTATION MODE
    document.body.addEventListener("click", function (event) {
      if (event.target.classList.contains("wrapper")) {
        const scrollPosition = wrapper.offsetHeight - window.innerHeight;
        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    });





  }


  return (

    <Router>

      <div className='master-wrapper'>
        <ScrollToTop />

        <div className='wrapper' >

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/textscale" element={<Demotextscale />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/digitalmenu" element={<Digitalmenu />} />
            <Route path="/designsystem" element={<Designsystem />} />
            {/* <Route path="/casestudy" element={<Casestudy />} /> */}
            <Route path="/whoisthisdude" element={<Whoisthisdude />} />
            <Route path="/du" element={<Du />} />

          </Routes>

        </div>

        <Footer></Footer>


      </div>

    </Router>


  );
}

export default App;
