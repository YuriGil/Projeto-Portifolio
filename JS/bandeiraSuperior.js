  /*bandeira SUperior esquerda*/
  document.addEventListener("DOMContentLoaded", function() {
    var logo = document.querySelector(".logo");
    logo.classList.add("visible");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY === 0) {
        logo.classList.add("visible");
      } else {
        logo.classList.remove("visible");
      }
    });
    
  });
