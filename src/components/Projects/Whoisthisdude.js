import mypic from "../Projects/imagesforprojects/aboutme/mypic.jpg";
import HeaderProduct from "./header-product";

const Whoisthisdude = () => {
  return (
    <div> <HeaderProduct className></HeaderProduct>

    <section className="aboutme-whoisthisdude">

      <h2 className="top-2xl white">We started out, just the two of us, in an East London basement</h2>
       
      <div className="aboutme-div">
      <img className="mypic grow-rotate-reverse" src={mypic} alt="" />


        <div>
          
          <p className="md">Who dddis this dude.</p>

          <p className="md white aboutme-text">
            We started out, just the two of us, in an East London basement
            studio back in 2015. Fast forward to today, we're a twenty-person
            team of designers, developers, project managers, copywriters and
            founders. Working from home, long before WFH was even a thing, we
            criss-cross timezones and collaborate across borders - mixing up
            work and play, every day.
          </p>
        </div>
      </div>

      <div>
        <div>
          <p className="md" id="aboutme-title">
            Who is this dude.
          </p>

          <p className="md white mystrengthtext  ">
            We started out, just the two of us, in an East London basement
            studio back in 2015. Fast forward to today, we're a twenty-person
            team of designers, developers, project managers, copywriters and
            founders. Working from home, long before WFH was even a thing, we
            criss-cross timezones and collaborate across borders - mixing up
            work and play, every day.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Whoisthisdude;
