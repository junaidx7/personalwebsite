
import Imagegrid4 from "./imagegrid4";
import HeaderProduct from "../header-product";
import Sidebar from "./sidebar";


const Casestudy = ({ casestudytitle,content, coverimg,coverimgleft,coverimgright }) => {
  return (
    <section className="hourglass-section">
      <HeaderProduct></HeaderProduct>

      <div className="product-title-container">
        <h1 className="product-title  white w500 top-3xl bottom-3xl left-2xl ">
         {casestudytitle}
        </h1>
      </div>

      <div className="flexforsidebarandcontent">
        <Sidebar></Sidebar>

        <div className="project-content-section">
          <Imagegrid4
            imgcover={coverimg}
            halfleft={coverimgleft}
            halfright={coverimgright}
          />

          <div className="pieces-div-container">
            
            
                {content}
            
          </div>
          
        </div>
      </div>

      <div className="tobedelted">OTHER CASE STUDY</div>
    </section>
  );
};

export default Casestudy;
