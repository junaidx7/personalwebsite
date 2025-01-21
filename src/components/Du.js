import { useEffect } from "react";
import cover from "../image/images-casestudy/menu/cover.jpg";


import TitlePara from "../piece-components/Title-para";
import BlockText from "../piece-components/BlockText";
import Casestudy from "../piece-components/casestudy";

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
