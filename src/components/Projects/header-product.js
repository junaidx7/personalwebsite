import { Link } from "react-router-dom";

const HeaderProduct = () => {

  return (

    <header className="header-product">

      <Link to='/'> <p className="md white w400 grow-rotate">Junaid</p> </Link>



      <div className="header-product-links">
        <a href="">  <p className="md white w400 grow-rotate">Resume</p> </a>
        <a href="">  <p className="md white w400 grow-rotate">Linkedin</p> </a>


      </div>

    </header>

  );
}

export default HeaderProduct;