const menu = document.getElementsByClassName("checkbtn")[0];
const navLink = document.getElementsByClassName("navigation")[0];

menu.addEventListener("click", () => {
  navLink.classList.toggle("active");
});

const backToTop = document.getElementsByClassName("back-to-top")[0];
window.addEventListener("scroll", () => {
  window.scrollY < 400
    ? backToTop.classList.add("hide")
    : backToTop.classList.remove("hide");
});
