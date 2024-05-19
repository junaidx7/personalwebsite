import { useEffect } from "react";
import Imagegrid4 from "./pieces/imagegrid4";
import cover from "../Projects/imagesforprojects/menu/cover.jpg";
import HeaderProduct from "./header-product";
import Sidebar from "./pieces/sidebar";
import BlockPara from "./pieces/BlockPara";
import Title2col from "./pieces/Title-2col";
import ImageC from "./pieces/Image-constricted";
import TitlePara from "./pieces/Title-para";
import Role from "./pieces/role";
import BlockText from "./pieces/BlockText";
import TitleBulletin from "./pieces/TitleBulletin";

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

  return (
    <section className="hourglass-section">
      <HeaderProduct></HeaderProduct>

      <div className="product-title-container">
        <h1 className="product-title  white w500 top-3xl bottom-3xl ">
          Digital Menu: Paperless menu to fight the pandemic.
        </h1>
      </div>

      <Imagegrid4
        imgcover={cover}
        halfleft="https://pic.pnnet.dev/600x500"
        halfright="https://pic.pnnet.dev/600x500"
      />

      <div className="project-content-section">
        <Sidebar></Sidebar>

        <div className="pieces-div-container">
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
              heading="Primay Goal"
              body=" My primary objective was to comprehend the fundamental challenges posed by the pandemic and devise a ‘digital menu’ solution that minimised direct interactions of customers with the restaurant staff. my primary role were as follows."
            />

            <TitlePara
              heading="Finding out why restaurant saw a dip in customers in the early phase of covid: User Interviews and Surveys."
              body="This app wasn't aimed at bring people out from their safe homes to the unsafe restaurants, but rather to keep safe the customers who were coming out to eat anyway. The reason the number  of customers in the restaurant saw a dip was clearly because of the fear but i wanted to learn what they feared was it coming in contact with the staff? or the indoor experience? and how many felt this way.  "
            />

            <ImageC
              ImageC="https://pic.pnnet.dev/2000x1000"
              alttext="Perfoming Interviews"
            />

            <ImageC
              ImageC="https://pic.pnnet.dev/2000x1000"
              alttext="Telegram Poll"
            />

            <ImageC
              ImageC="https://pic.pnnet.dev/2000x1000"
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
              ImageC="https://pic.pnnet.dev/2000x1000"
              alttext="Illustration explaining how people select food from a menu"
            />

            <TitlePara
              overline="User Flow Diagram"
              heading="Analyzing the data to come up with a user flow"
              body="After several rounds of iterations i came up with a userflow. this was the most logical but was yet to be tested. this would help me draw a few wireframes which would help me think clearer."
            />

            <ImageC
              ImageC="https://pic.pnnet.dev/2000x1000"
              alttext="User flow of the app, after 3 iterations"
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
              overline="Iteration TWO"
              heading="Fixing the early design flaws"
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

            <ImageC
              ImageC="https://pic.pnnet.dev/2000x3000"
              alttext="High Fidelity design of the app."
            />

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

        </div>
        
      </div>

      <div className="tobedelted">OTHER CASE STUDY</div>
    </section>
  );
};

export default Digitalmenu;
