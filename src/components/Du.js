import { useEffect } from "react";
import cover from "../image/images-casestudy/du/dumaincover.jpg";


import TitlePara from "../piece-components/Title-para";
import BlockText from "../piece-components/BlockText";
import Casestudy from "../piece-components/casestudy";
import ContentBox from "./ContentBox";

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


        <ContentBox
          blockText="du is a major telecommunications provider in UAE. it offers a wide range of services. These include mobile services such as prepaid and postpaid plans, 5G services for faster connectivity, and international roaming packages. It also provides internet services like high-speed home broadband and Wi-Fi solutions for residential and business use. In addition, du delivers TV services, including IPTV with access to regional and international channels, as well as on-demand streaming and entertainment bundles."
        />

        <TitlePara
          heading="Customer Base and Target Audience"
          body="du serves nine million individual customers with its mobile, fixed line, broadband internet, and home services over its 4G LTE network. du also caters to over 100,000 UAE businesses with its vast range of ICT and managed services. Since its launch in 2007, du has many UAE firsts to its credit, including introduction of Pay by the Second® billing system, IPTV and self-service portal."
        />



        <TitlePara
          heading="My Role And Scope of Work"
          body="As a member of the Experience Design team at du, I contributed to the digital transformation of the du mobile application and website. My role involved translating business requirements into intuitive user experiences, enhancing the UI to improve both usability and aesthetics, conducting A/B testing to find the most optimal user flow, and actively participating in workshops and strategic discussions. "
        />


        <TitlePara
          heading="Comming soon..."
          body="Detailed work responsibilities will be written soon. This project is NDA-restricted, so extended details cannot be shared.  "
        />Í





        <div className="bottom-3xl"></div>
      </div>
    );
  };

  return (

    <section className="">

      <Casestudy
        casestudytitle="Du Telecom - Digtal Transformation"
        content={<Content />}
        coverimg={cover}
        coverimgleft={""}
        coverimgright={""}
      />
    </section>
  );
};

export default Du;
