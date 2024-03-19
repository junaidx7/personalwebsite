
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
    
      var wrapperElement = document.getElementById('fuckingwrapperid');
      if (!wrapperElement) {
        console.log('NOOO WRAPPERR');
      }; // Exit if #fuckingwrapperid doesn't exist

      var windowHeight = window.innerHeight;
      var wrapperHeight = wrapperElement.offsetHeight;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop + windowHeight > wrapperHeight) {
        document.body.classList.add('tight');
      
       
      } else {
        document.body.classList.remove('tight');
       
       
      }
    });
  });


