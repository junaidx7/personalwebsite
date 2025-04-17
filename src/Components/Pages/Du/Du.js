import { useEffect } from "react";
import cover from "../Du/images/dumaincover.jpg";
import Casestudy from "../CaseStudy/casestudy";
import ContentBox from "../CaseStudy/sub-components/ContentBox";
import Duai from "./du-ai/Duai";
import mergemind from "./images/du-ai-img.jpg"

const Du = () => {




  const Content = () => {
    return (
      <div >

        <div className="pieces-div">
          <ContentBox
            blockText="Du is a major telecommunications provider in UAE. it offers a wide range of services. These include mobile services such as prepaid and postpaid plans, internet services like high-speed home broadband and Wi-Fi solutions for residential and business use. In addition, du delivers TV services, including IPTV with access to regional and international channels, as well as on-demand streaming and entertainment bundles."
          />

          <ContentBox
            heading="My Role in — du digital transformation"
            body1="As a team member of Experience Design team at du, I contributed to the digital transformation of the du mobile application and website. My work involved translating business requirements into intuitive user experiences, enhancing the UI to improve both usability and aesthetics, conducting A/B testing to find the most optimal user flow, and actively participating in workshops and strategic discussions. "
          />

          <ContentBox
            heading="My Role in — du AI Suite"
            body1="du AI Suite is a collection of AI-powered tools designed to enhance workflows and boost productivity for in-house developers and designers. I was responsible for designing multiple tools end-to-end. Due to the confidential nature of this project, more cannot be revealed here. feel free to reach out to learn more about my role in this project."
            ImageC={""}
          />

          <ContentBox
            heading="Non disclosure."
            body1=" Due to non disclosure nature of this project, I can't disclose further details about this project, but I'd be happy to discuss my role at du during an interview."

          />




        </div>



        <div className=" du-ai-section top-3xl ">

          <div className="pieces-div-text du-ai-contentbox-dark">


            <h4 id="section1" className="bottom-lg white">{"My Role in — du AI Suite"}</h4>

            <p className="md subtext-dark">{"du AI Suite is a collection of AI-powered tools designed to enhance workflows and boost productivity for in-house developers and designers. I was responsible for designing multiple tools end-to-end. Due to the confidential nature of this project, more cannot be revealed here. feel free to reach out to learn more about my role in this project."}</p>

          </div >

          <img className="du-ai-img" src={mergemind} />

        </div >





      </div>
    );
  };

  return (

    <section className="">

      <Casestudy
        casestudytitle="Digital transformation and AI for du telecom"

        content={<Content />}
        coverimg={cover}
        coverimgleft={""}
        coverimgright={""}
      />
    </section>
  );
};

export default Du;
