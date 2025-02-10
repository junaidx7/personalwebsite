import { useEffect } from "react";
import cover from "../image/images-casestudy/menu/cover.jpg";

import restcover from "../image/images-casestudy/menu/restcover.jpg";
import BlockPara from "../piece-components/BlockPara";
import ImageC from "../piece-components/Image-constricted";
import TitlePara from "../piece-components/Title-para";
import BlockText from "../piece-components/BlockText";
import TitleBulletin from "../piece-components/TitleBulletin";
import Casestudy from "../piece-components/casestudy";
import coverright from "../image/images-casestudy/menu/coverright.jpg";
import coverleft from "../image/images-casestudy/menu/cover2.jpg";
import telegrampoll from "../image/images-casestudy/menu/telegrampoll.jpg";
import onlinemeet from "../image/images-casestudy/menu/onlinemeet.jpg";
import overalllinsight from "../image/images-casestudy/menu/overalllinsight.jpg";
import howyouorderillustration from "../image/images-casestudy/menu/howyouorderillustration.jpg";
import userjourney from "../image/images-casestudy/menu/userjourney.jpg";
import ImageCexplanation from "../piece-components/imageCexplanation";
import earlydesignflaw1 from "../image/images-casestudy/menu/earlyflaw1.jpg";
import earlydesignflaw2 from "../image/images-casestudy/menu/earlyflaw2.jpg";
import earlydesignflaw4 from "../image/images-casestudy/menu/earlyflaw4.jpg";
import earlydesignflaw5 from "../image/images-casestudy/menu/earlyflaw5.jpg";
import font from "../image/images-casestudy/menu/font.jpg";
import color from "../image/images-casestudy/menu/color.jpg";
import obserresult from "../image/images-casestudy/menu/obserresult.jpg"
import ContentBox from "../components/ContentBox";


const Digitalmenu = () => {
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
          blockText="Digital menu is a web app designed to replace the conventional paper menu in a restaurants during the pandemic as they apart from being dirty could also be affected by the corona virus."
        />

        <ContentBox

          heading="The truth about paper menus"
          body1="Menus are among the most unsanitary surfaces in a restaurant. The bacteria count on menus can be as high as 185,000 per square centimeter – far more than found on a toilet seat, according to a study published by Cleaning & Maintenance Management in 2014."
          body2="Upwards of 95% of people fail to properly wash their hands after restroom use, according to statistics. That makes handling a restaurant menu before eating a health gamble. After COVID-19 broke out menus apart from being dirty could now have the covid virus. This is why digital menu was not a want but a need."

        />

        <ContentBox
          heading="My Role"
          body1="As the sole designer for this project, my task was to design a web app to replace the paper menus, aiming to reduce the contact between restaurant staff and customers. i was involved in this project from 0→1 . To design this app successfully, I had to be involved in all phases from research to design, iteration and testing."
        />


        <ContentBox
          heading="Achievements"
          body1="Digital menu stands as one of the most impactful projects ive designed."
          bulletin={[
            "Helped provide a safer dining experience to hundreds of customers and potentially shielded them from the corona virus by minimising direct contact between customers and staff.",
            "Adoption of the digital menu concept by 14 other restaurants, showcasing its success, scalability and adaptability.",
            "After digital menu was implemented and advertised, the restaurant saw a unusual influx of customers : increase of 36.2% per day than daily avg as per the restaurant billing data.",
            "Positioned the project as a benchmark solution within nearby restaurants, influencing how eateries approached their menus and customer interactions.",
          ]}
        />

        <ContentBox
          heading="Primary Goal"
          body1=" My primary objective was to comprehend the fundamental challenges at a restaurant posed by the pandemic and devise a ‘digital menu’ solution that minimised direct interactions of customers with the restaurant staff. "
        />



        <ContentBox
          overline="Interviews and surveys"
          heading="Finding out why restaurant saw a dip in customers in the early phase of covid"
          body1="This app wasn't aimed at bring people out from their safe homes to the unsafe restaurants, but rather to keep safe the customers who were coming out to eat anyway. The reason the restaurant experienced a dip in number of customers was clearly because of the fear of the pandemic, but i wanted to learn what they feared - was it coming in contact with the staff? or the indoor experience? and how many felt this way."
          body2=" To understand this i conducted interviews with a few regular customer that agreed to volunteer, i also had detailed discussions with the restaurant staff to understand their issues and how we could minimize the contact between restaurant staff and customers. "
        // showborder={true}
        />
        {/* <ImageC ImageC={onlinemeet} alttext="just a image to keep things interesting" /> */}

        <ContentBox
          ImageC={telegrampoll}
          body5="Apart from conducting interviews, I also posted polls in Telegram groups to understand people's main concerns. My goal was to gather statistics on the top five fears people have about coming to the restaurant during this time."
          alttext="Image of telegram poll from one of the group out of several posted."
        // showborder={true}
        />



        <ContentBox
          ImageC={overalllinsight}
          alttext="Chart of reasons why people preferred not to come to the restaurant "
        />

        <ImageC
          ImageC={overalllinsight}
          alttext="Chart of reasons why people preferred not to come to the restaurant "
        />

        <ContentBox
          blockText="The interviews made it clear that customers feared coming in contact with the staff and touching surfaces the most. This lit a light bulb that there was indeed a gap in the market that was not filled. Restaurant with minimized contact with staff and properly sanitized would see a influx of customers, This later proved to be true. - See Achievements at end of case study"
        />


        <ContentBox
          overline="Observational Research"
          heading="How do you select food from a menu ?"
          body1="At the core the app was a menu and people had to order food with it. To understand how people interacted with a menu and ordered food from it i observed a few volunteered customers select the food they wanted, additionally i also encouraged them to vocalize their thoughts. the result from this would help me in improving app navigation and give me a rough idea on how to structure the app."
          body2="What i found out : the result was interesting, customers didn't look at the menus from page to page to find what they wanted, they skipped pages to reached the category directly and then analysed the food inside that specific category resulting.this helped me understand that category and cuisines should be the first thing to show to not annoy the customers."
          ImageC={howyouorderillustration}
          alttext="Illustration explaining how people select food from a menu"
        />

        <ContentBox
          ImageC={obserresult}
          body5="After i understood this concept, i implemented in design by giving the categories first on the home page under search, this would help user jump to exactly where they need without searching a list of all food."
        />


        <ContentBox
          overline="High level User Journey"
          heading="Getting the idea out of my brains"
          body1="After several rounds of iterations i came up with a userflow. this was the most logical but was yet to be tested. this would help me draw a few wireframes which would help me think clearer."
        />


        <ContentBox
          ImageC={userjourney}
          alttext="User journey of the app, after 3 iterations"
        />


        <ContentBox
          overline="Wire framing & Iterations."
          heading="Sketching, scribbling and wireframing with multiple iterations."
          body1="I initially drew a few sketches of the app. then started to improve each flows by iteration, i experimented each flows in multiple ways to acheive the same result to test which would have the best user experience. After several rounds of iterations i came up with a wireframe."
        />


        <ContentBox
          ImageC="https://pic.pnnet.dev/2000x1000"
          alttext="Early sketchs of the app."
        />

        <ContentBox
          overline="High Fidelity design"
          heading="Creating Pixel Perfect Designs"
          body1="I converted the wireframes to high fidelity design, I choose colors based on color psycology and that would match a restaurant related application. 8pt grid system and 3 column grid system were used."
        />

        <ContentBox
          ImageC={cover}
        />

        <ContentBox
          ImageC={font}
        />


        <ContentBox
          ImageC={color}
        />

        <ContentBox

          overline="Fixing Issues"
          heading="Fixing User Experience Issues"
          body1="I self tested the design to find some early design flaws, this iteration involed fixing these issues. some of the major flaws are mentioned below."

        />

        <ContentBox

          ImageC={earlydesignflaw1}
          alttext="Cannot call the waiter : before and after fixing the problem"
          body5="Missed the button to ping the waiter, this button would help ping the waiter asking for help or if the user gets stuck. The waiter would be notifed on his side of the application"
        />

        <ContentBox
          // title="Difficult navigating to order page."
          body5="After the user added a item to order and wants to confirm and place the order, the user must go to 'orders page' -  currently he had to go through multiple clicks to reach there. I realized with showing a floating button when the user adds first product to order the clicks was reduced from multiple to just one click"
          ImageC={earlydesignflaw2}
          alttext="before and after fixing the problem"

        />

        <ContentBox
          // title="Missing quantity button"
          body5="Added missing quantity button on the order page"
          ImageC={earlydesignflaw4}
          alttext="before and after fixing the problem"
        />

        <ContentBox
          //  title="Switching category from inside a category page"
          body5="After a user opens a category, switching to another category required going back, which disrupted the flow. To improve the experience, a way to switch categories was added at the end of every category page."
          ImageC={earlydesignflaw5}
          alttext="before and after fixing the problem"
        />


        <ContentBox
          heading="Achievements"
          body1="Digital menu stands as one of the most impactful projects ive designed."
          bulletin={[
            "Helped provide a safer dining experience to hundreds of customers and potentially shielded them from the corona virus by minimising direct contact between customers and staff.",
            "Adoption of the digital menu concept by 14 other restaurants, showcasing its success, scalability and adaptability.",
            "After digital menu was implemented and advertised, the restaurant saw a unusual influx of customers : increase of 36.2% per day than daily avg as per the restaurant billing data.",
            "Positioned the project as a benchmark solution within nearby restaurants, influencing how eateries approached their menus and customer interactions.",
          ]}
        />


        <div className="bottom-3xl"></div>
      </div>
    );
  };

  return (
    <section className="hourglass-section">
      <Casestudy
        casestudytitle="Digital Menu, Paperless menu to fight the pandemic."
        content={<Content />}
        coverimg={restcover}
        coverimgleft={coverleft}
        coverimgright={coverright}
      />
    </section>
  );
};

export default Digitalmenu;
