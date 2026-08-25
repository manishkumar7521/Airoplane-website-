const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const scrollReveal = scrollRevealOption();
//const scrollRevealOption = new scrollRevealOption();

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});


navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance:"50px",
  duration:1000,
};
scrollReveal().reveal(".header_image img",{
  ...scrollRevealOption,
  origin: "right",
});
scrollReveal().reveal(".header_content p",{
  ...scrollRevealOption,
  delay:500
});
scrollReveal().reveal(".header_content h1",{
  ...scrollRevealOption,
  delay:1000
});
scrollReveal().reveal(".header_btns",{
  ...scrollRevealOption,
  delay:1500
});
scrollReveal().reveal(".destination_card",{
  ...scrollRevealOption,
  interval: 500,
});

scrollReveal().reveal(".showcase_image img",{
  ...scrollRevealOption,
  origin: "right",
});
scrollReveal().reveal(".showcase_content h4",{
  ...scrollRevealOption,
  delay:500
});
scrollReveal().reveal(".showcase_content p",{
  ...scrollRevealOption,
  delay:1000
});
scrollReveal().reveal(".showcase_btn",{
  ...scrollRevealOption,
  delay:1500
});

scrollReveal().reveal(".banner_card",{
  ...scrollRevealOption,
  interval: 500,
});
scrollReveal().reveal(".discover_card",{
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView:3,
  spaceBetween: 20,
  loop: true,
});


//scrollRevealOption is not found