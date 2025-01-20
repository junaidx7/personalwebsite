import Head2 from '../Home/Head2';
import Precision from '../Home/precision';
import ProjectGrid from '../Home/projectGrid'
import Aboutme from '../Home/aboutme'
import { useEffect } from 'react';


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

            {/* <Projectstack></Projectstack> */}
            {/* <Skillsnew></Skillsnew> */}

        </section>
    );
}

export default Home;