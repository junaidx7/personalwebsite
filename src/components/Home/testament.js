import { useEffect } from 'react';
import { annotate, annotationGroup } from 'rough-notation';
import video from '../video/mov.mp4';
import VideoSequence from '../../js/videosequence';

const Testament = () => {


    useEffect(() => {


        
        const a2 = annotate(document.querySelector('#testament-paragraph'), { type: 'underline',color:'yellow',iterations:1,multiline:true});
        
 
        const ag = annotationGroup([a2]);
        //ag.show();



        VideoSequence();



    }, []);



    return (

        <section id="testament-section" >
            <p id="testament-paragraph" className="animatedparagraph maxwidth-container">This portfolio serves as a testament to my ability to learn and create from the ground up.</p>

            <video id="v0" autobuffer="autobuffer" preload="preload" autoPlay="true" loop muted playsInline>

                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.

            </video>



        </section>


    );
}

export default Testament;