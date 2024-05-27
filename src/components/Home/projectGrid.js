import { useEffect } from "react";
import arr from "../Home/arrow-svg.svg";
import arrowSvg from "../Home/arrowcursor.svg";
import { Link } from "react-router-dom";

import hourglassimg from "../Projects/cover/hourglasscover.jpg";
import digitalmenucover from "../Projects/cover/digitalmenucover.jpg";

import designsystemcover from "../Projects/cover/designsystemcover.jpg";

import accountingcover from "../Projects/cover/accountingcover.jpg";

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
    <section className="project-sections section-gap" id="mamamia">
      <div className="maxwidth-container">
        <div>
          <h4 className=" bottom-2xl">Selected work</h4>

          <div className="grid-container">
            <div className="project grow-rotate">
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

            <div className="project grow-rotate project-margintop">
              <Link className="curse" to="/hourglass">
                <img src={hourglassimg} class="project-imgbox"></img>

                <div className="infobox">
                  <p className="lg project_title white">
                    Hourglass: Hourly Billing Made Easy
                  </p>
                  <img className="arr" src={arr} alt="" />
                </div>
              </Link>
            </div>

            <div className="project grow-rotate">
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

            <div className="project grow-rotate project-margintop">
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
