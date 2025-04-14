import Hero from './Head/Hero';
import Precision from './Reveal/reveal';
import ProjectGrid from './ProjectGrid/projectGrid'
import { useEffect } from 'react';
import Aboutme from "./Aboutme/aboutme";



const Home = () => {






    return (
        <section>

            {/* <ThemeToggle></ThemeToggle>  */}
            <Hero></Hero>
            <ProjectGrid></ProjectGrid>
            <Precision></Precision>
            <Aboutme></Aboutme>

        </section>
    );
}

export default Home;