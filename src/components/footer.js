import { useEffect } from "react";

const Footer = () => {

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {

      const wrapper = document.querySelector(".wrapper");


      window.addEventListener("scroll", function () {
        // ADD .TIGHT
        if (
          window.scrollY + window.innerHeight > wrapper.offsetHeight
        ) {
          document.body.classList.add("tight");

        } else {
          document.body.classList.remove("tight");

        }
      });

      // BACK TO PRESENTATION MODE
      document.body.addEventListener("click", function (event) {
        if (
          event.target.matches("body.tight .wrapper") &&
          !event.target.closest(".arrow")
        ) {
          const scrollPosition =
            wrapper.offsetHeight - window.innerHeight;
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      });
    });





  }, []);



  return (
    <footer className="footer">

      Footer
    </footer>
  );
}

export default Footer;
