
import cover from "./images/accounting.jpg";
import coverleft from "./images/coverleftjpg.jpg";
import coverright from "./images/erpcover.jpg";
import Casestudy from "../CaseStudy/casestudy";
import designhf from "./images/designhf.jpg";
import ContentBox from "../CaseStudy/sub-components/ContentBox";

const Accounting = () => {


  const Content = () => {
    return (
      <div className="pieces-div">

        <ContentBox
          blockText="N1 Accounting is a cutting-edge accounting software that revolutionises accounting for businesses of all sizes.  its intuitive interface and powerful features, simplifies complex accounting tasks, allowing users to effortlessly track transactions, manage accounts receivable and accounts payable, generate comprehensive financial reports and more."
        />


        <ContentBox
          heading="The need for building the design system"
          body1="The decision to build the N1 design system stemmed from my initial experience in designing the first ERP without a standardised system. I encountered numerous inconsistencies in the user interface, causing a lack of cohesion and a weakened brand identity especially when the team grew in number. As Nathan digital company evolved, the necessity for a design system became even more evident. without a design system, maintaining a consistent look and feel across these diverse products would have been next to impossible, "
        />


        <ContentBox
          heading="My Role and responsibilities"
          body1="As the sole designer for the N1 Accounting software , I worked closely with stakeholders, and in-house accountants to understand the core requirement of the software and develop a design that was both user-friendly, intuitive, & efficient. I also collaborated closely with developers to ensure that my designs were feasible and implementable and also performed the visual QA for the front end to make sure everything developed was as per the design."
        />





        <ContentBox
          heading="Research and design"
          body1="The design of the N1 Accounting System was developed through careful research to make it user-friendly, efficient, and easy to use. I started by studying competitors to see what they offered and where they fell short. Then, I identified common problems users faced, like difficult navigation and poor reporting features. To create better flows and screens, I also learned accounting concepts, making sure the system met users' needs. I organized the system’s content for easy access, created wireframes to plan the layout, and designed the interface to be clear and simple. I tested the system with real users and made improvements based on their feedback. This thorough process ensured the N1 Accounting System exceeded user expectations, providing a smooth and effective accounting solution."
        />

        <ContentBox
          heading="Non disclosure."
          body1=" Due to non disclosure nature of this project, I can't disclose further details about this project, but I'd be happy to discuss my role at du during an interview."
        />

        <ContentBox
          heading="Acheivements"
          bulletin={[
            "Became the second top selling software in the company.",
            "Avg 22.4% less time to do the same task than on competitor software when testing",
            "Achieved a 43% sales target within the first 3 months of launch.",
          ]}
        />


        {/* <ContentBox
          heading="Preview of few screens"
          ImageC={designhf} /> */}


        <div className="bottom-3xl"></div>
      </div>
    );
  };




  return (
    <section className="hourglass-section">
      <Casestudy
        casestudytitle="Accounting and EPRs for premium clients."
        content={<Content />}
        coverimg={cover}
      // coverimgleft={coverleft}
      // coverimgright={coverright}
      />


    </section>
  );

};

export default Accounting;
