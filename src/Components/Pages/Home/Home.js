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

            { /* <ThemeToggle></ThemeToggle> */}
            <Head2></Head2>
            {/* <Head3></Head3> */}
            <ProjectGrid></ProjectGrid>
            <Precision></Precision>
            <Aboutme></Aboutme>

        </section>
    );
}

export default Home;