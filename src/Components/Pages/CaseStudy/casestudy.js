
import Imagegrid4 from "./sub-components/Imagegrid4";
import HeaderProduct from "./sub-components/header-product";
import { useEffect } from "react";
import TitleBox from '../CaseStudy/sub-components/TitleBox/TitleBox';


const Casestudy = ({
  casestudytitle,
  casestudytitle2,
  content,
  coverimg,
  coverimgleft,
  coverimgright,
}) => {




  return (

    <section className="product-header-imagegrid-box    ">

      <HeaderProduct />

      <TitleBox projecttitle={casestudytitle} />


      <div className="pieces-div-coverimg bottom-2xl">

        <Imagegrid4
          imgcover={coverimg}
          halfleft={coverimgleft}
          halfright={coverimgright}
        />

      </div>

      <div className="pieces-div-text  bottom-2xl">
        <h1>{casestudytitle2}</h1>
      </div>

      <div className="pieces-div-container">{content}</div>


      <a
        href="#"
        id="backToTop"
        className="back-to-top"
        style={{ display: 'none' }}
      >
        <svg className="icon__arrow-up" viewBox="0 0 24 24">
          <title>Back to top</title>
          <path d="M18.71,11.71a1,1,0,0,1-1.42,0L13,7.41V19a1,1,0,0,1-2,0V7.41l-4.29,4.3a1,1,0,0,1-1.42-1.42l6-6a1,1,0,0,1,1.42,0l6,6A1,1,0,0,1,18.71,11.71Z" />
        </svg>
      </a>



    </section>
  );
};

export default Casestudy;
