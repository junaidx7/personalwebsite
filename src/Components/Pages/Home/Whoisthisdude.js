import mypic from "../../Pages/Aboutme/images-aboutme/mypic.jpg"
import HeaderProduct from "../../UI/Header/header";
import config from "../../../core/Config";
import { useEffect } from "react";



const Whoisthisdude = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const wrapper = document.querySelector(".wrapper");
    if (window.scrollY + window.innerHeight > wrapper.offsetHeight) {
      document.body.classList.add("tight");
    } else {
      document.body.classList.remove("tight");
    }
  }

  return (
    <div>
      {" "}
      <HeaderProduct className></HeaderProduct>
      <section className="aboutme-whoisthisdude ">
        <h2 className="top-3xl bottom-2xl white w500 realprimarylight">
          Hey, i'm Junaid, i currently live in Dubai.{" "}
          <span className="grey w500">
            {" "}
            I'm looking for impactful and purposeful work with a diverse team of
            talented people.
          </span>
        </h2>

        <div className="aboutme-div ">
          <img className="mypic grow-rotate-reverse " src={mypic} alt="" />

          <div>
            <p className="sm w400">Me outside work & my interests.</p>

            <p className="md white aboutme-text">
              Born and bought up in the tiny country of Kuwait, I grew up with a
              deep interest in anything tech, im the guy my friends call for
              tech support. You will find me friendly and easy to talk to,
              although i keep a small friends group i mingle with everyone
              easily.
            </p>
            <p className="md white aboutme-text top-md">
              when not working, you would find me watching thriller movies or
              spending time with friends.I am team coffee and my favourite show
              is 'the office'.
            </p>

            <p className="md white aboutme-text top-md">
              Idk why but i'm exceptionally talented at understanding physics
              and mathematics, although i decided not to purse that field for
              work, i enjoy the thrill of understanding Partial Differential
              Equations and Computational Fluid Dynamics. weird.
            </p>
          </div>
        </div>

        <div className="bottom-4xl">
          <div>
            {/* <p className="md bottom-md">
              Me as a Lead Designer, and my work history
            </p> */}

            {/* <p className="lg mystrengthtext subtextlight">
              I previously worked as a Lead Designer at Nathan Digital and
              designed ERPs and mobile apps. I had the chance to design for some
              prominent clients in dubai - like HRMS system for porsche middle
              east and IKEA. also ATS system for mumzworld etc.
            </p> */}

            <p className="md subtextlight mystrengthtext top-lg ">
              Since I’ve started working as a UI UX Designer 7 years ago, I‘ve
              become a well rounded designer who feels comfortable throughout
              the whole process of creating digital products from start to
              finish. i work with both web and mobile and few projects for
              physical product interfaces.I believe that good user experience
              come above everything and this is only possible with iterative
              design and good testing.
            </p>

            <div className="button-div top-2xl bottom-3xl">
              <a href={config.resumeLink} target="_blank">
                {" "}
                <button>Resume</button>{" "}
              </a>

              <a href={config.linkedinLink} target="_blank">
                {" "}
                <button>Linkedin</button>{" "}
              </a>

              <a href="/">
                <button>Home</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whoisthisdude;
