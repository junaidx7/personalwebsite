import { annotate, annotationGroup } from 'rough-notation';
import { useEffect } from 'react';

import duicon from "./head-img/duicon.png"
import openarrow from "./head-img/openarrow.svg"
import config from "../../../../Config"


const Hero = () => {




    useEffect(() => {

        const timer = setTimeout(() => {
            const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
            const a1 = annotate(document.querySelector('#e1'), { type: 'circle', color: '#0171E3', iterations: 4 });
          
            const a2 = annotate(document.querySelector('#e2'), { type: 'highlight', color: '#D2D2D7', iterations: 1, multiline: true });
            const ag = annotationGroup([a1, a2]);
            ag.show();
        }, 500); // 2000 milliseconds = 2 secondsFFCA59

        return () => clearTimeout(timer);

    }, []);


    return (

        <section className="head-section" id="head2">

            <div className='head-container '>


                <div className='bigbox2'>

                    <h1 className="bigtext "> <span id='e1'>Junaid</span>  designs<br />intuitive products</h1>

                </div>



                <h5 className="subtext-under-bigtext2" id="bio">
                    Hiya, I am a <span id='e2'>  Senior product designer based in dubai with 8 years of experience</span> in crafting
                    user-centric solutions across diverse industries.
                </h5>


                <div className='designing-for-container'>
                    <h5 className='subtext-under-bigtext2 currenlydesigningtext'> currently designing for</h5>
                    <img src={duicon} alt="Description" className='duiconbigbox' />

                    <a href={config.telecom}>
                        <h5 className='subtext-under-bigtext2  links'>telecom</h5>
                    </a>

                    <img className='openarrow' src={openarrow} alt="Description" />

                </div>







                <button onClick={() => window.open(config.resumeLink, '_blank')} >View Resume </button>


            </div>


        </section>
    );
}

export default Hero;