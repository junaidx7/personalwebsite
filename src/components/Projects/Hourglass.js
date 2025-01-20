import { useEffect } from "react";
import ImageC from "./pieces/Image-constricted";
import TitlePara from "./pieces/Title-para";
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
import wireframe from "../Projects/imagesforprojects/hourglass/wireframes.jpg";
import OtherCasestudy from "./pieces/OtherCasestudy";
import cow5 from "../Projects/imagesforprojects/hourglass/cow5.jpg";

import invoiceblock from "../Projects/imagesforprojects/hourglass/invoiceblock.jpg";

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


        <TitlePara
          heading="Project Goal and Target Audience"
          body="This project targets independent freelancers—they could be in any field, creative industries like design, writing, photography, art, marketing etc. One problem they all have in common is managing their administrative tasks, such as time tracking, billing, and accounting."
          body1="At its core, the app will offer flexible time tracking through both a stopwatch function for real-time monitoring and manual entry for after-the-fact logging. This timing data will seamlessly feed into an automated invoice generation system, eliminating the need for manual calculations and reducing billing errors. To help freelancers understand their business performance, the app will provide comprehensive income and productivity reporting, offering insights into earnings patterns, peak productive hours, and project profitability. Users can organize their work through a robust categorization system, tagging tasks by project, client, and custom categories to maintain clear records and generate detailed reports. By focusing on these core features and delivering them through a clean, intuitive interface, the app will help freelancers reduce administrative overhead and focus more time on their actual work, ultimately improving their efficiency and earning potential." />


        <TitlePara
          heading="My Role"
          body="My Role was as a product designer ,as the sole designer, I led this project from concept to completion, conducting user research, developing design solutions, and iterating based on feedback. This role required me to manage all aspects of ux and design, communicate clearly with the clients, help navigate and set proper project goals."
        />



        <TitlePara
          heading="Finding where we stand in the market"
          body="To analyze Hourglass's position in the market, identify essential features to implement, and most importantly, understand the shortcomings of other software, I conducted a competitor analysis. This process highlighted the gaps in the market, allowing me to address the cons of other software and improve Hourglass's offerings. "
        />

        <TitlePara

          body="Key Finding: by performing competitor analysis , I discovered a significant gap in the market for freelancer-focused tools. While established players like Toggl Track dominate with multi-platform availability, most competitors target organizations rather than independent professionals. The analysis revealed that existing solutions fall short in several key areas: limited hour tracking insights beyond basic metrics, premium pricing starting at $5-10 per user/month, and restricted access to crucial features like invoicing in free tiers. This research highlighted an opportunity for Hourglass to differentiate itself with a freelancer-first approach, offering comprehensive analytics, integrated invoicing, and a clean, intuitive interface – addressing the cluttered UI issues prevalent among competitors while meeting the specific needs of independent professionals."
        />

        <TitlePara
          heading="The purple cow approach to remarkable product design"
          body="In one of my favorite books, 'Purple Cow' by Seth Godin, he explains that creating remarkable products that stand out in the marketplace involves being daringly different, providing unique value, and disrupting traditional norms to capture consumer attention. This software wont revent the wheel, so I focused on giving users compelling reasons to switch beyond just addressing pain points. The features don't always have to be revolutionary the wheel—even simple improvements that enhance usability can transform a one-time user into a loyal advocate."
        />

        <TitleBulletin
          heading="Acheivements"
          bulletin={[
            "Ability to email timesheet along with invoice.",
            "Real-time Hours and task visibility for Client",
            "Allowing end user to influence design.; Getting inputs",
          ]}
        />

        <TitleBulletin
          heading="Luring Users from the Competition 101"
          body="To break into an already competitive market, you need to provide reasons for customers to switch: something better and something extra. Identifying where competitors have failed and what users dislike about competitors and fixing it is crucial. Oh, and these points also make good advertising points to attract customers rather than advertising features that every other app has."
          bulletin={[
            "Offline sync issues: Most apps lack a force sync button, leaving users to rely on hope that their tracked time syncs with the cloud.",
            "Most do not allow tracking when offline.",
            "Complex interface: None of the apps have an easy interface and have a steep learning curve, especially for non-tech-savvy users.",
            "Forgets to start or stop timers, leading to loss in revenue or inaccurate timesheets.",
            "Tedious to use for tracking every activity.",
            "Privacy issues: Concerns about how user data, including task and project names, are used, and the inability to store data locally rather than on the cloud.",
            "Does not alert users when timers overlap, making it hard to identify conflicts unless visually represented on a calendar.",
            "Cannot add another time entry while the timer is running.",
            "Missing the ability to charge a daily rate instead of hourly.",
            "Timer stops if the browser closes; the tab must remain open, and timers do not run on the cloud. If the computer crashes, all tracked hours are lost.",
          ]}
        />

        <TitlePara
          heading="Making a list of Final Features List"
          body="After the competitor analysis i and getting inputs from users hearing pain points, i finalized the features and made a final compilation"
        />

        <TitlePara
          heading="Basic Sitemap; Creating the structure"
          body="Now that I had a solid idea of what the pain points are, I proceeded to build a structure with the features planned. This step involved organizing features in a logical and intuitive manner to improve navigation and usability for users. After a few rounds of trial and error, I put together the structure in the most intuitive manner. Since this was based on assumption and influence from other competitors' apps, this was yet to be tested."
          ImageC="https://via.placeholder.com/1440x700"
        />

        <TitlePara
          heading="Sketching and Wireframing"
          body="I started to draw out wireframes, I prefer to create wireframes in shades of grey. Using wireframing kits takes away the focus from creating functionality and more towards'aesthetics', hence i like to stick with boring greys, outlines and black for buttons. and I prefer the greys. This allows me to concentrate on functionality . I drew out multiple variations of the same functionality and did A/B testing to see which one was the most effective."
          ImageC="https://via.placeholder.com/1440x900"
        />


        <TitlePara
          heading="High Fidelity Design of MVP"
          body="Now that i had wireframes drawn out, and fixed some early design flaws. i started to do some clean design. since the project was a dashboard i used 12-column grid, 4pt grid system to design. Initially i used 8 but i realized using 4 gives me more control and helps me be more consistent with smaller gaps."
          ImageC="https://via.placeholder.com/1440x900"
        />

        <TitlePara
          heading="Impact and Acheivement"
          body="The beta version was offered for free to participants from the interviews, allowing them to test the software firsthand. Feedback highlighted its simplicity and intuitive design, with many users noting that it effectively addressed key pain points, such as the introduction of a much-requested forced sync button."
          body1="The software is still in development and undergoing rigorous testing. As the project progresses, additional features, improvements, and outcomes will be documented."
        />




        <OtherCasestudy />

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
