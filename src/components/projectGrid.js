import { useEffect } from "react";
import arr from "../image/images-home/arrow-svg.svg";
import arrowSvg from "../image/images-home/arrowcursor.svg";
import { Link } from "react-router-dom";


import ducover from "../image/images-home/cover/ducover.jpg";
import digitalmenucover from "../image/images-home/cover/digitalmenucover.jpg";
import designsystemcover from "../image/images-home/cover/designsystemcover.jpg";
import accountingcover from "../image/images-home/cover/accountingcover.jpg";


const ProjectGrid = () => {

  useEffect(() => {
    const projectDivs = document.querySelectorAll(".curse");
    const links = document.querySelectorAll(".curse a");
    const customCursor = `url(${arrowSvg}) 30 30, auto`;

    const handleMouseOver = (e) => {
      e.currentTarget.style.cursor = customCursor;
    };

    const handleMouseOut = (e) => {
      e.currentTarget.style.cursor = "default";
    };

    projectDivs.forEach((div) => {
      div.addEventListener("mouseover", handleMouseOver);
      div.addEventListener("mouseout", handleMouseOut);
    });

    links.forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      projectDivs.forEach((div) => {
        div.removeEventListener("mouseover", handleMouseOver);
        div.removeEventListener("mouseout", handleMouseOut);
      });

      links.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <section className="project-sections  section-gap" id="mamamia">


      <div className="maxwidth-container ">


        <div className="bottom-4xl">
          <h2 className=" bottom-2xl  top-3xl">Selected work</h2>

          <div className="grid-container">

            <div className=" project grow-rotate even-spacing-project">
              <Link className="curse" to="/Du">

                <img src={ducover} class="project-imgbox"></img>

                <div className="infobox">
                  <p className="lg project_title ">
                  du Telecom - Digtal Transformation
                  </p>
                  <img className="arr" src={arr} alt="" />
                </div>
              </Link>
            </div>




            <div className="project grow-rotate project-margintop even-spacing-project">
              <Link className="curse" to="/Digitalmenu">

                <img src={digitalmenucover} class="project-imgbox"></img>

                <div className="infobox">
                  <p className="lg project_title ">
                    Digital menu : Paperless menu during pandamic
                  </p>
                  <img className="arr" src={arr} alt="" />
                </div>
              </Link>
            </div>


            {/* <div className="project grow-rotate project-margintop even-spacing-project">
              <Link className="curse" to="/hourglass">
                <img src={hourglassimg} class="project-imgbox"></img>

                <div className="infobox">
                  <p className="lg project_title white">
                    Hourglass: Hourly Billing Made Easy
                  </p>
                  <img className="arr" src={arr} alt="" />
                </div>
              </Link>
            </div> */}

            <div className="project grow-rotate even-spacing-project">
              <Link className="curse" to="/Designsystem">
                <img src={designsystemcover} class="project-imgbox"></img>

                <div className="infobox">
                  <p className="lg project_title white">
                    N1 : Design System for Suite of ERPs
                  </p>
                  <img className="arr" src={arr} alt="" />
                </div>
              </Link>
            </div>

            <div className="project grow-rotate even-spacing-project project-margintop">
              <Link className="curse" to="/Accounting">
                <img className="project-imgbox" src={accountingcover} alt="" />

                <div className="infobox">
                  <p className="lg project_title ">
                    Accounting for every business
                  </p>
                  <img className="arr" src={arr} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
