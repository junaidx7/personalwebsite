import { Link } from "react-router-dom";
import Config from "./Config";

const HeaderProduct = () => {

  return (

    <header className="header-product">

      <Link to='/'> <p className="junaidheadersize  w600 grow-rotate  ">Junaid.</p> </Link>



      <div className="header-product-links">
        <Link to='/'> <p className="md white w400 grow-rotate">Home</p>  </Link>
        <a href={Config.resumeLink}>  <p className="md white w400 grow-rotate">Resume</p> </a>
        <a href={Config.linkedinLink}>  <p className="md white w400 grow-rotate">Linkedin</p> </a>


      </div>

    </header>

  );
}

export default HeaderProduct;