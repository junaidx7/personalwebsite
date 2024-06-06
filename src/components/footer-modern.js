import arrow from "../image/arrow-svg.svg";
import letsmakeithappen from "../components/Home/Junaid.svg";
import { Link } from "react-router-dom";
import config from "./Projects/Config";
import EmailCopyButton from "./Home/Copybutton"

const FooterModern = () => {
  return (
    <div>
      <div className="footer-maxwidth-container-withflex bottom-2xl">
        <div className="contact-container">
          <div className="inner-contact-container" >

            <div className="getintouch-container">
              <h6 className="getintouch-title">Get in touch</h6>
              <div className="textandarrow">
                {" "}
                <p className="lg details-text">Junaid79x@gmail.com</p>{" "}
                <EmailCopyButton/>
              </div>
              <div className="textandarrow">
                {" "}
                <p className="lg details-text">00971 589-789-768</p>{" "}
               
              </div>
            </div>

            <div className="getintouch-container">
              <h6 className="getintouch-title">Get to know me</h6>
              <a href={config.resumeLink}>
                <div className="textandarrow">
                  {" "}
                  <p className="lg  details-text">Resume</p>{" "}
                  <img className="arrow" src={arrow} />{" "}
                </div>
              </a>
              <a href={config.linkedinLink}>
                {" "}
                <div className="textandarrow">
                  {" "}
                  <p className="lg  details-text">Linkedin</p>{" "}
                  <img className="arrow" src={arrow} />{" "}
                </div>
              </a>
            </div>
          </div>

          <img
            className="junaid-svg letsmakeithappen"
            src={letsmakeithappen}
            alt=""
          />
        </div>

        <div className="stickynote yellowSticky grow-rotate-small">
          <p className="md">Note to hiring Manager,</p>
          <p className="md">
            Everything in this portfolio— designing projects, writing case
            studies and coding this site was produced by my own hands. I never
            had formal education in code, but I learned to code in my free time
            so I could personally showcase my own capabilities and creativity. I
            have spent hours designing and coding this site to put my best foot
            forward and show that I can be, and strive to be the best. This site
            is still under improvement. If you think you like my work, please
            get in touch 🙂.
          </p>
        </div>


      </div>
    </div>
  );
};

export default FooterModern;
