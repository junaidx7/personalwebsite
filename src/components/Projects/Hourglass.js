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
        <BlockText
          title="What is hourglass"
          content="Hourglass is a software designed to help freelancers keep track of their billable hours and easily generate invoices from the tracked hours. it isn't just a tool; it's a trusted ally for freelancers, empowering them to focus on their craft while effortlessly managing the administrative aspects of their business."
        />



        <TitlePara
          heading="My Role"
          body="As the sole designer for this project i was involved in this project from start to end - this included performing required user research and designing. Being a freelance project i also had to coordinate and talk directly with the client."
        />

        <TitlePara
          heading="Target Audience"
          body="Freelancers who mostly works alone, and have to do time keeping, billing and accounting all by themselves. "
        />

        <TitleBulletin
          heading="End goal"
          body="I find defining the end goal clearly very important when starting to research, this will help me narrow down the research. Here is the end goal of this project written down,"
          bulletin={[
            "Research and design an effortlessly simple web app that tracks task time via stopwatch and manual duration entry and also generate invoice by this entered duration.",
            "The user must also be able to see reports of the income and tracked duration to get a overview of their productivity and income.",
            "The user must be able to categorise task by project, client etc.",
          ]}
        />

        <div className="crumbs ">
          <TitlePara
            overline="Competitor Analysis"
            heading="Finding where we stand in the market,"
            body="To analyze Hourglass's position in the market, identify essential features to implement, and most importantly, understand the shortcomings of other software, I conducted a competitor analysis. This process highlighted the gaps in the market, allowing me to address the cons of other software and improve Hourglass's offerings."
          />

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
        </div>

        <TitleBulletin
          heading="Key Findings from Competitor Analysis"
          body=""
          bulletin={[
            "Most competitors were focused on creating software for organisations to track time but there were very little apps focusing solely on freelancer’s needs.",
            "Most softwares didn't have proper insights into the tracked hours except viewing the total hours and total income.",
            "All of the softwares charged atleast $5-$10 per user/month.",
            "Invoicing which is the core feature is still relatively new to most apps and is either not available in the free version or feature isn't available at all.",
            "All except everhour had cluttered UI, toggl had somewhat in the middle.",
            "Toggl Track is the most popular option mostly due to its availability on multiple platforms including smart watches.",
          ]}
        />

        <div className="crumbs ">
          <TitlePara
            heading="The Purple Cow and Unique Features"
            body="In one of my favorite and popular books, 'Purple Cow' by Seth Godin, he explains that creating remarkable products that stand out in the marketplace involves being daringly different, providing unique value, and disrupting traditional norms to capture the attention and admiration of consumers. "
            body1="In most of the apps I design, I try to add functionalities to differentiate them from the competitors, giving users a reason to switch aside from just addressing pain points. The features does not always have to be like reinventing the wheel, even something simple which would drastically improve the usability gets people to stick to the software rather than trying out once and and switching to others."
          />

          <ImageCexplanation
            title="Emailing timesheet along with invoice."
            explanation="The main point of any timekeeping software is to have the ability to send the tracked hours and the invoice to the client so the user can get paid for his time. Most apps allows sending invoice but does not have a feature to send the timesheet(sheet with list of time tracked and what task was done. Hourglass has filled in this gap."
            image={cow2}
          />

          <ImageC ImageC={cow4} />

          <ImageCexplanation
            title="transparency and dynamic link"
            explanation="One concern clients have when being billed hourly by freelancers is ensuring the freelancer stays within the allocated budget. Hourglass addresses this by allowing freelancers to send a dynamic link to the client, this link provides an updated list of tracked hours and task descriptions in real-time, this also helps the client know what work is being currently done rather than going through tedious meeting. This transparency builds trust and reassures clients that they are being charged accurately."
            image={cow5}
          />

          <ImageCexplanation
            title="One click to start tracking time"
            explanation="Hourglass offers a one-click timer start, unlike most apps that require entering a task name, description, and selecting a project before tracking time. When users are ready to work, they don’t want to deal with administrative tasks first. Hourglass tracks the time immediately and lets you add other details later. This is similar to having a short signup form for an app instead of asking users to fill out a lengthy form during registration."
            image={cow1}
          />

          <ImageCexplanation
            title="One click to start tracking"
            explanation="Freelancers often juggle multiple projects simultaneously, resulting in a cluttered list of both active and inactive tasks. This can make it difficult to quickly identify the projects they are currently working on. Hourglass offers advanced project management features that includes allowing users to mark projects as inactive. This helps streamline the project list, making it easier to focus on active tasks."
            image={cow3}
          />
        </div>

        <div className="crumbs ">
          <TitlePara
            overline="Empathy Mapping"
            heading="Allowing end user to influence design."
            body="I believe that when designing a products, it should always be designed for the end user and not for yourself, this means that not everything that the designer may assume or think is completely right. The end user should influence the design rather than the designer or stakeholders, for this we must hear the users problems and concerns and stand in their shoes."
            body1="I interviews my friends who worked freelance, talked to people online, browsed reddit and used ai tool called gigabrain (which analyses and searches forums from real user comments) to gather information. this allowed me to think from the end users perspective and stand in their shoes. As someone who works freelance occasionally and bills hourly, I took the initiative to input  my thoughts and concerns. "
            body2="After investing significant time and effort, I was able to develop an empathy map. This would help me think from the user's perspective and develop a good wireframe."
          />

          <ImageC ImageC={empathymap} />
        </div>

        <TitleBulletin
          overline="Finding Pain Points"
          heading="Luring Users from the Competition 101"
          body="To break into an already competitive market, you need to provide reasons for customers to switch: something better and something extra. Identifying where competitors have failed and what users dislike about competitors and fixing it is crucial. Oh and these points also make good advertising points to attract customers rather than advertising features that every other app have."
          bulletin={[
            "Offline sync issues: Most apps lack a force sync button, leaving users to rely on god and hope that their tracked time syncs with the cloud.",
            "Most does not allow tracking when offline.",
            "Complex interface: None of the apps have an easy interface and have a steep learning curve, especially for non-tech-savvy users.",
            "Forgets to start or stop timer leading to loss in revenue or false timesheets.",
            "Tedious to use for tracking every activity.",
            "Privacy issues: Concerns regarding how user data, including task and project names, are used, and the inability to store data locally rather than on the cloud.",
            "Does not alert user when the timer overlaps: Considering a person works on one task at a time, this issue can be hard to identify unless represented visually on a calendar.",
            "Cannot add another time entry when the timer is running.",
            "Users often forgets to start or stop a timer.",
            "Missing ability to charge a daily rate instead of hourly.",
            "Timer stops if the browser closes, the tab must always be open and timer does not run on cloud, in event of computer crashing and restarting the user loses all the hours tracked.",
          ]}
        />

        <div className="crumbs ">
          <TitlePara
            heading="Information Architecture"
            body="Now that I had a solid idea of what the pain points are, I proceeded to build a structure with the features planned, this step involved organzing features in a logical and intuitive manner to improve navigation and usability for users. After a few rounds of trial and error, I put together the structure in the most intuitive manner. since this was based on assumption and influence on other competitors apps, this was yet to be tested"
          />

          <ImageC ImageC={infoarc} />
        </div>

        <div className="crumbs ">
          <TitlePara
            heading="Wireframes"
            body="I started to draw out wireframes, I prefer to create wireframes in shades of grey. Using wireframing kits takes away the focus from creating functionality and more towards'aesthetics', hence i like to stick with boring greys, outlines and black for buttons. and I prefer the greys. This allows me to concentrate on functionality . I drew out multiple variations of the same functionality and did A/B testing to see which one was the most effective."
          />

          <ImageC ImageC={wireframe} />
        </div>

        <div className="crumbs ">
          <TitlePara
            heading="High Fidelity Design of MVP"
            body="Now that i had wireframes drawn out, and fixed some early design flaws. i started to do some clean design. since the project was a dashboard i used 12-column grid, 4pt grid system to design. Initially i used 8 but i realized using 4 gives me more control and helps me be more consistent with smaller gaps."
          />

          <ImageC ImageC={hourglasshighfidelity} />
        </div>

        <TitleBulletin
          heading="Heuristic Evaluation"
          body="I find it better to perform heuristic evaluation on high fidelity designs rather than wireframes because high fidelity designs provide a more accurate representation of the final product, including visual elements, interactions, and layout, allowing for a more comprehensive assessment of the user experience and potential usability issues."
          bulletin={["Full Case study coming soon."]}
        />

        <TitlePara
          heading="Impact and achievements."
          body="Beta version access was provided for free to people who participated in the interviews. They reported the software to be extremely simple and intuitive, also fixing many of their pain points especially adding the forced syncing button."
          body1="This software is currently undergoing development and testing, further impact and achievements will be added as the project progresses."
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
