import { Link } from "react-router-dom";

import hourglassimg from "../cover/hourglass.jpg";
import digitalmenucover from "../cover/digitalmenucover.jpg";
import designsystemcover from "../cover/designsystemcover.jpg";
import accountingcover from "../cover/accountingcover.jpg";

const OtherCasestudy = () => {
  return (
    <section className="othercasestudy-section">
      <hr></hr>
      <h5 className="bottom-xl w500">Other Projects</h5>
      <div className="othercasestudy-div">
        <Link to="/Digitalmenu">
          <div className="othercasestudy-container">
            <img
              src={digitalmenucover}
              className="othercasestudy-img grow-rotate"
            ></img>

            <div className="infobox-othercasestudy">
              <p className="sm project_title ">
                Digital menu : Paperless menu during pandamic
              </p>
            </div>
          </div>
        </Link>

        <Link to="/Hourglass">
          <div className="othercasestudy-container">
            <img
              src={hourglassimg}
              className="othercasestudy-img grow-rotate"
            ></img>

            <div className="infobox-othercasestudy">
              <p className="sm project_title ">
                Digital menu : Paperless menu during pandamic
              </p>
            </div>
          </div>
        </Link>

        <Link to="/Designsystem">
          <div className="othercasestudy-container">
            <img
              src={designsystemcover}
              className="othercasestudy-img grow-rotate"
            ></img>

            <div className="infobox-othercasestudy">
              <p className="sm project_title ">
                Digital menu : Paperless menu during pandamic
              </p>
            </div>
          </div>
        </Link>

        <Link to="/Accounting">
          <div className="othercasestudy-container">
            <img
              src={accountingcover}
              className="othercasestudy-img grow-rotate"
            ></img>

            <div className="infobox-othercasestudy">
              <p className="sm project_title ">
                Digital menu : Paperless menu during pandamic
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default OtherCasestudy;
