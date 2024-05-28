import { useEffect } from "react";
import accover from "./acc.png";
import BlockPara from "./pieces/BlockPara";
import Title2col from "./pieces/Title-2col";
import ImageC from "./pieces/Image-constricted";
import TitlePara from "./pieces/Title-para";
import Role from "./pieces/role";
import BlockText from "./pieces/BlockText";
import Quote from "./pieces/Quote";
import Casestudy from "./pieces/casestudy";
import TitleBulletin from "./pieces/TitleBulletin";
import cover from "../Projects/imagesforprojects/designsystem/cover.png";
import coverleft from "../Projects/imagesforprojects/designsystem/coverleft.jpg";
import coverright from "../Projects/imagesforprojects/designsystem/coverright.jpg";

import principles from "../Projects/imagesforprojects/designsystem/principles.jpg";
import designtokens from "../Projects/imagesforprojects/designsystem/designtokens.jpg";

import colors from "../Projects/imagesforprojects/designsystem/colors.jpg";

import grid from "../Projects/imagesforprojects/designsystem/grid.jpg";

import typography from "../Projects/imagesforprojects/designsystem/typography.jpg";
import quoteimg from "../Projects/imagesforprojects/Quote.svg";
import atomicsystem from "../Projects/imagesforprojects/designsystem/atomicsystem.jpg";

import designpreview from "../Projects/imagesforprojects/designsystem/designpreview.jpg";
import OtherCasestudy from "./pieces/OtherCasestudy";

const Designsystem = () => {
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
          title="What is N1?"
          content="N1, is a Design system that was build for developing consistent design for all ERP dashboards designed at nathan digital; it was build to be scalable, cohesive & efficient. The creation of the N1 design system became crucial for adapting to the growth the company and expanding digital projects. Not only did it make development more efficient, but it also accelerates the design process, ensuring the digital products to be consistent."
        />

        <Role
          role="Lead UI UX Designer"
          duration="1 month for v1.0"
          team="Add Target Audience"
        />

        <TitlePara
          heading="The need for building the design system"
          body="The decision to build the N1 design system stemmed from my initial experience in designing the first ERP without a standardised system. I encountered numerous inconsistencies in the user interface, causing a lack of cohesion and a weakened brand identity especially when the team grew in number. As Nathan digital company evolved, the necessity for a design system became even more evident. without a design system, maintaining a consistent look and feel across these diverse products would have been next to impossible, "
        />

        <Quote
          quote="In a study by Nielsen Norman Group, organisations reported up to a 75% increase in development efficiency with the use of design systems."
          quoteimg={quoteimg}
        />

        <BlockPara
          heading="Achievements"
          largetext="By comparing the time it took for team members to design a specific number of screens before and after the design system implementation, we witnessed a significant 23% reduction in design time. "
          body="The design system brought about a remarkable improvement in the consistency of our ERP products. By establishing a unified visual language and design principles, it ensured that every component and interface adhered to a cohesive style, reinforcing our brand identity."
          
        />

        <TitlePara
          overline="Being overwhelmed"
          heading="How to build a design system the right way?"
          body="I felt a bit lost at first not knowing where to start building a design system. i wanted to understand the core concepts first. I browsed through many articles and watched YouTube videos, but all of them only showed how to design the button, input fields and so on , but this was something i already knew. what i wanted to know was - what is the right way to build a design system and the big picture structure involved. "
        />

        <div className="crumbs ">
          <TitlePara
            overline="Research"
            heading=" the concept of Atomic design, "
            body="Discovery of a Gold Mine: After hours of scrolling i found a website called atomicdesign. This website, authored by Brad Frost, a design system consultant, turned out to be exactly what I needed. It wasn't just about designing components; it was about building a whole design system and understanding the core concepts. out of all the core concepts the atom-molecule and organism concept helped me have a bigger picture on how to build a scalable design system."
            link="https://www.google.com/search?q=atomic+design+by+brad+frost&oq=Atomic+Design+by+Brad+Frost&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyCAgDEAAYFhgeMggIBBAAGBYYHjIKCAUQABiABBiiBDIGCAYQRRg80gEHMTk5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
            linktext="atomicdesign.bradfrost"
          />

          <ImageC ImageC={atomicsystem} alttext="atomic concept by bradfrost" />
        </div>

        <div className="crumbs ">
          <TitlePara
            heading="Setting the principles"
            body="Every design system is build upon principles, they define the why and purpose of building design system. These principles guide decision-making and explain how the design system’s creators want team members to use the system. After several hours, numerous rounds of coffee, and multiple meetings, I refined these principles to encapsulate the essence of our approach & brand."
          />

          <ImageC
            ImageC={principles}
            alttext="Principles by which N1 was build"
          />
        </div>

        <div className="crumbs ">
          <TitlePara
            heading="Foundation"
            body="Since I initially designed without a design system, setting up the foundation was straightforward. I used a 12-column grid and a 4pt spacing system for more precise control and consistency. Figtree was used as font family and blue was the primary color to give the products more corporate feel. "
          />

          <ImageC ImageC={colors} alttext="primary and accent colors" />

          <ImageC ImageC={grid} alttext="12col grid system with 4pt grid" />

          <ImageC ImageC={typography} alttext="typescale" />
        </div>

        <div className="crumbs ">
          <TitleBulletin
            heading="Design Tokens"
            body="a 2 tier-ed token architecture was setup for N1 consisting of primary variables and semantic variables this was important for us to achieve,"
            bulletin={[
              "Consistency: Design tokens provided a single source of truth for design properties such as colors, typography, spacing, and more. This ensured consistency.",
              "Scalability: As N1 design systems grows and evolve, maintaining consistency would become increasingly challenging. Design tokens will provide a scalable solution by abstracting design properties into reusable, manageable tokens.",
              "Efficiency: By centralising design properties in tokens, designers and developers can work more efficiently.",
            ]}
          />

          

          <ImageC ImageC={designtokens} />
        </div>

        <div className="crumbs ">

        <TitlePara
          heading="Preview of Designs made from N1 design system"
          body="Clean and neat design made from N1 design system"
        />

        <ImageC ImageC={designpreview} />
        </div>
        

        <BlockPara
          heading="Impact on design."
          largetext="By comparing the time it took for team members to design a specific number of screens before and after the design system implementation, we witnessed a significant 23% reduction in design time. "
          body="The design system brought about a remarkable improvement in the consistency of our ERP products. By establishing a unified visual language and design principles, it ensured that every component and interface adhered to a cohesive style, reinforcing our brand identity."
          body1="The Reduction in design time not only highlighted the system's impact on efficiency but also underscored its practical value in streamlining our workflows. The design system not only fostered time savings but also translated into consistency and scalability, ultimately enhancing our overall project delivery process."
        />

        <OtherCasestudy />

        <div className="bottom-3xl"></div>
      </div>
    );
  };

  return (
    <section className="hourglass-section">
      <Casestudy
        casestudytitle="N1 : Scalable & Efficient Design system for ERPs."
        content={<Content />}
        coverimg={cover}
        coverimgleft={coverleft}
        coverimgright={coverright}
      />
    </section>
  );
};

export default Designsystem;
