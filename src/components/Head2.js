import { annotate, annotationGroup } from 'rough-notation';
import { useEffect } from 'react';
import duicon from "../image/images-home/duicon.png"
import openarrow from "../image/images-home/openarrow.svg"
import polo2 from "../image/images-home/polo2.svg"
import polo4 from "../image/images-home/polo1.svg"
import Magnet from '../components/Magnet'
import config from "../components/Config"


const Head2 = () => {

    const handleRedirect = () => {
        window.location.href = '/';
    };

    const handleMouseEnter = () => {
        const targetDiv = document.querySelector('.Head2container'); // Select the specific div
        if (targetDiv) {
            targetDiv.style.background =
                'radial-gradient(52.56% 68.18% at 50.05% 100%, #D5CDF5 0%, #F7F4FF 100%)';

        }
    };

    const handleMouseLeave = () => {
        const targetDiv = document.querySelector('.Head2container');
        if (targetDiv) {
            targetDiv.style.background = ''; // Reset to default
        }
    };


    useEffect(() => {

        const timer = setTimeout(() => {
            const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
            const a1 = annotate(document.querySelector('#e1'), { type: 'circle', color: '#936BFF', iterations: 4 });
            const a2 = annotate(document.querySelector('#e2'), { type: 'highlight', color: '#FFCA59', iterations: 1, multiline: true });
            const ag = annotationGroup([a1, a2]);
            ag.show();
        }, 500); // 2000 milliseconds = 2 secondsFFCA59

        return () => clearTimeout(timer);

    }, []);


    return (

        <section className="head-section" id="head2">


            <div className='Head2container '>

                <div className='bigbox2'>

                    <h1 className="bigtext2 " style={{ fontFamily: '"Inter Tight", sans-serif', textAlign: "center" }}> <span id="e1" className='pop'>Junaid</span> designs<br />intuitive products</h1>

                </div>



                <h5 className="subtext-under-bigtext2" id="bio">
                    Hello, I am a <span id='e2'>  Senior Product Designer based in dubai with 7 years of experience</span> in crafting
                    user-centric web and mobile solutions across diverse industries and others.
                </h5>


                <div className='designingfordiv'>
                    <h5 className='subtext-under-bigtext2 currenlydesigningtext'> Currently designing for</h5>
                    <img src={duicon} alt="Description" className='duiconbigbox' />
                    <h5 className='subtext-under-bigtext2 telecomtext'>telecom</h5>
                    <img className='openarrow' src={openarrow} alt="Description" />
                </div>



                {/* <img
                    className="poloroid1"
                    src={polo2}
                    alt="Decorative SVG"
                />
 */}


                {/* <img
                    className="poloroid4"
                    src={polo4}
                    alt="Decorative SVG"
                /> */}



                <Magnet padding={200} disabled={false} magnetStrength={10}>

                    <button
                        onClick={() => window.open(config.resumeLink, '_blank')}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >View Resume </button>

                </Magnet>




            </div>








        </section>
    );
}

export default Head2;