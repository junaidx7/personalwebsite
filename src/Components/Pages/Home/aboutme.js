import { Link } from "react-router-dom";
import bathselfie from "./images-home/bathselfie.jpg"
import office from "./images-home/office.webp"


const Aboutme = () => {
  return (
    <div className="aboutme_bg ">
      <section className="aboutme-section">

        <div className="grid12px">
          <img
            className="abtme-img1 grow-rotate-small "
            src={bathselfie}
            alt=""
          />

          <div className="abtme-p">
            <h4 className="md bottom-lg" > Get to know me.  </h4>

            <p className="md subtext bottom-xl">
              I am a generalist at heart, i got into product design because it
              allowed me to pursue my interest in creative, business and tech
              field. I’ve since worked on a range of problem for various industries including -
              finance, education, property, and social. i am looking
              for impactful, purposeful work with a diverse team of talented
              people.
            </p>

            <Link to="/Whoisthisdude" >


              <button>Get to know me and my interests</button>




            </Link>
          </div>
        </div>

        <div className="grid12px">
          {/* <img
              className="abtme-img2 nointeraction"
              src={dubai}
              alt=""
            /> */}

          <img
            className="abtme-img3 nointeraction"
            src={office}
            alt=""
          />

          <img
            className="abtme-img4 grow-rotate-small nointeraction"
            src=" https://cdn.sanity.io/images/s695h8ei/production/c0c5040ca9d5e7274468bf3767be49bc58cf4dd2-866x534.jpg?w=640&q=75&fit=clip&auto=format"
            alt=""
          />
        </div>

      </section>
    </div>
  );
};

export default Aboutme;
