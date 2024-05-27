import Title from "../Projects/pieces/Title";
import TitlePara from "../Projects/pieces/Title-para";
import Imagegrid4 from "../Projects/pieces/imagegrid4";
import Title2col from "../Projects/pieces/Title-2col";
import Role from "../Projects/pieces/role";
import Image from "../Projects/pieces/image";
import BlockText from "../Projects/pieces/BlockText";
import ImageC from "../Projects/pieces/Image-constricted";
import Sidebar from "../Projects/pieces/sidebar";
import { useEffect } from "react";
import HeaderBack from "../Home/header-back";
import { Link } from "react-router-dom";
import HeaderProduct from "../Projects/header-product";
import { accountingContent } from "../Projects/content";
import cover from "../Projects/imagesforprojects/ERP/accounting.jpg";

import preview from "../Projects/imagesforprojects/ERP/accounting.jpg";
import coverleft from "../Projects/imagesforprojects/ERP/coverleftjpg.jpg";
import coverright from "../Projects/imagesforprojects/hourglass/coverright.jpg";
import Casestudy from "./pieces/casestudy";
import NDA from "./pieces/NDA";
import TitleBulletin from "./pieces/TitleBulletin";
import designhf from "../Projects/imagesforprojects/ERP/designhf.jpg";
import OtherCasestudy from "./pieces/OtherCasestudy";

const Accounting = () => {
  const Content = () => {
    return (
      <div className="pieces-div">
        <BlockText
          title="Description"
          content="N1 Accounting is a cutting-edge accounting software that revolutionises accounting for businesses of all sizes.  its intuitive interface and powerful features, simplifies complex accounting tasks, allowing users to effortlessly track transactions, manage accounts receivable and accounts payable, generate comprehensive financial reports and more. "
        />

        <NDA></NDA>

        <Role
          title1="Role"
          sub1="UI UX Designer"
          title2="Industry"
          sub2="Finance & Accounting"
          title3="Tools"
          sub3="Figma, draw.io, Tseams"
          title4="Designed at"
          sub4="Nathan Digital"
        />

        <TitlePara
          heading="My Role and responsibilities"
          body="As the sole designer for the N1 Accounting software , I worked closely with stakeholders, and in-house accountants to understand the core requirement of the software and develop a design that was both user-friendly, intuitive, & efficient. I also collaborated closely with developers to ensure that my designs were feasible and implementable and also performed the visual QA for the front end to make sure everything developed was as per the design."
        />

        <TitleBulletin
          heading="Acheivements"
          bulletin={[
            "Became the second top selling software in the company.",
            "Avg 22.4% less time to do the same task than on competitor software when testing",
            "Achieved a 43% sales target within the first 3 months of launch.",
          ]}
        />

        <TitlePara
          heading="Research and design"
          body="The design of the N1 Accounting System was developed through careful research to make it user-friendly, efficient, and easy to use. I started by studying competitors to see what they offered and where they fell short. Then, I identified common problems users faced, like difficult navigation and poor reporting features. To create better flows and screens, I also learned accounting concepts, making sure the system met users' needs. I organized the system’s content for easy access, created wireframes to plan the layout, and designed the interface to be clear and simple. I tested the system with real users and made improvements based on their feedback. This thorough process ensured the N1 Accounting System exceeded user expectations, providing a smooth and effective accounting solution."
        />

        <TitlePara
          heading="Preview of few screens"
          body="As the sole designer for the N1 Accounting software , I worked closely with stakeholders, and in-house accountants to understand the core requirement of the software and develop a design that was both user-friendly, intuitive, & efficient. I also collaborated closely with developers to ensure that my designs were feasible and implementable and also performed the visual QA for the front end to make sure everything developed was as per the design."
        />

        <ImageC ImageC={designhf} />

        <OtherCasestudy />

        <div className="bottom-3xl"></div>
      </div>
    );
  };

  return (
    <section className="hourglass-section">
      <Casestudy
        casestudytitle="Smart simple online accounting for every business."
        content={<Content />}
        coverimg={cover}
        coverimgleft={coverleft}
        coverimgright={coverright}
      />
    </section>
  );
};

export default Accounting;
