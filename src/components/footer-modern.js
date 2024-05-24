import arrow from '../image/arrow-svg.svg';
import letsmakeithappen from '../components/Home/Junaid.svg';
import { Link } from 'react-router-dom';


const FooterModern = () => {

    return (

        <div>

            <div className='footer-maxwidth-container-withflex'>

            

                <div className="contact-container">

                    <div className="getintouch-container">
                        <h6 className='getintouch-title'>Get in touch</h6>
                        <div className="textandarrow"> <p className='lg details-text'>Junaid79x@gmail.com</p> <img className="arrow" src={arrow} /> </div>
                        <div className="textandarrow"> <p className='lg details-text'>00971 589-789-768</p> <img className="arrow" src={arrow} />  </div>
                    </div>

                    <div className="getintouch-container">
                        <h6 className='getintouch-title' >Get to know me</h6>
                        <a href="https://drive.google.com/file/d/19AODfKqacBF0SPcbvBt9XlzMNNoSCq-V/view?usp=sharing"><div className="textandarrow"> <p className='lg  details-text'>Resume</p> <img className="arrow" src={arrow} /> </div></a>
                        <a href="https://www.linkedin.com/in/uiuxdesignerjunaid/">  <div className="textandarrow"> <p className='lg  details-text'>Linkedin</p> <img className="arrow" src={arrow} />  </div></a>

                    </div>

                </div>

                <Link className='letsmakeithappen' to="/">   <img src={letsmakeithappen} alt="" /></Link>

             

            </div>




        </div>);
}

export default FooterModern;