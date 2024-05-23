import { Link } from "react-router-dom";
const Aboutme = () => {
  return (
    <section className="aboutme-section">
      <div className="grid12px">
        <img
          className="abtme-img1"
          src="https://cdn.sanity.io/images/s695h8ei/production/3918b184d189c2384e4f1e8ac53b3e9c718e830d-630x932.jpg?w=640&q=75&fit=clip&auto=format"
          alt=""
        />

        <div className="abtme-p">
          <p className="md white" id="aboutme-title">
            Who is this dude.
          </p>

          <p className="md subtext">
            We started out, just the two of us, in an East London basement
            studio back in 2015. Fast forward to today, we're a twenty-person
            team of designers, developers, project managers, copywriters and
            founders. Working from home, long before WFH was even a thing, we
            criss-cross timezones and collaborate across borders - mixing up
            work and play, every day.


       

          </p>
          <Link className="curse" to="/whoisthisdude">
              <button className="top-lg aboutmebtn">Get to know me and my interests</button>
            </Link>

        </div>
      </div>

      <div className="grid12px">
        <img
          className="abtme-img2"
          src="https://cdn.sanity.io/images/s695h8ei/production/8e4eb588d5d9d11477b88ec6bd1f2a2d3a220cd6-394x600.jpg?w=640&q=75&fit=clip&auto=format"
          alt=""
        />

        <img
          className="abtme-img3"
          src="https://cdn.sanity.io/images/s695h8ei/production/6e24a7868e860eee72176251472fdb85621a3ee0-1200x800.gif?w=640&q=75&fit=clip&auto=format"
          alt=""
        />

        <img
          className="abtme-img4"
          src=" https://cdn.sanity.io/images/s695h8ei/production/c0c5040ca9d5e7274468bf3767be49bc58cf4dd2-866x534.jpg?w=640&q=75&fit=clip&auto=format"
          alt=""
        />
      </div>
    </section>
  );
};

export default Aboutme;
