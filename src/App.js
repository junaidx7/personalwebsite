import './css/index.css';
import Head from './components/Home/head';
import Header from './components/Home/header';
import Projects from './components/Home/projects';
import Precision from './components/Home/precision';
import Testament from './components/Home/testament';
import See from './components/Home/see';
import FooterModern from './components/footer-modern'
import ProjectGrid from './components/Home/projectGrid'
import Aboutme from './components/Home/aboutme'

import { useEffect } from 'react';
import Skills from './components/Home/skills';



function App() {




  useEffect(() => {


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const wrapper = document.querySelector(".wrapper");
    if (window.scrollY + window.innerHeight > wrapper.offsetHeight) {
      document.body.classList.add("tight");
    } else {
      document.body.classList.remove("tight");
    }
  }




  return (


    <div className='master-wrapper'>

      <div className='wrapper' >

        <div id="blob"></div>
        <div id="blur"></div>

        <Head></Head>
      
      
        <ProjectGrid></ProjectGrid>
        <Precision></Precision>
       
        <Skills></Skills>
        <Aboutme></Aboutme>


      </div>

      <FooterModern></FooterModern>

    </div>


  );
}

export default App;
