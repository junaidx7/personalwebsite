import Imagegrid4 from "./imagegrid4";
import HeaderProduct from "../header-product";
import Sidebar from "./sidebar";
import OtherCasestudy from "./OtherCasestudy";
import { useEffect } from "react";

const Casestudy = ({
  casestudytitle,
  content,
  coverimg,
  coverimgleft,
  coverimgright,
}) => {

  useEffect(() => {
    const backToTop = document.getElementById('backToTop');
    const amountScrolled = 300;

    const handleScroll = () => {
      if (window.scrollY >= amountScrolled) {
        backToTop.style.display = 'block';
        backToTop.style.opacity = 1;
        backToTop.style.transition = 'opacity 0.2s';
      } else {
        backToTop.style.opacity = 0;
        backToTop.style.transition = 'opacity 0.2s';
        setTimeout(() => {
          if (backToTop.style.opacity == 0) {
            backToTop.style.display = 'none';
          }
        }, 200);
      }
    };

    const handleClick = (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', handleScroll);
    backToTop.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      backToTop.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <section className="hourglass-section">
      <HeaderProduct />

      <div className="product-title-container">
        <h1 className="product-title white w500 top-3xl bottom-3xl left-2xl">
          {casestudytitle}
        </h1>
      </div>

      <div className="flexforsidebarandcontent">
        <Sidebar />

        <div className="project-content-section">
          <Imagegrid4
            imgcover={coverimg}
            halfleft={coverimgleft}
            halfright={coverimgright}
          />

          <div className="pieces-div-container">{content}</div>
        </div>

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
      </div>

      <OtherCasestudy />
    </section>
  );
};

export default Casestudy;
