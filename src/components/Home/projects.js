
import { useEffect } from 'react';
import arr from '../Home/arrow-svg.svg'
import { Link } from 'react-router-dom';

// Use myFunction wherever needed


const Projects = () => {


    useEffect(() => {


    }, []);


    return (

        <section className='project-sections'>





            <div className="maxwidth-container-withflex" id="project3">


                <h4>Selecteddd Work</h4>
                
                <Link to="/textscale"> <button>Text Scale</button> </Link>


                <div className="inter-component-spacing">

                    <div className="projects_main_div">


                        <Link to="/accounting" id="responsivelink-1" > 

                            <div className="project" id='pro1' data-tilt data-tilt-glare data-tilt-max-glare="0.8">

                            </div>

                            <div className='infobox'>
                                <p className="md project_title">Nathan Digital Accounting</p>
                                <img className='arr' src={arr} alt="" />
                            </div>

                        </Link>

                        <div id="responsivelink-2" href="/html/digital-menu.html">

                            <div className="project" id='pro2' data-tilt data-tilt-glare data-tilt-max-glare="0.8">



                            </div>

                            <div className='infobox'>
                                <p className="md project_title">Nathan Digital Accounting</p>
                                <img className='arr' src={arr} alt="" />
                            </div>

                        </div>

                        <div id="responsivelink-3" href="/html/design-system.html">


                            <div className="project" id='pro3' data-tilt data-tilt-glare data-tilt-max-glare="0.8">



                            </div>

                            <div className='infobox'>
                                <p className="md project_title">Nathan Digital Accounting</p>
                                <img className='arr' src={arr} alt="" />
                            </div>

                        </div>

                        <div id="responsivelink-4" href="">

                            <div className="project" id='pro4' data-tilt data-tilt-glare data-tilt-max-glare="0.8">


                            </div>

                            <div className='infobox'>
                                <p className="md project_title">Nathan Digital Accounting</p>
                                <img className='arr' src={arr} alt="" />
                            </div>

                        </div>


                    </div>


                </div>
            </div>

        </section>

    );
}

export default Projects
    ;