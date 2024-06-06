import { Link } from "react-router-dom";
import bathselfie from "../Home/abtme-images/bathselfie.jpg"

import office from "../Home/abtme-images/office.webp"

import dubai from "../Home/abtme-images/dubai.jpg"
const Aboutme = () => {
  return (
    <section className="aboutme-section">
      <div className="grid12px">
        <img
          className="abtme-img1 grow-rotate-small "
          src={bathselfie}
          alt=""
        />

        <div className="abtme-p">
          <p className="md white" id="aboutme-title">
            Who is this dude.
          </p>

          <p className="md subtext">
            I am a generalist at heart, i got into product design because it
            allowed me to pursue my interest in creative, business and tech
            field. I’ve since worked on a range of problem for various industries including -
            finance, education, property, and social. i am looking
            for impactful, purposeful work with a diverse team of talented
            people.
          </p>
          <Link to="/Whoisthisdude" >
            <button className="top-lg aboutmebtn" >
              Get to know me and my interests
            </button>
          </Link>
        </div>
      </div>

      <div className="grid12px">
        <img
          className="abtme-img2 nointeraction"
          src={dubai}
          alt=""
        />

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
  );
};

export default Aboutme;
