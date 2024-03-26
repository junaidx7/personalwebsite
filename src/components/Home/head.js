import { annotate, annotationGroup } from 'rough-notation';
import { useEffect } from 'react';
import prizigner from '../Home/prizigner.mp4'
import { Link } from 'react-router-dom';
import opendot from '../Home/opendot.svg'


const Head = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
            const a1 = annotate(document.querySelector('#e1'), { type: 'circle', color: '#FFCA59', iterations: 5 });
            const a2 = annotate(document.querySelector('#e2'), { type: 'highlight', color: '#936BFF', iterations: 1, multiline: true });
            const ag = annotationGroup([a1, a2]);
            ag.show();
        }, 2000); // 2000 milliseconds = 2 seconds

        return () => clearTimeout(timer);


    }, []);


    return (

        <section className="head-section section-gap" id="head2">


            <div className='maxwidth-container-withflex'>

                <div className='bigbox'>
                    <h1 className="bigtext "> <span id="e1" className='pop'>Junaid</span> designs<br />intuitive products.</h1>

                    <div className='tiltedvid'>
                        <video className='vidinside' src={prizigner} autoPlay muted loop></video>
                    </div>

                </div>




                <h4 className="lg subtext-under-bigtext" id="bio">
                    Hello, I am a <span id='e2'>  Lead UI UX designer based in dubai with 7yrs of experience</span>in crafting
                    user-centric web and mobile solutions across diverse industries.
                </h4>






                <div className="button-div">
                    <Link to="/textscale"> <button>Text Scale</button> </Link>


                    <a href="https://drive.google.com/file/d/19AODfKqacBF0SPcbvBt9XlzMNNoSCq-V/view?usp=sharing"
                        target="_blank"> <button>Resume</button> </a>


                    <a href="https://www.linkedin.com/in/uiuxdesignerjunaid/" target="_blank"> <button>Linkedin</button> </a>








                </div>






            </div>



        </section>
    );
}

export default Head;