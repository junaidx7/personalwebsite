import Head from '../Home/head';
import Precision from '../Home/precision';
import Skills from '../Home/skills';
import ProjectGrid from '../Home/projectGrid'
import Aboutme from '../Home/aboutme'
import { useEffect } from 'react';

import Header from '../Home/header'
import Skillsnew from "../Home/Skillnew"
import Hiringmanager from "../Home/Hiringmanager"




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
           
            <Head></Head>
            <ProjectGrid></ProjectGrid>
            <Precision></Precision>
            <Skillsnew></Skillsnew>
            <Aboutme></Aboutme>
           

        </section>
    );
}

export default Home;