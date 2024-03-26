document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const arrow = document.querySelector(".arrow");
  
    window.addEventListener("scroll", function () {
      // ADD .TIGHT
      if (
        window.scrollY + window.innerHeight > wrapper.offsetHeight) {
        document.body.classList.add("tight");
        arrow.style.display = "none";
      } else {
        document.body.classList.remove("tight");
        arrow.style.display = "block";
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
  
