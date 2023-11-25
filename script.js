const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function scrollToSection(event){
    event.preventDefault();
    console.log(event.target);
}


menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });