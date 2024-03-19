import arrow from '../image/arrow-svg.svg';
import letsmakeithappen from '../components/Home/Junaid.svg';
import opendot from './Home/opendot.svg'


const FooterModern = () => {

    return (

        <div>

            <div className='footer-maxwidth-container-withflex'>

            <div className='opentowork-div'>
                <img src={opendot} alt="" srcset="" />
                <p className="sm">open for work and relocation</p>
                
            </div>

                <div className="contact-container">

                    <div className="getintouch-container">
                        <h6 className='getintouch-title'>Get in touch</h6>
                        <div className="textandarrow"> <h6>Junaid79x@gmail.com</h6> <img className="arrow" src={arrow} /> </div>
                        <div className="textandarrow"> <h6>00971 589-789-768</h6> <img className="arrow" src={arrow} />  </div>
                    </div>

                    <div className="getintouch-container">
                        <h6 className='getintouch-title' >Get to know me</h6>
                        <a href="https://example.com"><div className="textandarrow"> <h6>Resume</h6> <img className="arrow" src={arrow} /> </div></a>
                        <a href="https://www.linkedin.com/in/uiuxdesignerjunaid/">  <div className="textandarrow"> <h6>Linkedin</h6> <img className="arrow" src={arrow} />  </div></a>

                    </div>

                </div>

                <img className='letsmakeithappen' src={letsmakeithappen} alt="" />

            </div>




        </div>);
}

export default FooterModern;