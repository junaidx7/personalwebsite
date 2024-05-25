import { useEffect } from "react";
import cover from "../Projects/imagesforprojects/menu/cover.jpg";
import BlockPara from "./pieces/BlockPara";
import ImageC from "./pieces/Image-constricted";
import TitlePara from "./pieces/Title-para";
import Role from "./pieces/role";
import BlockText from "./pieces/BlockText";
import TitleBulletin from "./pieces/TitleBulletin";
import Casestudy from "./pieces/casestudy";
import coverright from "../Projects/imagesforprojects/menu/coverright.jpg";
import coverleft from "../Projects/imagesforprojects/menu/coverleft.jpg";
import telegrampoll from "../Projects/imagesforprojects/menu/telegrampoll.png";
import onlinemeet from "../Projects/imagesforprojects/menu/onlinemeet.jpg";
import overalllinsight from "../Projects/imagesforprojects/menu/overalllinsight.jpg";
import howyouorderillustration from "../Projects/imagesforprojects/menu/howyouorderillustration.jpg";
import userjourney from "../Projects/imagesforprojects/menu/userjourney.jpg";
import ImageCexplanation from "../Projects/pieces/imageCexplanation";
import earlydesignflaw1 from "../Projects/imagesforprojects/menu/earlyflaw1.jpg";
import earlydesignflaw2 from "../Projects/imagesforprojects/menu/earlyflaw2.jpg";
import earlydesignflaw3 from "../Projects/imagesforprojects/menu/earlyflaw3.jpg";
import earlydesignflaw4 from "../Projects/imagesforprojects/menu/earlyflaw4.jpg";
import earlydesignflaw5 from "../Projects/imagesforprojects/menu/earlyflaw5.jpg";
import earlydesignflaw6 from "../Projects/imagesforprojects/menu/earlyflaw6.jpg";
import font from "../Projects/imagesforprojects/menu/font.jpg";
import color from "../Projects/imagesforprojects/menu/color.jpg";

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
        <BlockText
          title="What is Digital Menu"
          content="Digital menu is a web app to replace the conventional paper menu in a restaurants during the pandemic as they apart from being dirty could also be affected by the corona virus."
        />
        <Role
          role="UI UX Designer"
          duration="2month"
          team="Add Target Audience"
        />
        <BlockPara
          heading="The Truth About Paper Menus"
          largetext="Menus are among the most unsanitary surfaces in a restaurant. The bacteria count on menus can be as high as 185,000 per square centimeter – far more than found on a toilet seat, according to a study published by Cleaning & Maintenance Management in 2014."
          body="Upwards of 95% of people fail to properly wash their hands after restroom use, according to statistics. That makes handling a restaurant menu before eating a health gamble. After COVID-19 broke out menus apart from being dirty could now have the covid virus. This is why digital menu was not a want but a need."
        />
        <TitlePara
          heading="My Role"
          body="As the sole designer for this project, my task was to design an app to replace the paper menus, aiming to reduce the contact between restaurant staff and customers. i was involved in this project from 0→1 . To design this app successfully, I had to be involved in all phases from research to design, iteration and testing."
        />
        <TitleBulletin
          heading="Achievements"
          body="Digital menu stands as one of the most impactful projects ive designed."
          bulletin={[
            "Helped provide a safer dining experience to hundreds of customers and potentially shielded them from the corona virus by minimising direct contact between customers and staff.",
            "Adoption of the digital menu concept by 14 other restaurants, showcasing its success, scalability and adaptability.",
            "Positioned the project as a benchmark solution within nearby restaurants, influencing how eateries approached their menus and customer interactions.",
          ]}
        />
        <TitlePara
          heading="Primary Goal"
          body=" My primary objective was to comprehend the fundamental challenges posed by the pandemic and devise a ‘digital menu’ solution that minimised direct interactions of customers with the restaurant staff. my primary role were as follows."
        />
        <TitlePara
          heading="Finding out why restaurant saw a dip in customers in the early phase of covid: User Interviews and Surveys."
          body="This app wasn't aimed at bring people out from their safe homes to the unsafe restaurants, but rather to keep safe the customers who were coming out to eat anyway. The reason the number  of customers in the restaurant saw a dip was clearly because of the fear but i wanted to learn what they feared was it coming in contact with the staff? or the indoor experience? and how many felt this way.  "
        />
        <ImageC ImageC={onlinemeet} alttext="Perfoming Interviews" />
        <ImageC ImageC={telegrampoll} alttext="Telegram Poll" />
        <ImageC
          ImageC={overalllinsight}
          alttext="Chart of reasons why people preferred not to come to the restaurant "
        />
        <BlockPara largetext="The interviews made it clear that customers feared coming in contact with the staff and touching surfaces the most. hence showing that there was indeed a market for this project" />
        <TitlePara
          overline="Observational Research"
          heading={"How do you select food from a menu ?"}
          body="At the core the app was a menu and people had to order food with it. To understand how people interacted with a menu and ordered food from it i observed a few customers select the food they wanted, additionally i also encouraged them to vocalize their thoughts. the result from this would help me in improving app navigation and give me a rough idea on how to structure the app."
          body1="What i found out : the result was interesting, customers didn't look at the menus from page to page to find what they wanted, they skipped pages to reached the category directly and then analysed the food inside that specific category resulting.this helped me understand that category and cuisines should be the first thing to show to not annoy the customers."
        />
        <ImageC
          ImageC={howyouorderillustration}
          alttext="Illustration explaining how people select food from a menu"
        />
        <TitlePara
          overline="High level User Journey"
          heading="Getting the idea out of my brains"
          body="After several rounds of iterations i came up with a userflow. this was the most logical but was yet to be tested. this would help me draw a few wireframes which would help me think clearer."
        />
        <ImageC
          ImageC={userjourney}
          alttext="User journey of the app, after 3 iterations"
        />
        <TitlePara
          overline="Wire framing & Iterations."
          heading="Drawing a few sketches so i can think with a screen"
          body="After several rounds of iterations i came up with a userflow. this was the most logical but was yet to be tested. this would help me draw a few wireframes which would help me think clearer."
        />
        <ImageC
          ImageC="https://pic.pnnet.dev/2000x1000"
          alttext="Early sketchs of the app."
        />
        <TitlePara
          overline="Iteration 3 & High Fidelity design"
          heading="Creating Pixel Perfect Designs"
          body="After several rounds of iterations i came up with a userflow. this was the most logical but was yet to be tested. this would help me draw a few wireframes which would help me think clearer."
        />

        <ImageC ImageC={cover} />

        <ImageC ImageC={font} />

        <ImageC ImageC={color} />

  

        <TitlePara
          overline="Fixing Issues"
          heading="Fixing User Experience Issues"
          body="After several rounds of iterations i came up with a userflow. this was the most logical but was yet to be tested. this would help me draw a few wireframes which would help me think clearer."
        />
        <ImageCexplanation
          title="Cannot call the waiter"
          explanation="Missed the button to ping the waiter, added it on multiple screens"
          image={earlydesignflaw1}
          alttext="before and after fixing the problem"
        />
        <ImageCexplanation
          title="Difficult navigating to order page."
          explanation="After the user added a item to order and wants to confirm and place it, the user must go to orders which. and currently he had to go through multiple clicks to reach there. with a floating button. the clicks was reduced to one click"
          image={earlydesignflaw2}
          alttext="before and after fixing the problem"
        />
        <ImageCexplanation
          title="missing quantity button"
          explanation="Added the quantity button on the order page"
          image={earlydesignflaw4}
          alttext="before and after fixing the problem"
        />
        <ImageCexplanation
          title="Switching category from inside a category page"
          explanation="After user opened a category and if he wants to switch to another category he had to go back, which although works it would break the flow, to improve the experience a way to switch to another category was added at the end of every category page."
          image={earlydesignflaw5}
          alttext="before and after fixing the problem"
        />
        <ImageCexplanation image={earlydesignflaw6} />

        <TitlePara
          overline="Final Iteration"
          heading="Heuristics Analaysis"
          body="Text to be written"
        />

        <TitleBulletin
          heading="Achievements"
          body="Digital menu stands as one of the most impactful projects ive designed."
          bulletin={[
            "Helped provide a safer dining experience to hundreds of customers and potentially shielded them from the corona virus by minimising direct contact between customers and staff.",
            "Adoption of the digital menu concept by 14 other restaurants, showcasing its success, scalability and adaptability.",
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
        casestudytitle="Digital Menu: Paperless menu to fight the pandemic."
        content={<Content />}
        coverimg={cover}
        coverimgleft={coverleft}
        coverimgright={coverright}
      />
    </section>
  );
};

export default Digitalmenu;
