import { useEffect } from "react";
import arr from "../Home/arrow-svg.svg";
import arrowSvg from "../Home/arrowcursor.svg";
import { Link } from "react-router-dom";

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
        <h4 className="mgb5">Selected Work</h4>

        <div className="grid-container">
          <div class="project grow-rotate">
            <Link className="curse" to="/accounting">
              <img
                class="project-imgbox"
                src="https://cdn.sanity.io/images/s695h8ei/production/a6ff57ad3962a9fdb8ba4884b38e773e0adbfc78-1340x1550.jpg?w=3840&q=75&fit=clip&auto=format"
                alt=""
              />

              <div className="infobox">
                <p className="lg project_title">Nathan Digital Accounting</p>
                <img className="arr" src={arr} alt="" />
              </div>
            </Link>
          </div>

          <div className="project project-margintop grow-rotate">
            <Link className="curse" to="/Digitalmenu">
              <img
                src="https://cdn.sanity.io/images/s695h8ei/production/055ddfc25472077275c59c6e1f97a910ef4225ed-868x1016.jpg?w=3840&q=75&fit=clip&auto=format"
                class="project-imgbox"
              ></img>

              <div className="infobox">
                <p className="lg project_title">
                  Digital menu : Paperless menu during pandamic
                </p>
                <img className="arr" src={arr} alt="" />
              </div>
            </Link>
          </div>

          <div className="project grow-rotate">
            <Link className="curse" to="/Designsystem">
              <img
                src="https://cdn.sanity.io/images/s695h8ei/production/afea08aef65a4771b568819f88e665983eedcf89-1338x1566.png?w=3840&q=75&fit=clip&auto=format"
                class="project-imgbox"
              ></img>

              <div className="infobox">
                <p className="lg project_title">
                  N1 : Design System for Suite of ERPs
                </p>
                <img className="arr" src={arr} alt="" />
              </div>
            </Link>
          </div>

          <div className="project project-margintop grow-rotate">
            <Link className="curse" to="/hourglass">
              <img
                src="https://cdn.sanity.io/images/s695h8ei/production/919b72913b03716bb9f8b1977903183cd4e8e504-868x1016.jpg?w=3840&q=75&fit=clip&auto=format"
                class="project-imgbox"
              ></img>

              <div className="infobox">
                <p className="lg project_title">
                  Hourglass: Hourly Billing Made Easy
                </p>
                <img className="arr" src={arr} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
