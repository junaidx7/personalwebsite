import { useEffect } from "react";
import Imagegrid4 from "./pieces/imagegrid4";
import accover from "./acc.png";
import HeaderProduct from "./header-product";
import Sidebar from "./pieces/sidebar";

import Title2col from "./pieces/Title-2col";
import ImageC from "./pieces/Image-constricted";
import TitlePara from "./pieces/Title-para";
import Role from "./pieces/role";
import BlockText from "./pieces/BlockText";
import TitleBulletin from "./pieces/TitleBulletin";
import Casestudy from "./pieces/casestudy";

import cover1 from "../Projects/imagesforprojects/hourglass/cover1.jpg";
import coverleft from "../Projects/imagesforprojects/hourglass/coverleft.jpg";
import coverright from "../Projects/imagesforprojects/hourglass/coverright.jpg";

import togglecompetitior from "../Projects/imagesforprojects/hourglass/togglecompetitior.jpg";
import clockifycompetitior from "../Projects/imagesforprojects/hourglass/clockifycompetitior.jpg";
import harvestcompetitior from "../Projects/imagesforprojects/hourglass/harvestcompetitior.jpg";

import cow1 from "../Projects/imagesforprojects/hourglass/cow1.jpg";
import cow2 from "../Projects/imagesforprojects/hourglass/cow2.jpg";
import cow3 from "../Projects/imagesforprojects/hourglass/cow3.jpg";
import cow4 from "../Projects/imagesforprojects/hourglass/cow4.jpg";
import ImageCexplanation from "./pieces/imageCexplanation";
import comptable from "../Projects/imagesforprojects/hourglass/competitiortable.jpg";
import empathymap from "../Projects/imagesforprojects/hourglass/empathymap.jpg";
import infoarc from "../Projects/imagesforprojects/hourglass/infoarc.jpg";
import hourglasshighfidelity from "../Projects/imagesforprojects/hourglass/hourglasshighfidelity.jpg";
const Hourglass = () => {
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
          title="What is hourglass"
          content="Hourglass is a software designed to help freelancers keep track of their billable hours and easily generate invoices from the tracked hours. it isn't just a tool; it's a trusted ally for freelancers, empowering them to focus on their craft while effortlessly managing the administrative aspects of their business."
        />

        <Role role="UI UX Designer" duration="2month" team="Hello " />

        <TitlePara
          heading="My Role"
          body="As the sole designer for this project i was involved in this project from start to end - this included performing required user research and designing. being a freelance project i also had to coordinate and talk directly with the client."
        />

        <TitlePara
          heading="Target Audience"
          body="Freelancers who mostly works alone, and have to do time keeping, billing and accounting all by themselves. "
        />

        <TitleBulletin
          heading="End goal"
          body="i find defining the end goal is very important when starting to research, this will help me narrow down the research."
          bulletin={[
            "Research and design a effortlessly simple web app that tracks task time via stopwatch and manual duration entry and also generate invoice by this entered duration.",
            "The user must also be able to see reports of the income, tracked duration to get a overview of their productivity and income.",
            "The user must be able to categorise task by project, client etc.",
          ]}
        />

        <TitlePara heading="Competitor Analysis" body=" " />

        <ImageC
          ImageC={togglecompetitior}
          alttext="Competitor Analysis for Toggletrack."
        />
        <ImageC
          ImageC={clockifycompetitior}
          alttext="Competitor Analysis for Clockify."
        />
        <ImageC
          ImageC={harvestcompetitior}
          alttext="Competitor Analysis for Harvest"
        />

        <ImageC
          ImageC={comptable}
          alttext="Features availability of competitors"
        />

        <TitleBulletin
          heading="Key Findings from Competitor Analysis"
          body=""
          bulletin={[
            "Most competitors were focused on creating software for organisations to track time but there were very little apps focusing solely on freelancer’s needs.",
            "Most softwares didn't have proper insights into the tracked hours except viewing the total and also the insights into the amount generated",
            "All of the softwares charged min $5 per month",
            "Invoicing is still relatively new and is either not available in the free version or feature isn't available",
            "All except everhour had cluttered UI, toggl had somewhat in the middle.",
          ]}
        />

        <TitlePara
          heading="The Purple Cow and Unique Features"
          body="In one of my favorite and popular books, 'Purple Cow' by Seth Godin, he explains that creating remarkable products that stand out in the marketplace involves being daringly different, providing unique value, and disrupting traditional norms to capture the attention and admiration of consumers. In most of the apps I design, I try to add functionalities to differentiate them from the market, giving users a reason to switch aside from addressing pain points."
        />

        <ImageCexplanation
          explanation="Timesheet as PDF along with invoice and the ability to email it together with the invoice"
          image={cow1}
        />

        <ImageCexplanation
          explanation="Link with dynamic timesheet that can be shared with the client. This link updates as the client works and can view project updates along with consumed budget."
          image={cow2}
        />

        <ImageCexplanation
          explanation="One-click to start timer (when in timer > projects)"
          image={cow3}
        />

        <ImageCexplanation
          explanation="To reduce clutter, an option has been added to make projects inactive. This allows for more space for active projects without overcrowding the list and table."
          image={cow4}
        />

        <TitlePara
          heading="Empathy Mapping"
          body="In an ideal world, the client would have an unlimited budget for conducting interviews and research for every aspect and feature of a project. This would allow for continuous design iteration and problem-solving. However, in this case, the client had a limited budget. Despite these constraints, I didn't want to skip this crucial step. Consequently, I had to explore alternative methods to map user empathy.As a freelancer who keeps track of billable hours, I took the initiative to input some of the information myself. I also utilized forums and an artificial intelligence tool called Gigabrain. This tool searches Reddit and other forums for authentic user reviews. In addition, I interviews some of my friends who worked freelance and kept track of billable hours. After investing significant time and effort, I was able to develop an empathy map. This helped me think from the user's perspective and develop a good wireframe."
        />

        <ImageC ImageC={empathymap} />

        <TitleBulletin
          heading="Finding Pain Points: Luring Users from the Competition"
          body="To break into an already competitive market, you need to provide reasons for customers to switch: something better and something extra. Identifying where competitors have failed and what users dislike about their software, and fixing it, is crucial. These points also make good advertising points to attract customers."
          bulletin={[
            "Offline sync issues: Most apps lack a force sync button, leaving users to rely on chance for cloud synchronization.",
            "Does not allow tracking when offline.",
            "Complex interface: None of the apps have an easy interface and have a steep learning curve, especially for non-tech-savvy users.",
            "Forgets to start or stop timer leading to loss in revenue or false timesheets.",
            "Tedious to use for tracking every activity.",
            "Privacy issues: Concerns regarding how user data, including task and project names, are used, and the inability to store data locally rather than on the cloud.",
            "Does not alert user when the timer overlaps: Considering a person works on one task at a time, this issue can be hard to identify unless represented visually on a calendar.",
            "Cannot add another time entry when the timer is running.",
            "Often forgets to start or stop a timer.",
            "Missing ability to charge a daily rate instead of hourly.",
            "Timer stops if the tab closes, except for Everhour where the timer keeps running.",
          ]}
        />

        <TitlePara
          heading="Information Architecture"
          body="Now that I had a solid idea of what the pain points are, I proceeded to refine the structure of the information architecture, organizing content in a logical and intuitive manner to improve navigation and usability for users. After a few rounds of trial and error, I put together the structure in a logical manner. However, this was yet to be tested."
        />

        <ImageC ImageC={infoarc} />

        <TitlePara
          heading="Wireframes"
          body="I prefer to create wireframes in shades of grey alone. Bare bone outlines need more cognitive thinking to differentiate, and I prefer the greys. This allows me to concentrate on functionality instead of getting caught up in aesthetics. I proceeded to create some rough wireframes; the plan was to do multiple rounds of iteration until I find and fix the minor problems."
        />

        <ImageC ImageC="https://pic.pnnet.dev/2000x1000" />

        <TitleBulletin
          heading="Iteration 2"
          body="After looking at the wireframes and analyzing page by page, I found several early design flaws. Iteration 2 was aimed at fixing them."
          bulletin={[
            "Optimized something 1",
            "Optimized something 2",
            "Optimized something 3",
          ]}
        />

        <ImageC ImageC="https://pic.pnnet.dev/2000x1000" />

        <TitlePara
          heading="High Fidelity Design"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lorem nec justo sollicitudin commodo. Fusce quis ex id justo molestie hendrerit. Sed ullamcorper lacinia sem, nec dapibus libero mollis vel. Cras sit amet tristique eros. Duis at sapien magna."
        />

        <ImageC ImageC={hourglasshighfidelity} />

        <TitleBulletin
          heading="Heuristic Evaluation"
          body="I find it better to perform heuristic evaluation on high fidelity designs rather than wireframes because high fidelity designs provide a more accurate representation of the final product, including visual elements, interactions, and layout, allowing for a more comprehensive assessment of the user experience and potential usability issues."
          bulletin={["Full Case study coming soon."]}
        />

        <div className="bottom-3xl"></div>
      </div>
    );
  };
  Hourglass: return (
    <section className="hourglass-section">
      <Casestudy
        casestudytitle="Hourglass: Timekeeping and invoicing made simple for freelancers."
        content={<Content />}
        coverimg={cover1}
        coverimgleft={coverleft}
        coverimgright={coverright}
      />
    </section>
  );
};

export default Hourglass;
