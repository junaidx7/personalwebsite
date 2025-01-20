import { useEffect } from "react";
import cover from "../Projects/imagesforprojects/menu/cover.jpg";

import BlockPara from "./pieces/BlockPara";
import ImageC from "./pieces/Image-constricted";
import TitlePara from "./pieces/Title-para";
import BlockText from "./pieces/BlockText";
import TitleBulletin from "./pieces/TitleBulletin";
import Casestudy from "./pieces/casestudy";
import coverright from "../Projects/imagesforprojects/menu/coverright.jpg";
import coverleft from "../Projects/imagesforprojects/menu/cover2.jpg";
import telegrampoll from "../Projects/imagesforprojects/menu/telegrampoll.png";
import onlinemeet from "../Projects/imagesforprojects/menu/onlinemeet.jpg";
import overalllinsight from "../Projects/imagesforprojects/menu/overalllinsight.jpg";
import howyouorderillustration from "../Projects/imagesforprojects/menu/howyouorderillustration.jpg";
import userjourney from "../Projects/imagesforprojects/menu/userjourney.jpg";
import ImageCexplanation from "../Projects/pieces/imageCexplanation";
import earlydesignflaw1 from "../Projects/imagesforprojects/menu/earlyflaw1.jpg";
import earlydesignflaw2 from "../Projects/imagesforprojects/menu/earlyflaw2.jpg";
import earlydesignflaw4 from "../Projects/imagesforprojects/menu/earlyflaw4.jpg";
import earlydesignflaw5 from "../Projects/imagesforprojects/menu/earlyflaw5.jpg";
import font from "../Projects/imagesforprojects/menu/font.jpg";
import color from "../Projects/imagesforprojects/menu/color.jpg";
import OtherCasestudy from "./pieces/OtherCasestudy";
import obserresult from "../Projects/imagesforprojects/menu/obserresult.jpg"

const Du = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const wrapper = document.querySelector(".wrapper");
    if (window.scrollY + window.innerHeight > wrapper.offsetHeight) {
      document.body.classList.add("tight");
    } else {
      document.body.classList.remove("tight");
    }
  }

  const Content = () => {
    return (
      <div className="pieces-div">
        
        <BlockText
          title="What is Du?"
          content="DU is a major telecommunications provider in the United Arab Emirates (UAE), officially known as EITC. Operating under the brand name DU, it offers a wide range of services. These include mobile services such as prepaid and postpaid plans, 5G services for faster connectivity, and international roaming packages. It also provides internet services like high-speed home broadband (fiber-optic internet) and Wi-Fi solutions for residential and business use. In addition, DU delivers TV services, including IPTV with access to regional and international channels, as well as on-demand streaming and entertainment bundles."
        />
 
   

        <TitlePara
          heading="Who my work impacted"
          body="du serves nine million individual customers with its mobile, fixed line, broadband internet, and home services over its 4G LTE network. du also caters to over 100,000 UAE businesses with its vast range of ICT and managed services. Since its launch in 2007, du has many UAE firsts to its credit, including introduction of Pay by the Second® billing system, IPTV and self-service portal."
        />
        
        <TitlePara
          heading="My Role And Scope of Work"
          body="du serves nine million individual customers with its mobile, fixed line, broadband internet, and home services over its 4G LTE network. du also caters to over 100,000 UAE businesses with its vast range of ICT and managed services. Since its launch in 2007, du has many UAE firsts to its credit, including introduction of Pay by the Second® billing system, IPTV and self-service portal."
        />
        


        <OtherCasestudy />

        <div className="bottom-3xl"></div>
      </div>
    );
  };

  return (
    <section className="hourglass-section">
      <Casestudy
        casestudytitle="Features for du Mobile App and Web"
        content={<Content />}
        coverimg={"https://via.placeholder.com/2366x800"}
        coverimgleft={"https://via.placeholder.com/1178x800"}
        coverimgright={"https://via.placeholder.com/1178x800"}
      />
    </section>
  );
};

export default Du;
