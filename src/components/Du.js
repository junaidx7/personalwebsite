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
          blockText="Du is a major telecommunications provider in UAE. it offers a wide range of services. These include mobile services such as prepaid and postpaid plans, internet services like high-speed home broadband and Wi-Fi solutions for residential and business use. In addition, du delivers TV services, including IPTV with access to regional and international channels, as well as on-demand streaming and entertainment bundles."
        />

        <ContentBox
          heading="My Role in — du digital transformation"
          body1="As a team member of Experience Design team at du, I contributed to the digital transformation of the du mobile application and website. My work involved translating business requirements into intuitive user experiences, enhancing the UI to improve both usability and aesthetics, conducting A/B testing to find the most optimal user flow, and actively participating in workshops and strategic discussions. "

        />



        <TitlePara
          heading="My Role in — du AI Suite"
          body="du AI Suite is a collection of AI-powered tools designed to enhance workflows and boost productivity for in-house developers and designers. I was responsible for designing multiple tools end-to-end. Due to the confidential nature of this project, more cannot be revealed here. feel free to reach out to learn more about my role in this project."
          ImageC={""}
        />


        <TitlePara
          heading="Non disclosure."
          body="I can't disclose further details about du project, but I'd be happy to discuss my role at du during an interview."
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
