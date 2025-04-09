import { Link } from "react-router-dom";
import Config from "../../../../core/Config";

const HeaderProduct = () => {

  return (

    <header className="header-product">

      <Link to='/'> <h5 className="junaidheadersize  w500 grow-rotate  ">Junaid.</h5> </Link>



      <div className="header-product-links">
        <Link to='/'> <p className="md white w400 grow-rotate">Home</p>  </Link>
        <a href={Config.resumeLink}>  <p className="md white w400 grow-rotate">Resume</p> </a>
        <a href={Config.linkedinLink}>  <p className="md white w400 grow-rotate">Linkedin</p> </a>


      </div>

    </header>

  );
}

export default HeaderProduct;