import { useEffect } from "react";
import { Link } from "react-router-dom";
import ducover from "./cover/ducover.jpg";
import arrowSvg from "./projectgrid-img/arrowcursor.svg";
import digitalmenucover from "./cover/digitalmenucover.jpg";
import designsystemcover from "./cover/designsystemcover.jpg";
import accountingcover from "./cover/accountingcover.jpg";


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
    <section className="project-sections  section-gap " id="mamamia">


      <div className="maxwidth-container   ">



        <h2 className=" bottom-2xl  top-2xl">Selected work</h2>

        <div className="grid-container">

          <div className=" project grow-rotate even-spacing-project">
            <Link className="curse" to="/Du">

              <img src={ducover} class="project-imgbox"></img>

              <div className="infobox">
                <p className="lg project_title ">
                  Digital Transformation at du Telecom
                </p>
                {/* <img className="arr" src={arr} alt="" /> */}
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
                {/* <img className="arr" src={arr} alt="" /> */}
              </div>
            </Link>
          </div>



          <div className="project grow-rotate even-spacing-project">
            <Link className="curse" to="/Designsystem">
              <img src={designsystemcover} class="project-imgbox"></img>

              <div className="infobox">
                <p className="lg project_title">
                  N1 : Design System for Suite of ERPs
                </p>
                {/* <img className="arr" src={arr} alt="" /> */}
              </div>
            </Link>
          </div>

          <div className="project grow-rotate even-spacing-project project-margintop bottom-3xl">
            <Link className="curse" to="/Accounting">
              <img className="project-imgbox" src={accountingcover} alt="" />

              <div className="infobox">
                <p className="lg project_title ">
                  The accounting and tax software for the UAE market.
                </p>
                {/* <img className="arr" src={arr} alt="" /> */}
              </div>
            </Link>
          </div>
        </div>

      </div>



    </section>
  );
};

export default ProjectGrid;
