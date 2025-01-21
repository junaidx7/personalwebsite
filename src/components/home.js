import Head2 from './Head2';
import Precision from './precision';
import ProjectGrid from './projectGrid'

import { useEffect } from 'react';
import Aboutme from "./aboutme"

const Home = () => {


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
        <section>
           
            <Head2></Head2>
            <ProjectGrid></ProjectGrid>
            <Precision></Precision> 
             <Aboutme></Aboutme>
         
            {/* <Skillsnew></Skillsnew> */}

        </section>
    );
}

export default Home;